//CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
    $scope.city = cityService.city;
    
    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = 
        $resource("http://api.openweathermap.org/data/2.5/forecast", {
        callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days, APPID: 'b83aa2863642d92de689b86e7e6422c1' });
    
    $scope.convertToCelsius = function(degK) {
        
        return Math.round((degK - 273.15));
        
    }
    
    $scope.convertToDate = function(dt) {
        
        return new Date(dt * 1000);
        
    }
    
    
}]);