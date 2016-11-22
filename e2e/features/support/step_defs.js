module.exports = function() {

    this.Given(/^I have visited the page$/, function () {
        browser.url('http://localhost:3000/');
        browser.pause(1000);
    });

    this.When(/^I click the add button$/, function () {
        browser.click('button');
        browser.pause(1000);
    });

    this.Then(/^I see the new item in the list$/, function () {
        browser.pause(3000);
    });

    this.Given(/^I enter task '(.*)'$/, function (t) {
        browser.setValue('input[type="text"]', t);
        browser.pause(1000);
    });

    this.Then(/^I see both tasks in the list$/, function () {
        return 'pending';
    });

};