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
    (function(d, m){
      var kommunicateSettings =
          {"appId":"943728b7d64546ef70a1af8c4bd48e59","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      (window as MyWindow).kommunicate = m; m._globals = kommunicateSettings;
  })(document, (window as MyWindow).kommunicate || {});
  }

}
