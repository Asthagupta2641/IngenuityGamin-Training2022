var ages=[2,33,45,67];
var result = ages.filter(filterAge);
 function filterAge(age){
    return age>10;
 }
 console.log(result);


 //example2
let cities =[
  { name:"New York",population: 345556},
  { name:"New York",population: 245556},
  { name:"New York",population: 345556},
  { name:"New York",population: 345556},

];

// var bigCities = []
// for(var i=0;i<cities.length;i++){
//    if(cities[i].population>300000){
//       bigCities.push(cities[i]);
//    }
// }
// console.log(bigCities);

bigCities=cities.filter((city)=>city.population>300000).sort(function(n1,n2){return n2.name-n1.name});

console.log(bigCities);
   