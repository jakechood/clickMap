import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { WorldMapComponent } from "./world-map/world-map.component";
import { DemographicInfoComponent } from "./demographic-info/demographic-info.component";
import { CountryLookupService } from './country-lookup.service';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorldMapComponent, DemographicInfoComponent, HttpClientModule, RouterLinkActive, RouterLink, NgIf],
  providers : [CountryLookupService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Clickable World Map';
  countryDetails : any;
  constructor(private countryService : CountryLookupService) {}
  clickCountry(event:any) {
  this.countryService.getCountryData(event.target.id).subscribe(data => {
    this.countryDetails = {
          
    // Separate data into logical variables
    "locName" : data[1][0].name,
    "countryCapital" : data[1][0].capitalCity,
    "countryRegion" : data[1][0].region,
    "countryLat" : data[1][0].latitude,
    "countryLong" : data[1][0].longitude,
    "countryIncomeLevel" : data[1][0].incomeLevel
    }
    }
  
  )
}
}
