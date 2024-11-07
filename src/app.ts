import 'dotenv/config';
import { createClient } from '@deepgram/sdk';
import { srt } from '@deepgram/captions';
import fs from 'fs/promises';
import path from 'path';
import logger from './logger';
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

  for await (const audioFilename of audioDirFiles) {
    const audioPath = path.join(audioDirPath, audioFilename);
    const noExtAudioFilename = audioFilename.substring(
      0,
      audioFilename.lastIndexOf('.')
    );
    const audioOutPath = path.join(audioDirPath, noExtAudioFilename);

    logger.info(`Started audio transcription: ${noExtAudioFilename}`);

    const [error, transcribed] = await asyncErrorHandler(transcribe(audioPath));
    if (!transcribed) {
      logger.error(error, `Could not transcribed audio: ${noExtAudioFilename}`);
      continue;
    }

    await fs.writeFile(audioOutPath, transcribed, 'utf8');

    logger.info(`Saved audio transcription: ${noExtAudioFilename}`);
  }
};

app();
