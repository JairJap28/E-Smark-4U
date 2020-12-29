import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import ICountryParam from './entities/ICountryParam';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http:HttpClient) { }

  getCountries(): Observable<any> {
    const url = 'https://restcountries.eu/rest/v2/all';
    return this.http.get(url).pipe(map(data => data));
  }

  getCitiesByCountry(country: string) {
    const url = 'https://countriesnow.space/api/v0.1/countries/cities';
    let param = {
      country
    }
    return this.http.post(url, param);
  }
}
