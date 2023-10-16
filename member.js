function skillMember() {
    return {
      restrict: "E",
      templateUrl: "modules/skills/view/member.html",
      controller: "SkillsMemberController",
      controllerAs: "vm",
      bindToController:true,
      scope: {
        member: "=",
      },
    }
  }
  