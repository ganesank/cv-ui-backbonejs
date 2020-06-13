var Marionette = require("backbone.marionette");
var SectionCollection = require("../collections/sections");
var variables = require("../services/variables");
var $ = require("jquery");
var _ = require("underscore");
var menuOpen = false;
var tempArray = [];

variables.sectionCollection = new SectionCollection();

console.log(tempArray);

var section_container = Marionette.CompositeView.extend({
  tagName: "div",
  attributes: function () {
    return {
      id: this.model.get("ts"),
      class: "section-container",
    };
  },

  template: require("../templates/section.html"),

  toggleMenu: function (id) {
    $(".menu").css({
      display: "none",
    });
    menuOpen = !menuOpen;
    this.$(".menu").css({
      display: function () {
        if (menuOpen) {
          return "block";
        } else {
          return "none";
        }
      },
    });
  },

  initialize: function () {
    this.inputValue = "";
    this.editValue = "";
    this.myTarget = "";
  },

  childViewOptions: function (model, index) {
    return {
      parent: this.model,
    };
  },
});

module.exports = section_container;
