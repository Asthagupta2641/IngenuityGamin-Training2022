"use strict";
var directions;
(function (directions) {
    directions[directions["north"] = 1] = "north";
    directions[directions["east"] = 22] = "east";
    directions[directions["west"] = 23] = "west";
    directions[directions["south"] = 24] = "south";
})(directions || (directions = {}));
console.log(directions.east);
