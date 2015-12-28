angular.module('properties').controller('PropertyController', ['$scope', '$routeParams', '$location', 'Authentication', 'Properties', function($scope, $routeParams, $location, Authentication, Properties) {
  $scope.authentication = Authentication;

  $scope.createUserProperty = function() {
    var property = new Properties({
      post_code: this.post_code,
      street_name: this.street_name
    });

    property.$save(function(response) {
      $location.path('properties/' + response._id);
    }, function(errorResponse) {
      $scope.error = errorResponse.data.message;
    });
  };
}]);
