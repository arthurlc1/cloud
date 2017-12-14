angular
  .module('MyApp')
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
      .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
  })
  .controller('BasicDemoCtrl', function DemoCtrl($mdDialog) {
    var originatorEv;

    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };

    this.notificationsEnabled = true;
    this.toggleNotifications = function() {
      this.notificationsEnabled = !this.notificationsEnabled;
    };

    this.logout = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .targetEvent(originatorEv)
          .clickOutsideToClose(false)
          .parent('body')
          .title('are you sure m8')
          .content('are you sure you want to leave forever? just saying')
          .ok('obviously not')
      );

      originatorEv = null;
    };

    this.checkVoicemail = function() {
      // This never happens.
    };
  });