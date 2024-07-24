import { Component } from '@angular/core';
import { CountryLookupService } from '../country-lookup.service';
import { DemographicInfoComponent } from '../demographic-info/demographic-info.component';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})

export class WorldMapComponent {
  constructor(public countryService: CountryLookupService) {}
  countryDetails : any;
  clickCountry(event:any) {
    this.countryService.getCountryData(event.target.id).subscribe(data => {
      // Separate data into map (bugfix attempt)
      data = new Subject(countryData => {
        countryData.locName = data[1][0].name,
        countryData.countryCapital = data[1][0].capitalCity,
        countryData.countryRegion = data[1][0].region,
        countryData.countryLat = data[1][0].latitude,
        countryData.countryLong = data[1][0].longitude,
        countryData.countryIncomeLevel = data[1][0].incomeLevel
      }
      
    );

   // Display the location data retrieved from the API 
    
      // $("#countryRegion").text = countryRegion;
      // $("#countryLat").text = countryLat;
      // $("#countryLong").text = countryLong;
    })
  }
}

