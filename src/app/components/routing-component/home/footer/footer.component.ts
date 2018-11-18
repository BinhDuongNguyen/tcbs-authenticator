import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public currentUrl: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentUrl = this.router.url;
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentUrl = val.url;
        console.log(this.currentUrl);
      }
    });
  }
  public routing(path: string) {
    this.router.navigate([path]);
  }

}
