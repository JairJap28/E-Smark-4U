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
  classShake: any = { state: '', class: '' };


  constructor() {
    this.TimeOut();
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

}
