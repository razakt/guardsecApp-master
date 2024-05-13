import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  isMenuOpen: boolean = false;

  ngOnInit(): void {
  }

  mobilenavclick(){
    this.isMenuOpen = !this.isMenuOpen;
  }

}
