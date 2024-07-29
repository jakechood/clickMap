import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {

  constructor(private ) { }
  showCountryData(CountryLookupService)
}

export class CountryLookupService {
  constructor(private http: HttpClient) { }
  getCountryData(countryCode: string): Observable<any> {
  // Return statement should concat api call with country code
  return this.http.get("https://api.worldbank.org/v2/country/" + countryCode + "?format=json")
}
