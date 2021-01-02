import { Component, OnInit } from '@angular/core';
import { RealTimeDatabaseServiceService } from './shared/services/real-time-database-service.service';

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

  constructor(private realtimeDb: RealTimeDatabaseServiceService) {
    this.getSuccessCases();
    this.getServices();
  }

  ngOnInit(): void {
  }

  getSuccessCases() {
    this.realtimeDb.getRealTimeSuccessCases()
        .subscribe(data => {
          localStorage.setItem('SuccessCases', JSON.stringify(data));
        });
  }

  getServices() {
    this.realtimeDb.getServices()
        .subscribe(data => {
          localStorage.setItem('Services', JSON.stringify(data));
        });
  }

  classClickMenu(event: string){
    this.classCustomContent = event;
    console.log(this.classCustomContent);
  }
}
