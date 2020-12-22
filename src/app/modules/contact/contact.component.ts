import { Component, OnInit } from '@angular/core';

import { faUser, faAt, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faUser = faUser;
  faAt = faAt;
  faPhone = faPhone;
  faPaperPlane = faPaperPlane;

  constructor() { }

  ngOnInit(): void {
  }

}
