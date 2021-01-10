import { Component, OnInit } from '@angular/core';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { CountriesService } from 'src/app/shared/services/countries.service';
import SubscribeEntity from './SubscribeEntity';
import { RealTimeDatabaseServiceService } from '../../shared/services/real-time-database-service.service';

@Component({
  selector: 'app-subscribe-dialog',
  templateUrl: './subscribe-dialog.component.html',
  styleUrls: ['./subscribe-dialog.component.css']
})
export class SubscribeDialogComponent implements OnInit {

  faPhone = faPhone;
  faUser = faUser;

  listCountries: any[] = [];
  listCities: any[] = [];

  name: string = "";
  email: string = "";
  phone: string = "";
  country: string = "";
  city: string = "";
  whatsapp: boolean = false;

  constructor(private countriesService: CountriesService, private db: RealTimeDatabaseServiceService) {
    this.getCountries();
  }

  ngOnInit(): void {
  }

  getCountries(){
    this.countriesService.getCountries().subscribe((data: any) => {
      this.listCountries = data;
      this.listCities = [];
    })
  }

  getCity(country: string){
    this.country = country;
    this.countriesService.getCitiesByCountry(country).subscribe((data: any) => {
      this.listCities = data.data;
    });
  }

  changeCity(city: string) {
    this.city = city;
  }

  subscribe(){
    let suscriber:SubscribeEntity = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      country: this.country,
      city: this.city,
      whatsapp: this.whatsapp
    }

    this.db.saveSubscriber(suscriber);

    this.name = '';
    this.email = '';
    this.phone = '';
    this.country = '';
    this.city = '';
    this.whatsapp = false;
  }

}
