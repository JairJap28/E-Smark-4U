import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  faHome = faHome;
  open: boolean = false;
  classResponsive: string;
  loged: boolean = false;

  @Output()
  outputClass = new EventEmitter<string>();

  constructor(private router: Router) {
    this.loged = Boolean(JSON.parse(localStorage.getItem('loged')));
  }

  ngOnInit(): void {
  }

  clickMenu(){
    this.open = !this.open;
    this.classResponsive = this.open ? "header__content__responsive" : "";

    this.outputClass.emit(this.classResponsive);
  }

  logOut(){
    this.loged = false;
    localStorage.setItem('loged', 'false');
    this.router.navigate(['Home']);
  }
}
