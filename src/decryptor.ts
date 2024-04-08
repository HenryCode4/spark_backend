import * as CryptoJS from 'crypto-js';

export function decryptData(encryptedData: string, key: string): string {
    
    const bytes  = CryptoJS.AES.decrypt(encryptedData, key);
    return bytes.toString(CryptoJS.enc.Utf8);
}