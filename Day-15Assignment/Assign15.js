
        const API_URL = "https://api.covid19api.com/summary";

        function getApiData(url) {
            console.log("We are good to go to call API using XHR");
            return new Promise((resolve, reject) => {

                //create an instance of XHR
                var request = new XMLHttpRequest();

                request.open("GET", url);
                request.send();

                request.onload = () => {
                    // console.log(request.response);
                    // console.log(request);

                    if (request.status === 200) {
                        resolve(request.response)
                    }
                    else {
                        reject("Not able to fetch data");
                    }
                }
            });
        }

        getApiData(API_URL)
            .then((val) => {
                console.log(JSON.parse(val));
                 displayData(JSON.parse(val));
            })
            .catch((err) => console.log("Error" + err));

        function displayData(serverData) {
            // console.log(serverData)
            console.log(serverData.Countries[1].Country);
           

            var i=0;
                let newtd = document.createElement('p');


                let newtd1 = document.createElement('country');
                let newtd2 = document.createElement('date');
                let newtd3 = document.createElement('totalCases');
                let newtd4 = document.createElement('totaldeaths');
                let newtd5 = document.createElement('newcases');
                let newtd6 = document.createElement('newdeaths');

                // newtd1.innerText=`$(user.id)`;
                document.getElementById('country').innerText = "" +serverData.Countries[i].Country ;
                document.getElementById('date').innerText=""+serverData.Countries[i].Date;
                document.getElementById('totalCases').innerText=""+serverData.Countries[i].TotalConfirmed;
                document.getElementById('totaldeaths').innerText=""+serverData.Countries[i].TotalDeaths;
                document.getElementById('newcases').innerText=""+serverData.Countries[i].NewConfirmed;
                document.getElementById('newdeaths').innerText=""+serverData.Countries[i].NewDeaths;
               


                newtd.appendChild(newtd1);
                newtd.appendChild(newtd2);
                newtd.appendChild(newtd3);
                newtd.appendChild(newtd4);
                newtd.appendChild(newtd5);
                newtd.appendChild(newtd6)

                document.getElementById('para').appendChild(newtd);
        }