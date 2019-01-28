// Load page object
var formPage = require('./pageObject/app.po');

//Load test data
var testdata = require('./formTestData.json');


import { AppPage } from './app.po';



describe('workspace-project App', () => {
  let page: AppPage;

  //beforeEach(() => {
   // page = new AppPage();
  //});
  
  beforeEach(function() {
	  browser.driver.manage().deleteAllCookies();
	  page = new AppPage();
	  
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('RockNL, hét platform om rockbands te vinden!');
  });
});
