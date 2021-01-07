import { Component, Input, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ProductEntity from '../products/ProductEntity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faPaperPlane = faPaperPlane;
  services: ProductEntity[] = [];

  constructor() {
    this.getServices();
  }

  getServices(){
    this.services = JSON.parse(localStorage.getItem('Services'));
  }

  ngOnInit(): void {
  }

}
