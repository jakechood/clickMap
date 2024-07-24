import { Component } from '@angular/core';
import { CountryLookupService } from '../country-lookup.service';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})

export class WorldMapComponent {
  constructor(private countryService: CountryLookupService) {}
  countryDetails : any;
  onClick(event:any) {
    return console.log(event.target.id);
    this.countryService.getCountryData(event.target.id).subscribe(data => {
      console.log(data);
      //Use country details object 'instantiating' & matching data
    })
  }
}
