var Marionette = require("backbone.marionette");
var section_container = require("../views/sectionContainer");
var SectionCollection = require("../collections/sections");
var SectionModel = require("../models/section");
var $ = require("jquery");
var variables = require("../services/variables");
var tempArray = [];
var sectionCollection = new SectionCollection();
var sectionModel = new SectionModel();

console.log(tempArray);
var Main_container = Marionette.CompositeView.extend({
  el: "#cvContainer",
  template: require("../templates/container.html"),
  childView: section_container,
  childViewContainer: "div#sections",
  templateContext() {
    const menu = this.model;
  },
  ui: {
    addSection: "#new-section",
  },
  events: {
    "click @ui.addSection": "addSection",
  },

  removeMenu: function () {
    $(".menu").css({
      display: "none",
    });
  },

  addCancel: function () {
    $("#newSectionText").hide();
    $("#new-section").show();
  },
  initialize: function () {
    this.menu = [];
    this.title = "Ganesan Karuppaiya";
    sectionCollection.fetch({
      success: function () {
        console.log(sectionCollection);
        for (var i = 0; i < sectionCollection.length; i++) {
          var p = sectionCollection.at(i).get("data");
          tempArray.push(p.tag.toUpperCase());
        }
        console.log(tempArray);
        this.menu = tempArray;
        console.log(this);

        // this.collection = new Backbone.Collection(item_object);
      },
    });
  },
});

module.exports = Main_container;
