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
      $(clicked).load("./world-map/world-map.component.html");

     

      // Initiate new XML Http Request
      let xhr = new XMLHttpRequest();
      $.addEventListener("load", CountryLookupService);
      $.open("GET", "api.geonames.org/citiesJSON?");

      // let requestData = path.id or path.name or path.class
      $.get("api.geonames.org/citiesJSON?", locName, function(data) {
      $.ajax({
        url: "api.geonames.org/citiesJSON?",
        data: {
            geoNameId : locName,
            units: "imperial",
            
            username: "jakechood"
        },  
        type: "GET",
        dataType: "json",
        success : function() {
            // What needs to happen after this ajax call succeeds?
        }
      });
      xhr.send();
    }).subscribe(data => {
          }).done(function(data) {
              $.ajax({
                url: "api.geonames.org/citiesJSON?",
                type: "GET",
                data: {
                    geoNameId : locName,
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
  }
}
