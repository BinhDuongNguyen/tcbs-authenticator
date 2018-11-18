import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinService {

  public PINPadSubject: Subject<string> = new Subject();
  public PINPadResultSubject: Subject<string> = new Subject();

  constructor() { }

  public openPINPad(title: string): Observable<string> {
    this.PINPadSubject.next(title);
    return this.PINPadResultSubject.asObservable();
  }

  public closePINPad(value: string) {
    this.PINPadSubject.next(null);
    this.PINPadResultSubject.next(value);
  }
}
