import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryLookupService {

  constructor(private http: HttpClient) { }
  getCountryData(countryCode: string): Observable<any> {
    //return dynamic api call here
    //return ...
  }
}
