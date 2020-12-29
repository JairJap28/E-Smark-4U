import { Component, OnInit } from '@angular/core';

type MyWindow = (typeof window) & {
  kommunicate: any;
}

@Component({
  selector: 'app-chatbot',
  template: '',
  styles: []
})
export class ChatbotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
