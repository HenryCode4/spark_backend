import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      decryptedData?: string; // Add your custom property here
    }
  }
}