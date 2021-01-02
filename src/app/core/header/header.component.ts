import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  open: boolean = false;
  classResponsive: string;

  @Output()
  outputClass = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickMenu(){
    this.open = !this.open;
    this.classResponsive = this.open ? "header__content__responsive" : "";

    this.outputClass.emit(this.classResponsive);
  }

}
