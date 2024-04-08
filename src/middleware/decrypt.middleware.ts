import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
import { decryptData } from 'src/decryptor';
// import { decryptData } from './decryptor'; // Import your decryption logic

@Injectable()
export class DecryptMiddleware implements NestMiddleware {
    constructor(private configService: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    // Assuming your encrypted data is sent in the request body or headers
    const encryptedData = req.body.encryptedData || req.headers['encrypted-data'];

    // Check if encryptedData is present
    // if (!encryptedData) {
    //     // If encryptedData is not present, simply pass the request
    //     return next();
    // }

    const secret = this.configService.get('SECRET_KEY')
    console.log(secret);
    
    // Decrypt the data using your decryption logic and key
    const decryptedData = decryptData(encryptedData, secret);

    // Attach the decrypted data to the request object for further processing
    req.decryptedData = decryptedData;

    next();
  }
}