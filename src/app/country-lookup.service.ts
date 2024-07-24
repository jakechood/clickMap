import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryLookupService {

  constructor(private http: HttpClient) { }
  getCountryData(countryCode: string): Observable<any> {
  // Return statement should concat api call with country code
  var dataCall = this.http.get("https://api.worldbank.org/v2/country/" + countryCode + "?format=json")
  return dataCall
  
}
  showCountryData() {
    datacall[] = new ReplaySubject(let countryData => {
      countryData.locName = data[1][0].name,
      countryData.countryCapital = data[1][0].capitalCity,
      countryData.countryRegion = data[1][0].region,
      countryData.countryLat = data[1][0].latitude,
      countryData.countryLong = data[1][0].longitude,
      countryData.countryIncomeLevel = data[1][0].incomeLevel
    } 
    
  );
  }
}