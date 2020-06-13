var Backbone = require("backbone");
var sectionModel = require("../models/section");

var SectionCollection = Backbone.Collection.extend({
  url: "https://ganesan-cv-cp.netlify.app/.netlify/functions/cv-read-all",
  model: sectionModel,
  initialize: function () {},
});

module.exports = SectionCollection;
