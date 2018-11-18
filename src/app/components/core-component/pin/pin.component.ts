import { Component, OnInit } from '@angular/core';
import { PinService } from './pin.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {

  public isShowPinPad: boolean;
  public pin = '';
  public title = '';

  constructor(private pinService: PinService) { }

  ngOnInit() {
    this.pinService.PINPadSubject.subscribe((title) => {
      if (title) {
        this.isShowPinPad = true;
        this.title = title;
      } else {
        this.pin = '';
        this.title = '';
        this.isShowPinPad = false;
      }
    });
  }

  public pressKey(number: number) {
    this.pin += number;
    if (this.pin.length === 4) {
      this.pinService.closePINPad(this.pin);
    }
  }

  public pressBack() {
    this.pin = this.pin.substring(0, this.pin.length - 1);
  }

  public close() {
    this.pinService.closePINPad(null);
  }

}
