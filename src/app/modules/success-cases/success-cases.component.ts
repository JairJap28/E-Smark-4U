import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger} from '@angular/animations';
import CaseEntity from './CaseEntity';
import { faCaretRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { RealTimeDatabaseServiceService } from '../../shared/services/real-time-database-service.service';
import { Observable } from 'rxjs';

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('300ms', animate('700ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true}
    )
  ])
]);

@Component({
  selector: 'app-success-cases',
  templateUrl: './success-cases.component.html',
  styleUrls: ['./success-cases.component.css'],
  animations: [
    trigger('BottomEnter', [
      state('enter', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(150%)' }),
        animate('1s 1000ms ease-in')
      ])
    ]), listAnimation
  ]
})
export class SuccessCasesComponent implements OnInit {
  faCaretRight = faCaretRight;
  faTimes = faTimes;

  listCompanies: CaseEntity[] = [];
  public company: CaseEntity;

  constructor() {
    this.getSuccessCases();
  }

  ngOnInit(): void {
  }

  getSuccessCases() {
    this.listCompanies = JSON.parse(localStorage.getItem('SuccessCases'));
  }

  showCompany(company: CaseEntity): void{
    this.company = company;
  }

  showNextCompany(){
    let index = this.listCompanies.findIndex(item => item.name == this.company.name) + 1;
    if(index >= this.listCompanies.length) index = 0;
    this.company = this.listCompanies[index];
  }

  showPreviosCompany(){
    let index = this.listCompanies.findIndex(item => item.name == this.company.name) - 1;
    if(index < 0) index = this.listCompanies.length - 1;
    this.company = this.listCompanies[index];
  }
}
