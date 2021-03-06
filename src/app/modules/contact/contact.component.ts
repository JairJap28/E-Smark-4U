import { style, animate, trigger, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { faUser, faAt, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ContactEntity from './ContactEntity';
import { RealTimeDatabaseServiceService } from '../../shared/services/real-time-database-service.service';

const ShakeAnimation = [
	style({ transform: 'rotate(0)' }),
	animate('0.1s', style({ transform: 'rotate(2deg)' })),
	animate('0.1s', style({ transform: 'rotate(-2deg)' })),
	animate('0.1s', style({ transform: 'rotate(2deg)' })),
	animate('0.1s', style({ transform: 'rotate(0)' })),
];

export const QueryShake = [
	trigger('queryShake', [
		transition('* => default', ShakeAnimation),
	]),
];

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [QueryShake]
})
export class ContactComponent implements OnInit {

  faUser = faUser;
  faAt = faAt;
  faPhone = faPhone;
  faPaperPlane = faPaperPlane;
  classShake: any = { state: '', class: '' };

  contact: ContactEntity;

  constructor(private db: RealTimeDatabaseServiceService) {
    this.TimeOut();
    this.initData();
  }

  initData(){
    this.contact = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  }

  TimeOut(){
    setTimeout(() => {
      this.classShake.state = !this.classShake.state;
      this.classShake.class = this.classShake.state ? "shake" : "";
      this.TimeOut();
    }, 8000);
  }

  ngOnInit(): void {
  }

  saveContact(){
    this.db.saveContact(this.contact);
    this.initData();
  }
}
