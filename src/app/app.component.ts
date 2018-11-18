import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isRegistered: boolean;

  constructor(private storageService: StorageService) {

  }

  ngOnInit() {
    this.storageService.isValidState().subscribe((isValid: boolean) => {
      if (!isValid) {
        this.isRegistered = false;
      } else {
        this.isRegistered = true;
      }
    });    
  }

}
