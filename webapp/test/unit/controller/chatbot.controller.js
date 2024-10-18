/*global QUnit*/

sap.ui.define([
	"comapp/chatbot/controller/chatbot.controller"
], function (Controller) {
	"use strict";

	QUnit.module("chatbot Controller");

	QUnit.test("I should test the chatbot controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
