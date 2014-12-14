// for more details see: http://emberjs.com/guides/models/defining-models/

NuMail.Message = DS.Model.extend({
  subject: DS.attr('string'),
  body: DS.attr('string')
});
