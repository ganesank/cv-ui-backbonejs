var Backbone = require("backbone");

var sectionModel = Backbone.Model.extend({
  defaults: [
    {
      ref: {},
      ts: 0,
      data: {},
    },
  ],
  initialize: function () {},
});

module.exports = sectionModel;
