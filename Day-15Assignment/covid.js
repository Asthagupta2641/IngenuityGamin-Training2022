const API_URL = "https://api.covid19api.com/summary";

function getApiData(url) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = () => {
      //   console.log(request);

      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject("Not able to fetch Data");
      }
    };
  });
}

getApiData(API_URL)
  .then((val) => {

    displayData(JSON.parse(val));
  })
  .catch((err) => console.log("Error" + err));

function displayData(serverData) {

  var s = document.getElementById("select");

  for (var i = 0; i < serverData.Countries.length; i++) {
    var o = document.createElement("option");
    o.text = serverData.Countries[i].Country;
    o.value = i;
    s.appendChild(o);
  }
  var x = document.querySelector("form").appendChild(s);

  s.onclick = function () {
    if (s.options[s.selectedIndex].value==="Country Name") {
      document.getElementById("p2").innerHTML = "";
      document.getElementById("p3").innerHTML = "";
      document.getElementById("p4").innerHTML = "";
      document.getElementById("p5").innerHTML = "";
      document.getElementById("p6").innerHTML = "";
    } else {
      var checkvalue = s.options[s.selectedIndex].value;
      document.getElementById("p2").innerHTML =serverData.Countries[checkvalue].Date;
      document.getElementById("p3").innerHTML =serverData.Countries[checkvalue].NewDeaths;
      document.getElementById("p4").innerHTML =serverData.Countries[checkvalue].TotalConfirmed;
      document.getElementById("p5").innerHTML =serverData.Countries[checkvalue].TotalDeaths;
      document.getElementById("p6").innerHTML =serverData.Countries[checkvalue].NewConfirmed;
    }
  };

 
}