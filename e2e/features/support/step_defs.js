module.exports = function() {

    this.Given(/^I have visited the page$/, function () {
        browser.url('http://localhost:3000/');
        // browser.pause(100);
    });

    this.When(/^I click the add button$/, function () {
        browser.click('button');
        // browser.pause(100);
    });

    this.Then(/^I see the new item in the list$/, function () {
        // browser.pause(100);
    });

    this.Given(/^I enter task '(.*)'$/, function (t) {
        browser.setValue('input[type="text"]', t);
        // browser.pause(100);
    });

    this.Then(/^I see both '(.*)' and '(.*)' tasks in the list$/, function (val1, val2) {

        expect(browser.getText('li>span')).toEqual([val1,val2]);
      
    });

};
