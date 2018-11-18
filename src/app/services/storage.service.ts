import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, from } from 'rxjs';

import { CryptoUtil } from '../utils/crypto';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private registerSubject: BehaviorSubject<boolean> = new BehaviorSubject(null);
  private salt: string;
  private uuid: string;

  constructor() {
    this.getSalt();
    this.getUUID();
  }

  private getSalt() {
    const salt = localStorage.getItem('hencslhhs');
    if (salt) {
      this.salt = salt;
    } else if (!localStorage.getItem('uryrasj')) {
      this.salt = CryptoUtil.randomBase32(32);
      localStorage.setItem('hencslhhs', this.salt);
    }
  }

  private getUUID() {
    const uuid = localStorage.getItem('fjsfjfwpfkwf');
    if (uuid) {
      this.uuid = uuid;
    } else if (!localStorage.getItem('uryrasj')) {
      const nav = window.navigator;
      const screen = window.screen;
      let newUUID = nav.mimeTypes.length.toString();
      newUUID += nav.userAgent.replace(/\D+/g, '');
      newUUID += nav.plugins.length;
      newUUID += screen.height || '';
      newUUID += screen.width || '';
      newUUID += screen.pixelDepth || '';
      this.uuid = newUUID;
      localStorage.setItem('fjsfjfwpfkwf', this.uuid);
    }
  }

  public isValidState(): Observable<boolean> {
    const encryptedKey = localStorage.getItem('uryrasj');
    if (encryptedKey) {
      this.registerSubject.next(true);
    } else {
      this.registerSubject.next(false);
    }
    return this.registerSubject.asObservable();
  }

  public getSharedKey(PIN: string): string {
    const encryptedKey = localStorage.getItem('uryrasj');
    if (encryptedKey) {
      return CryptoUtil.decryptSharedKey(encryptedKey, PIN, this.uuid, this.salt);
    } else {
      return null;
    }
  }

  public registerSharedKey(sharedKey: string, PIN: string): void {
    const encryptedKey = CryptoUtil.encryptSharedKey(sharedKey, PIN, this.uuid, this.salt);
    localStorage.setItem('uryrasj', encryptedKey);
  }

}
