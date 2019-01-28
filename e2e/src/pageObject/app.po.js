'use strict';

module.exports = function() {

	//Home page elements
	this.lnkHome = element(by.css('[data-testid="lnkHome"]'));
	this.lnkBands = element(by.css('[data-testid="lnkBands"]'));
	
	this.lnkRosesGuns = element(by.css('[data-testid="lnkRosesGuns"]'));
	
	this.btnBoek = element(by.css('[data-testid="btnBoek"]'));
	
	this.appText = element(by.css('app-root h1'));
	
	//form elements
	this.inpName = element(by.css('[data-testid="inpName"]'));
	
	this.inpMail = element(by.css('[data-testid="inpMail"]'));
	
	this.btnBetalen = element(by.css('[data-testid="btnBetalen"]'));
	
	this.btnCancel = element(by.css('[data-testid="btnCancel"]'));
	
	

};