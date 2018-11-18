import { Component, OnInit } from '@angular/core';
import { TOTPService } from 'src/app/services/totp.service';
import { StorageService } from 'src/app/services/storage.service';
import { PinService } from 'src/app/components/core-component/pin/pin.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-advance-otp',
  templateUrl: './advance-otp.component.html',
  styleUrls: ['./advance-otp.component.scss'],
  providers: [TOTPService]
})
export class AdvanceOtpComponent implements OnInit {

  public otp: string;
  public transactionId: string;

  public remainTime: number;
  public percentTime: number;

  private key: string;

  constructor(
    private tOTPService: TOTPService,
    private storageService: StorageService,
    private pinService: PinService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  getOtp() {
    if (!this.transactionId) {
      this.snackBar.open('Phải nhập OTP cho giao dịch nâng cao', 'Đóng', {
        duration: 3000,
      });
    } else {
      this.pinService.openPINPad('Vui lòng nhập mã PIN cho xác thực OTP').subscribe((PIN: string) => {
        try {
          this.key = this.storageService.getSharedKey(PIN);
        } catch (ex) {
          this.snackBar.open('Wrong PIN', 'Đóng', {
            duration: 3000,
          });
          return;
        }
        if (!this.key) {
          this.snackBar.open('Wrong PIN', 'Đóng', {
            duration: 3000,
          });
          return;
        } else {
          this.regenerateOtp();
        }
      });
    }

  }

  private updateOtp() {
    this.otp = this.tOTPService.genTOTP(this.key, Number(this.transactionId)).toString();
  }

  private regenerateOtp() {
    this.updateOtp();
    this.timer();
    setInterval(() => {
      this.timer();
    }, 1000);
  }

  private timer() {
    const epoch = Math.round(new Date().getTime() / 1000.0);
    this.remainTime = 30 - (epoch % 30);
    this.percentTime = (30 - this.remainTime) / 30 * 100;
    if (epoch % 30 === 0) {
      this.updateOtp();
    }
    return;
  }

}
