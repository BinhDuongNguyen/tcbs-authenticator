import * as crypto from 'crypto-js';

export class CryptoUtil {
  constructor() {
  }

  public static randomBase32(length) {
    const base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    length = length % 2 === 0 ? length : length + 1; // ensuring even length
    const secret = [];
    for (let i = 0; i < length; i++) {
      secret.push(base32chars.split('')[Math.floor(Math.random() * 32)]);
    }
    return secret.join('');
  }

  private static toKEK(pin: string, salt: string): string {
    // using a same salt on 2 hash phases is make sense
    return crypto.PBKDF2(crypto.HmacSHA256(pin, salt).toString(), salt, { keySize: 256 / 32, iterations: 4096 }).toString();
  }

  private static toEEK(deviceUUID: string, salt: string): string {
    // using a same salt on 2 hash phases is make sense
    return crypto.PBKDF2(crypto.HmacSHA256(deviceUUID, salt).toString(), salt, { keySize: 256 / 32, iterations: 4096 }).toString();
  }

  private static AESEncrypt(msg: string, key: string): string {
    const encrypted = crypto.AES.encrypt(msg, key, {
      padding: crypto.pad.Pkcs7,
      mode: crypto.mode.CBC
    });

    return encrypted.toString();
  }

  private static AESDencrypt(encryptedStr: string, key: string): string {
    const decrypted = crypto.AES.decrypt(encryptedStr, key, {
      padding: crypto.pad.Pkcs7,
      mode: crypto.mode.CBC
    });

    return decrypted.toString(crypto.enc.Utf8);
  }

  public static encryptSharedKey(sharedKey: string, PIN: string, deviceUUID: string, salt: string): string {
    const kek = this.toKEK(PIN, salt);
    const eek = this.toEEK(deviceUUID, salt);
    const enc1 = this.AESEncrypt(sharedKey, kek);
    const enc2 = this.AESEncrypt(enc1, eek);

    return enc2;
  }

  public static decryptSharedKey(encryptedSharedKey: string, PIN: string, deviceUUID: string, salt: string): string {
    const kek = this.toKEK(PIN, salt);
    const eek = this.toEEK(deviceUUID, salt);
    const dec1 = this.AESDencrypt(encryptedSharedKey, eek);
    const dec2 = this.AESDencrypt(dec1, kek);

    return dec2;
  }
}
