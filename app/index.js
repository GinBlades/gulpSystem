"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss");
var $ = require("jquery");
var _ = require("lodash");
var component = function () {
    var element = $("<div>");
    element.html(_.join(["Hello", "webpack"], " "));
    return element;
};
console.log("loaded");
$("body").append(component());
