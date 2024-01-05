import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  menuIsClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickMenu() {
    this.menuIsClicked = !this.menuIsClicked;
  }

}
