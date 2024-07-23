import { R3NgModuleMetadataKind } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryLookupService {

  constructor(private http: HttpClient) { }
  getCountryData(countryCode: string): Observable<any> {

    var locName = this.path.name.value;
    $("path").click(function() {
      let clicked = EventTarget;
      // Load location name from world map component
       // TODO: How do I fix this?
      $("path:target").load("./world-map/world-map.component.html");

     

      // Initiate new XML Http Request
      let xhr = new XMLHttpRequest();
      xhr.addEventListener("load", CountryLookupService);
      xhr.open("GET", "api.geonames.org/citiesJSON?");

      // let requestData = path.id or path.name or path.class
      $.get("api.geonames.org/search?", locName, function(data) {
      $.ajax({
        url: "api.geonames.org/search?",
        data: {
            country : locName,
            units : "imperial",
            featureCode : "PPLC",
            featureCode : "RGN",
            featureCode : "FLLS",
            featureCode :  "LK",
            username : "jakechood"
        },  
        type: "GET",
        dataType: "json",
        success : function() {

          $.ajax({
            url: "api.worldbank.org/v2",
            data: {
                country : locName,
            },  
            type: "GET",
            dataType: "json",
        });
        let countryIncomeLevel = data.incomeLevel;
        $("incomeLevel").text = countryIncomeLevel
        }
      });
      xhr.send();
    }).subscribe(data => {
          }).done(function(data) {
            
          $("#working").hide();
          $("#results").show();

        // Separate featureCode data (bugfix attempt)
        let countryCapital = data.featureCode(PPLC);
        let countryRegion = data.featureCode[1];
        let countryWaterfalls = data.featureCode[2];
        let countryLakes = data.featureCode[3];
      // Display the location data retrieved from the API 
        $("#locName").text = locName;        
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
  }
}
