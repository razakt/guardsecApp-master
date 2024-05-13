import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollUp(){
          window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
  }

}
