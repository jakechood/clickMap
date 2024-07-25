import { Component } from '@angular/core';
import { CountryLookupService } from '../country-lookup.service';
import { DemographicInfoComponent } from '../demographic-info/demographic-info.component';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})

export class WorldMapComponent {
  // Construct service pull
  constructor(public countryService: CountryLookupService, public countryData : Array<any> ) {}
  // Declare function named in svg element
  
  clickCountry(event:any) {
    @NgFor(
        this.countryService.getCountryData(event.target.id).subscribe(data => ({
          // Separate data into logical variables
          locName : data[1][0].name,
          countryCapital : data[1][0].capitalCity,
          countryRegion : data[1][0].region,
          countryLat : data[1][0].latitude,
          countryLong : data[1][0].longitude,
          countryIncomeLevel : data[1][0].incomeLevel
          })
        )
      );
  };
  title = 'countryData';
}

