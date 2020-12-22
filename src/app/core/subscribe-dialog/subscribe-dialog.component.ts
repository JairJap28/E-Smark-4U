import { Component, OnInit } from '@angular/core';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { CountriesService } from 'src/app/shared/services/countries.service';

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

  constructor(private countriesService: CountriesService) {
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
    this.countriesService.getCitiesByCountry(country).subscribe((data: any) => {
      this.listCities = data.data;
    })
  }

}
