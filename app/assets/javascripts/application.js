// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require handlebars
//= require bootstrap-sprockets
//= require ember
//= require ember-data
//= require_self
//= require_tree .

var NuMail = Ember.Application.create();

NuMail.Router.map(function(){
  this.resource('messages', function(){
    this.resource('message', {path: '/:message_id'})
  });
});

NuMail.MessagesRoute = Ember.Route.extend({
  model: function(){
    return this.store.findAll('message')
  }
});

NuMail.MessageRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('message', params.message_id);
  }
})

NuMail.MessagesController = Ember.ArrayController.extend({
  messageCount: Ember.computed.alias('model.length'),
})
