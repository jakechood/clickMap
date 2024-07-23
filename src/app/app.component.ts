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
    this.countryService.getCountryData($("locName").load("./world-map/world-map.component.html");

    $("path").click(function() {
      let clicked = EventTarget;
      // Load location name from world map component
      $("./demographic-info/demographic-info.component.html #locName").load("./world-map/world-map.component.html");

      // TODO: How do I fix this?
      if (clicked.class !== null) {
        var locName = document.querySelectorAll("path class");
      }

      // Initiate new XML Http Request
      let xhr = new XMLHttpRequest();
      // TODO: Finish building request here

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
      });
    }).subscribe(data => {
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
        $("#locName").text = "Afghanistan";        
        $("#countryCapital").text = countryCapital;
        $("#countryRegion").text = countryRegion;
        $("#countryWaterfalls").text = countryWaterfalls;
        $("#countryLakes").text = countryLakes;
        $(locName).prependTo("#locNameTitle").text;
      }).fail(function() {
      $("#working").hide();
      $("#error").html("Error displaying location information.");
      });
    });
        })
      }
    };
