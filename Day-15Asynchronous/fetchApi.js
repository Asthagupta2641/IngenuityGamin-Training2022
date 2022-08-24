// 1.XHR
// 2.fetch()
// 3 method is not used here
// 3.Third party packages(Axios)


// 1.fetch
const API_URL="https://jsonplaceholder.typicode.com/users";

async function getApiData(url){
    // console.log("call api by using fetch method");
    //  fetch(url)
    //  .then((val)=>{
    //     return val.json();
    // .then((res)=>displayData(res))
    //  .catch((err)=>console.log("Error"+err));
    // // console.log(r);

     console.log("call api by using fetch method with async and await");
      var data= await fetch(url);
      var result=await data.json();
      console.log(result);
      displayData(result);


}
getApiData(API_URL)



function displayData(serverData){
    // console.log(serverData);
    for(var user of serverData)
    {
        let newTr =  document.createElement('tr');
        let newTd1 =  document.createElement('td');
        let newTd2=  document.createElement('td');
        let newTd3=  document.createElement('td');
        let newTd4=  document.createElement('td');

        // newTd1.innerText= `${user.id}`;
        newTd1.innerText=""+user.id;
        newTd2.innerText=""+user.name;
        newTd3.innerText=""+user.email;
        newTd4.innerText=""+user.phone;

        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        newTr.appendChild(newTd3);
        newTr.appendChild(newTd4);

        document.getElementById("myTable").appendChild(newTr)

            
    }
}