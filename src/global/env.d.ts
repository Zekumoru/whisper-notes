declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: 'development' | 'production';
      DEEPGRAM_API_KEY?: string;
    }
  }
}

export {};
