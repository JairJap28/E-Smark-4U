import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private router: Router) {
    let isLoged: Boolean = Boolean(JSON.parse(localStorage.getItem('loged')));
    if(!isLoged) this.router.navigate(['Home']);
  }

  ngOnInit(): void {
  }

}
