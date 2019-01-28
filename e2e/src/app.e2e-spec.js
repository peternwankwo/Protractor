// Load page object
var formPage = require('./pageObject/app.po');

//instantiate page object
var page = new formPage();


//Load test data
var testdata = require('./formTestData.json');




describe('workspace-project App', () => {
  
	  beforeEach(function() {
		  browser.driver.manage().deleteAllCookies();
		  browser.driver.manage().window().maximize();
		  
		  //Ensure that the browser does not wait for angular
		  browser.ignoreSynchronization = true;
		  
	  });

	  it('should display welcome message', () => {
		browser.get('http://localhost:4200/');
		expect(page.appText.getText()).toEqual('RockNL, hét platform om rockbands te vinden!');
	  });
  
  
	  describe('Driving tests by data form entry', function(){
		var Objkeys = Object.keys(testdata['formTestData']);
		
		for (var i = 0 ; i < Objkeys.length ; i ++ ) {
			(function (s) {
				
				it(s.TestCase, function (){
					browser.get('http://localhost:4200/');
					page.lnkRosesGuns.click();
					page.btnBoek.click();
					
					page.inpName.sendKeys(s.Name);
					page.inpMail.sendKeys(s.email);
					page.btnBetalen.click();
					
					expect(browser.getCurrentUrl()).toContain(s.ExpectedUrl);
				});
				
			})(testdata.formTestData[i]);
		}
		
	  });
  
  
  
  
  
  
  
});


