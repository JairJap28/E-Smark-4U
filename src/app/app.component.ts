import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
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
  title = 'E-Smark 4U';

  classCustomContent: string;

  constructor(private realtimeDb: RealTimeDatabaseServiceService, private swUpdate: SwUpdate) {
    this.getSuccessCases();
    this.getServices();
    this.getTrusthingOnUS();
  }

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

          if(confirm("Hay una nueva versión disponible. ¿Desea cargar la nueva versión?")) {

              window.location.reload();
          }
      });
  }
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

  getTrusthingOnUS() {
    this.realtimeDb.getTrusthingOnUs()
        .subscribe(data => {
          localStorage.setItem('TrustingOnUs', JSON.stringify(data));
        });
  }

  classClickMenu(event: string){
    this.classCustomContent = event;
    console.log(this.classCustomContent);
  }
}
