function skillMember() {
    return {
      restrict: "E",
      templateUrl: "modules/skills/view/member.html",
      controller: "MemberController",
      controllerAs: "memberCtrl",
      scope: {
        member: "=",
      },
    }
  }
  