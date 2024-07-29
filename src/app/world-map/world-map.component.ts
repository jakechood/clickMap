import { Component } from '@angular/core';
import { CountryLookupService } from '../country-lookup.service';
import { DemographicInfoComponent } from '../demographic-info/demographic-info.component';
import { ReplaySubject } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [NgIf],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})

export class WorldMapComponent {
  // Construct service pull
  constructor(public countryService: CountryLookupService) {}
  // Declare function named in svg element
  clickCountry(event:any) {
    // Output service call with function targeting mouse target
    // @Output(
        // this.countryService.getCountryData(event.target.id).subscribe(data => {
          
        //   // Separate data into logical variables
        //   locName : data[1][0].name,
        //   countryCapital : data[1][0].capitalCity,
        //   countryRegion : data[1][0].region,
        //   countryLat : data[1][0].latitude,
        //   countryLong : data[1][0].longitude,
        //   countryIncomeLevel : data[1][0].incomeLevel
        //   })
        // )
      // ;
  };

}

