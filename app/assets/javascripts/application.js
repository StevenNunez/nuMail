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
//= require_tree .

var App = Ember.Application.create();

App.Router.map(function(){
  this.resource('messages', function(){
    this.resource('message', {path: '/:message_id'})
  });
});

App.MessagesRoute = Ember.Route.extend({
  model: function(){
    return [
    {
      id: 1,
      subject: "I like cake",
      body: "What are you thoughts on cake?"
    },
    {
      id: 2,
      subject: "Please call me",
      body: "Signed, Your mom"
    }
    ]
  }
});

App.MessageRoute = Ember.Route.extend({
  model: function(params){
    return this.modelFor('messages').findBy('id', parseInt(params.message_id))
  }
})

App.MessagesController = Ember.ArrayController.extend({
  messageCount: Ember.computed.alias('model.length'),
})
