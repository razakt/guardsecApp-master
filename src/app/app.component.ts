import { Component } from '@angular/core';
import {mobile_nav_click} from 'src/assets/js/all.js';

//declare function mobile_nav_click():any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){

  }
  title = 'guardsecApp';
  isMenuOpen: boolean = false;
  
ngOnInit(){
  // var iframe = document.createElement('iframe');
  // iframe.onload = function() { alert('myframe is loaded'); }; // before setting 'src'
  // iframe.src = 'https://podcasts.ceu.edu/sites/podcasts.ceu.edu/files/sample.doc'; 
  // document.body.appendChild(iframe); 
}

  mobilenavclick(){
    this.isMenuOpen = !this.isMenuOpen;
  }
 
}
