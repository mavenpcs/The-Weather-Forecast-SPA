//DIRECTIVES
weatherApp.directive("searchResult", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/searchresult.htm',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToStandard: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   } 
});