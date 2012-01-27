var app = $.sammy('#main', function() {

  this.use('Mustache');

  var GENIASSES = ['Rich Hickey'];
  
  this.get('#/', function() {
    this.title = "Geniass";
    this.partial('templates/main.mustache');
  });
  
  this.get('#/geniuses', function() {
  
    var context = this,
        template = 'templates/main.mustache';
    
    $.get('templates/diagram.mustache', function(response){
      context.partials = { diagram : response };
      context.title = "Geniass";
      context.venn_bubbles = [{ element_id : "genius", label : "Rich Hickey" }];
      context.partial(template);
    });
    
  });
  
  this.get('#/assholes', function() {
    var context = this,
        template = 'templates/main.mustache';
    
    $.get('templates/diagram.mustache', function(response){
      context.partials = { diagram : response };
      context.title = "Geniass";
      context.venn_bubbles = [{ element_id : "asshole", label : "Rich Hickey" }];
      context.partial(template);
    });
  });
  
  this.get('#/geniasses', function() {
    var context = this,
        template = 'templates/main.mustache';
    
    $.get('templates/diagram.mustache', function(response){
      context.partials = { diagram : response };
      context.title = "Geniass";
      context.venn_bubbles = [{ element_id : "genius", label : "Rich Hickey" }, { element_id : "asshole", label : "Rich Hickey" }];
      context.partial(template);
    });
  });
  
  this.get('#/mustache', function() {
    
    var context = this,
        template = 'templates/main.mustache';
    
    $.get('templates/nav_items.mustache', function(response){
      context.partials = { nav_items : response };
      context.title = "Geniass";
      context.nav_items = [
        { route : "geniuses", label : "Genius" }, 
        { label : '+'},
        { route : "assholes", label : "Asshole" },
        { label : '='},
        { route : "geniasses", label : "Geniass" }
      ];
      context.partial(template);
    });
    
  });

});

$(function() {
  app.run();
});
