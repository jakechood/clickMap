import { Component, inject } from '@angular/core';
import { WorldMapComponent } from '../world-map/world-map.component';
import { CountryLookupService } from '../../app/country-lookup.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-demographic-info',
  standalone: true,
  imports: [WorldMapComponent, AppComponent, CountryLookupService],
  providers : [CountryLookupService],
  templateUrl: './demographic-info.component.html',
  styleUrl: './demographic-info.component.css'
})
export interface DemographicInfoComponent {
  constructor(private displayService:CountryLookupService) {}
  // Separate data into logical variables
  locName : app-World-map.locName,
  countryCapital : data[1][0].capitalCity,
  countryRegion : data[1][0].region,
  countryLat : data[1][0].latitude,
  countryLong : data[1][0].longitude,
  countryIncomeLevel : data[1][0].incomeLevel

}
