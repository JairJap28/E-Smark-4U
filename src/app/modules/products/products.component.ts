import { Component, OnInit } from '@angular/core';
import { faPaperPlane, faCaretRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate} from '@angular/animations';
import ProductEntity from './ProductEntity';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('LeftEnter', [
      state('enter', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-150%)' }),
        animate('1s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 })),
      ])
    ]),
    trigger('RightEnter', [
      state('enter', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(150%)' }),
        animate('1s 300ms ease-in')
      ]),
    ]),
    trigger('StaticAppear', [
      state('enter', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s 300ms ease-in')
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit {

  faPaperPlane = faPaperPlane;
  faCaretRight = faCaretRight;
  faTimes = faTimes;
  services: ProductEntity[] = [];
  producto: ProductEntity;

  constructor() { this.getServices(); }

  ngOnInit(): void {
  }

  getServices(){
    this.services = JSON.parse(localStorage.getItem('Services'));
  }

  showProduct(service: ProductEntity){
    this.producto = service;
  }

  showNextProduct(){
    let index = this.services.findIndex(item => item.name === this.producto.name);
    if(index + 1 < this.services.length) index++;
    else index = 0;

    this.producto = this.services[index];
  }

  showPreviousProduct(){
    let index = this.services.findIndex(item => item.name === this.producto.name);
    if(index - 1 >= 0) index--;
    else index = this.services.length - 1;

    this.producto = this.services[index];
  }
}
