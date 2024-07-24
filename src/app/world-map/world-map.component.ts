import { Component } from '@angular/core';
import { CountryLookupService } from '../country-lookup.service';
import { DemographicInfoComponent } from '../demographic-info/demographic-info.component';
import { ReplaySubject } from 'rxjs';
import { addData } from '../demographic-info/demographic-info.component'

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})

export class WorldMapComponent {
  countryData : any;
  constructor(public countryService: CountryLookupService) {}
  clickCountry(event:any) {
    this.countryService.getCountryData(event.target.id).subscribe(data => ({
      // Separate data into logical variables
      locName : data[1][0].name,
      countryCapital : data[1][0].capitalCity,
      countryRegion : data[1][0].region,
      countryLat : data[1][0].latitude,
      countryLong : data[1][0].longitude,
      countryIncomeLevel : data[1][0].incomeLevel
      }
      )
      
    );
  };
  ngOnInit() {
    this.countryService.cast.subscribe(countryData => this.countryData = countryData)
  }
}

