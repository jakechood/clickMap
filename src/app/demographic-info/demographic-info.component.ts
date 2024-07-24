import { Component, inject } from '@angular/core';
import { WorldMapComponent } from '../world-map/world-map.component';
import { CountryLookupService } from '../../app/country-lookup.service';
@Component({
  selector: 'app-demographic-info',
  standalone: true,
  imports: [WorldMapComponent],
  providers : [CountryLookupService],
  templateUrl: './demographic-info.component.html',
  styleUrl: './demographic-info.component.css'
})
export class DemographicInfoComponent {
  constructor(private displayService:CountryLookupService) {}
  ngOnInit() {
    $("#locName") = countryData.locName;
    
  }

}
