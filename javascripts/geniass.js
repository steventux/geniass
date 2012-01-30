var app = $.sammy('#main', function() {

  this.use('Mustache');
  
  // Override swap to fadeIn and fadeOut
  this.swap = function(content, callback) {
     var context = this;
     context.$element().fadeOut('medium', function() {
       context.$element().html(content);
       context.$element().fadeIn('medium', function() {
         if (callback) {
           callback.apply();
         }
       });
     });
   };

  this.get('#/', function() {
    this.partial('templates/main.mustache');
  });
  
  this.get('#/geniuses', function() {
    var context = this,
        template = 'templates/main.mustache';
    
    $.get('templates/diagram.mustache', function(response){
      context.partials = { diagram : response };
      context.venn_bubbles = [{ element_id : "genius", label : "Rich Hickey" }];
      context.partial(template);
    });
    
  });
  
  this.get('#/assholes', function() {
    var context = this,
        template = 'templates/main.mustache';
    
    $.get('templates/diagram.mustache', function(response){
      context.partials = { diagram : response };
      context.venn_bubbles = [{ element_id : "asshole", label : "Rich Hickey" }];
      context.partial(template);
    });
  });
  
  this.get('#/geniasses', function() {
    var context = this,
        template = 'templates/main.mustache';
    
    $.get('templates/diagram.mustache', function(response){
      context.partials = { diagram : response };
      context.venn_bubbles = [
        { element_id : "genius", label : "Rich Hickey", css_class : "join" }, 
        { element_id : "asshole" }
      ];
      context.partial(template);
    });
  });
  
});

$(function() {
  app.run();
});
