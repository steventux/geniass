var domCallbacks = {
  fadeIn : function(){ domCallbacks.applyEffect('fadeIn') },
  fadeOut : function(){ domCallbacks.applyEffect('fadeOut') },
  applyEffect : function(effect) { 
    $("#genius, #asshole").each(function(idx) {
      $(this)[effect]();
    }); 
  }
}

var app = $.sammy('#main', function() {

  this.use('Mustache');

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
      context.partial(template, context, domCallbacks.fadeIn);
    });
    
  });
  
  this.get('#/assholes', function() {
    var context = this,
        template = 'templates/main.mustache';
    
    $.get('templates/diagram.mustache', function(response){
      context.partials = { diagram : response };
      context.title = "Geniass";
      context.venn_bubbles = [{ element_id : "asshole", label : "Rich Hickey" }];
      context.partial(template, context, domCallbacks.fadeIn);
    });
  });
  
  this.get('#/geniasses', function() {
    var context = this,
        template = 'templates/main.mustache';
    
    $.get('templates/diagram.mustache', function(response){
      context.partials = { diagram : response };
      context.title = "Geniass";
      context.venn_bubbles = [{ element_id : "genius", label : "Rich Hickey", css_class : "join" }, { element_id : "asshole" }];
      context.partial(template, context, domCallbacks.fadeIn);
    });
  });
  
});

$(function() {
  app.run();
});
