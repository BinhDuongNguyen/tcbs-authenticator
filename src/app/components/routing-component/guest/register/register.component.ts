import { Component, OnInit } from '@angular/core';
import { PinService } from 'src/app/components/core-component/pin/pin.service';
import { MatSnackBar } from '@angular/material';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public firstPIN: string;
  public secondPIN: string;
  public firstInputKey: string;

  public finalPIN: string;
  public userKey: string;

  public state: number;

  public parentHeight: string;

  constructor(
    private pinService: PinService,
    private snackBar: MatSnackBar,
    private storageService: StorageService,
    private router: Router
  ) {
    this.parentHeight = window.innerHeight - 80 - 78 - 24 -24 + 'px';
  }

  ngOnInit() {
    this.storageService.isValidState().subscribe((isValid: boolean) => {
      if (!isValid) {
        this.state = 1;
      } else {
        this.state = 4;
      }
    });
  }

  public register() {
    this.state += 1;
  }

  public confirmKey() {
    if (this.firstInputKey) {
      this.userKey = this.firstInputKey;
      this.state += 1;
    } else {
      this.snackBar.open('Bạn vui lòng nhập mã xác thực', 'Đóng', {
        duration: 3000,
      });
    }
  }

  public createPin() {
    const firstPINSubscription = this.pinService.openPINPad('Vui lòng tạo mã PIN cho xác thực OTP').subscribe((firstPIN: string) => {
      firstPINSubscription.unsubscribe();
      if (firstPIN) {
        this.firstPIN = firstPIN;
        const secondPINSubscription = this.pinService.openPINPad('Vui lòng xác nhận mã PIN đã tạo').subscribe((secondPIN: string) => {
          secondPINSubscription.unsubscribe();
          if (secondPIN) {
            this.secondPIN = secondPIN;
            if (this.firstPIN === this.secondPIN) {
              this.finalPIN = this.firstPIN;
              this.storageService.registerSharedKey(this.userKey, this.finalPIN);
              this.state += 1;
            } else {
              this.snackBar.open('Mã PIN xác nhận không chính xác', 'Đóng', {
                duration: 3000,
              });
            }
          } else {
            this.snackBar.open('Bạn phải xác nhận lại mã PIN để tiếp tục', 'Đóng', {
              duration: 3000,
            });
          }
        });
      } else {
        this.snackBar.open('Bạn phải tạo PIN để tiếp tục', 'Đóng', {
          duration: 3000,
        });
      }
    });
  }

  public goHome() {
    this.router.navigate(['/home/basic-otp']);
  }

}
