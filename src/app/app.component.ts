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


//Access SVG object and its content document
window.addEventListener("load", function() {
  // Declare map object as variable
  var svg = document.getElementById("worldMap");
  // Declare map content as object
  var svgObject = document.getElementById("worldMap").contentDocument;
  

})
$("path").click(function() {
  let xhr = new XMLHttpRequest();
  // let requestData = path.id or path.name or path.class
  $.get("api.geonames.org/citiesJSON?", requestData, function(data) {
  $.ajax({
     url: "api.geonames.org/citiesJSON?",
     type: "GET",
     data: {
        geoNameId : "afghanistan",
        units: "imperial",
        dataType: 'json',
        username: "jakechood"
     },  
     success : function() {
        
     }
  }).done(function(data) {
     }).done(function(data) {
        $.ajax({
           url: "api.geonames.org/citiesJSON?",
           type: "GET",
           data: {
              geoNameId : "afghanistan",
              units: "imperial",
              dataType: 'json',
              username: "jakechood"
           },
     });
     $("#working").hide();
     $("#results").show();
     // Separate featureCode data (bugfix attempt)
     let countryCapital = data.featureCode(PPLC);
     let countryRegion = data.featureCode[1];
     let countryWaterfalls = data.featureCode[2];
     let countryLakes = data.featureCode[3];
  // Display the location data retrieved from the API 
     $("#locName").innerHTML = "Afghanistan";        
     $("#countryCapital").innerHTML = countryCapital;
     $("#countryRegion").innerHTML = countryRegion;
     $("#countryWaterfalls").innerHTML = countryWaterfalls;
     $("#countryLakes").innerHTML = countryLakes;
     $(locName).prependTo("#locNameTitle");
  }).fail(function() {
  $("#working").hide();
  $("#error").html("Error displaying location information.");
  });
});