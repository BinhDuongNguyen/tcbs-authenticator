import { Injectable } from '@angular/core';

declare var jsSHA: any;

@Injectable()
export class TOTPService {

  public genTOTP(secret: string, data?: number) {
    const epoch = Math.round(new Date().getTime() / 1000.0);
    if (data) {
      return this.genOtp(secret, Math.floor(epoch / 30), data);
    } else {
      return this.genOtp(secret, Math.floor(epoch / 30));
    }
  }

  public genOtp(secret: string, counter: number, data?: number): number {

    const secretInHex = base32tohex(secret);

    const shaObj = new jsSHA('SHA-1', 'HEX');
    const counterInHex = leftpad(dec2hex(counter), 16, '0');
    shaObj.setHMACKey(secretInHex, 'HEX');
    shaObj.update(counterInHex);
    if (data) {
      const dataInHex = leftpad(dec2hex(data), 16, '0');
      shaObj.update(dataInHex);
      console.log(32, dataInHex);
    }
    const hmac = shaObj.getHMAC('HEX');

    const offset = hex2dec(hmac.substring(hmac.length - 1));

    // tslint:disable-next-line:no-bitwise
    const otp = (hex2dec(hmac.substr(offset * 2, 8)) & hex2dec('7fffffff'));
    return otp % 1000000;
  }
}

function dec2hex(s) { return (s < 15.5 ? '0' : '') + Math.round(s).toString(16); }
function hex2dec(s) { return parseInt(s, 16); }

function base32tohex(base32) {
  const base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  let bits = '';
  let hex = '';

  for (let i = 0; i < base32.length; i++) {
    const val = base32chars.indexOf(base32.charAt(i).toUpperCase());
    bits += leftpad(val.toString(2), 5, '0');
  }

  for (let j = 0; j + 4 <= bits.length; j += 4) {
    const chunk = bits.substr(j, 4);
    hex = hex + parseInt(chunk, 2).toString(16);
  }
  return hex;

}

function leftpad(str, len, pad) {
  if (len + 1 >= str.length) {
    str = Array(len + 1 - str.length).join(pad) + str;
  }
  return str;
}
