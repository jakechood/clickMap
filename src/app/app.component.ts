import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorldMapComponent } from "./world-map/world-map.component";
import { DemographicInfoComponent } from "./demographic-info/demographic-info.component";
import { CountryLookupService } from './country-lookup.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorldMapComponent, DemographicInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clickable World Map';
  constructor(private countryService: CountryLookupService) {}
  getCountryDetails(event: any) {
    this.countryService.getCountryData(/*event info*/).subscribe(data => {
      //country details info
    })
  }
}
