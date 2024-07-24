import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryLookupService {
  public countryDetails = new BehaviorSubject<any>();
  cast = this.countryDetails.asObservable();
  constructor(private http: HttpClient) { }
  getCountryData(countryCode: string): Observable<any> {
  // Return statement should concat api call with country code
  countryDetails = this.http.get("https://api.worldbank.org/v2/country/" + countryCode + "?format=json");
  return this.http.get("https://api.worldbank.org/v2/country/" + countryCode + "?format=json")
  
    
}
}