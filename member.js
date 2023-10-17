function skillMember() { 
  return {
    restrict: 'E',
    scope: 
      { member: '=' }, 
      templateUrl: 'templates/member.html',
      controller: function($scope) {
        $scope.member = $scope.member;
      },
      link: function(scope, element, attrs) {
        scope.member = scope.member;
      }
  }
}