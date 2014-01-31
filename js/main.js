(function($, undefined){

  function ViewModel() {
    var self = this;
    var message = "testing npm, grunt, and bower functions";
    self.getMessage = function () {
      return message;
    };
  }

  var vm = new ViewModel();

  console.log(vm.getMessage());

})(jQuery);
