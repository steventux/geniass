var app = $.sammy(function() {

  var GENIASSES = ['Rich Hickey'];
  
  this.get('#/', function() {
    $('#genius').fadeOut();
    $('#asshole').fadeOut();
  });
  
  this.get('#/geniuses', function() {
    $('#asshole').fadeOut();
    $('#genius').fadeIn();
    $('#genius div').html(GENIASSES.join(" "));
    $('#genius div').css({'left':'0px'});
  });
  
  this.get('#/assholes', function() {
    $('#genius').fadeOut();
    $('#asshole').fadeIn();
    $('#asshole div').html(GENIASSES.join(" "));
    $('#asshole div').show();
    $('#asshole div').css({'left':'0px'});
  });
  
  this.get('#/geniasses', function() {
    $('#genius').fadeIn();
    $('#asshole').fadeIn();
    $('#genius div').html(GENIASSES.join(" "));
    $('#asshole div').hide();
    $('#genius div').css({'left':'150px'});
  });

});

$(function() {
  app.run();
});
