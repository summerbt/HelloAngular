angular.module('myApp', [])
    //create a Filter
    .filter("reverseText", function () {
        //    Defining the filter funtion
        return function (input) {
            var result = "";
            input = input || "";
            for (var i = 0; i < input.length; i++) {
                result = input.charAt(i) + result;
            }
            return result;
        };
    })
    .filter("titleCase", function () {
        //defining the filter function
        return function (input) {
            input = (input === undefined || input === null) ? '' : input;
            return input.toString().toLowerCase().replace(/\b([a-z])/, function (change) {
                return change.toUpperCase();
            });

        }
    })
