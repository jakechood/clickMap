import { Component } from '@angular/core';
import { WorldMapComponent } from '../world-map/world-map.component';
import { CountryData } from '../world-map/world-map.component'
@Component({
  selector: 'app-demographic-info',
  standalone: true,
  imports: [],
  templateUrl: './demographic-info.component.html',
  styleUrl: './demographic-info.component.css'
})
export class DemographicInfoComponent {
  public addData() {
    $("locName").text = WorldMapComponent.countryData.locName;
}
