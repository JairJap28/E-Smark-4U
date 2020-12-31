import { Component, OnInit } from '@angular/core';

type MyWindow = (typeof window) & {
  kommunicate: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shoppingCampaings';

  classCustomContent: string;

  ngOnInit(): void {
  }

  classClickMenu(event: string){
    this.classCustomContent = event;
    console.log(this.classCustomContent);
  }
}
