import { Component } from '@angular/core';
import { WorldMapComponent } from '../world-map/world-map.component';
import { CountryData } from '../world-map/world-map.component'
import { CountryLookupService } from '../country-lookup.service';
@Component({
  selector: 'app-demographic-info',
  standalone: true,
  imports: [WorldMapComponent, CountryData],
  templateUrl: './demographic-info.component.html',
  styleUrl: './demographic-info.component.css'
})
export class DemographicInfoComponent {
  public addData() {
    $("locName").text = WorldMapComponent.countryData.locName;
        countryData.countryCapital = data[1][0].capitalCity,
        countryData.countryRegion = data[1][0].region,
        countryData.countryLat = data[1][0].latitude,
        countryData.countryLong = data[1][0].longitude,
        countryData.countryIncomeLevel = data[1][0].incomeLevel
}
