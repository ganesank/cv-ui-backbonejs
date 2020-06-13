var Marionette = require("backbone.marionette");
var SectionCollection = require("./collections/sections");
var Main_Container = require("./views/MainContainer");
var variables = require("./services/variables");
var $ = require("jquery");
var tempArray = [];

variables.sectionCollection = new SectionCollection();

variables.sectionCollection.fetch({
  success: () => {
    App.start({ initialData: variables.sectionCollection });
  },
  error: () => {
    alert("Server down!!");
  },
  error: () => {
    alert("Server down!!");
  },
});


var App = new Marionette.Application({
  onStart: (options) => {
    var mainContainer = new Main_Container({
      collection: options.initialData,
    });
    mainContainer.render();
  },
});
