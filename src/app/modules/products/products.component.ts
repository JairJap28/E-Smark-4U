import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate} from '@angular/animations';

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

  constructor() { }

  ngOnInit(): void {
  }

}
