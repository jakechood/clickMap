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
  
}
