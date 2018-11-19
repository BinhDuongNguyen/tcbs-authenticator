import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public homeContainerHeight: string;

  constructor() { }

  ngOnInit() {
    this.homeContainerHeight = window.innerHeight - 80 - 64 + 'px';
    console.log(15, window.innerHeight);
    console.log(16, window.innerHeight);
  }

}
