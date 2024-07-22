import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryLookupServiceService {

  constructor(private countryService: countryLookupService) {}
getCountryDetails(event: any) {
  this.countryService.getCountryData(/*event info*/).subscribe(data => {
    // What goes here
  })
}
}
