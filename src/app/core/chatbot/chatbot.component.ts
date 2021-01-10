import { Component, OnInit } from '@angular/core';

import { faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons';

type MyWindow = (typeof window) & {
  kommunicate: any;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  faThumbsUp = faThumbsUp;
  open:boolean = true;
  iconMainButton: any;

  constructor() {
    this.showSocialNetworks();
  }

  ngOnInit(): void {
  }

  showSocialNetworks(){
    this.open = !this.open;
    this.iconMainButton = this.open ? faTimes : faThumbsUp;
  }

  goToLink(url: string){
      window.open(url, "_blank");
  }
}
