import { Component, inject } from '@angular/core';
import { WorldMapComponent } from '../world-map/world-map.component';
import { CountryLookupService } from '../../app/country-lookup.service';
import { AppComponent } from '../app.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-demographic-info',
  standalone: true,
  imports: [WorldMapComponent, AppComponent],
  providers : [CountryLookupService],
  templateUrl: './demographic-info.component.html',
  styleUrl: './demographic-info.component.css'
})
export class DemographicInfoComponent {
  constructor (showCountryData : WorldMapComponent) {};
  showCountryData(event:any) {
    // Output service call with function targeting mouse target
    @Input(
        this.countryService.showCountryData(event.target.id).subscribe(data => ({
          // // Separate data into logical variables
          // locName : data[1][0].name,
          // countryCapital : data[1][0].capitalCity,
          // countryRegion : data[1][0].region,
          // countryLat : data[1][0].latitude,
          // countryLong : data[1][0].longitude,
          // countryIncomeLevel : data[1][0].incomeLevel
          })
        )
      );
)
}
