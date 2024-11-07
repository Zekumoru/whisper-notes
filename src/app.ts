import 'dotenv/config';
import { createClient } from '@deepgram/sdk';
import { srt } from '@deepgram/captions';
import fs from 'fs/promises';
import path from 'path';
import logger from './utils/logger';
import asyncErrorHandler from './utils/asyncErrorHandler';

const deepgram = createClient(process.env.DEEPGRAM_API_KEY);

const transcribe = async (filepath: string): Promise<string> => {
  const file = await fs.readFile(filepath);
  const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
    file,
    {
      model: 'whisper',
      language: 'it',
      smart_format: true,
    }
  );

  if (error) {
    throw error;
  }

  return srt(result);
};

const app = async () => {
  const audioDirPath = path.join(__dirname, 'tmp');
  const audioDirFiles = await fs.readdir(audioDirPath);

  for (let i = 0; i < audioDirFiles.length; i++) {
    const audioFilename = audioDirFiles[i];
    const audioPath = path.join(audioDirPath, audioFilename);
    const noExtAudioFilename = audioFilename.substring(
      0,
      audioFilename.lastIndexOf('.')
    );
    const audioOutPath = path.join(audioDirPath, `${noExtAudioFilename}.srt`);

    logger.info(
      `Started audio transcription (${i + 1} out of ${
        audioDirFiles.length
      }): ${noExtAudioFilename}`
    );

    const [error, transcribed] = await asyncErrorHandler(transcribe(audioPath));
    if (!transcribed) {
      logger.error(
        error,
        `Could not transcribed audio (${i + 1} out of ${
          audioDirFiles.length
        }): ${noExtAudioFilename}`
      );
      continue;
    }

    await fs.writeFile(audioOutPath, transcribed, 'utf8');

    logger.info(
      `Saved audio transcription (${i + 1} out of ${
        audioDirFiles.length
      }): ${noExtAudioFilename}`
    );
  }
};

app();
