$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Giftcards.feature");
formatter.feature({
  "name": "Gift cards from Home depot",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Buy Gift cards form Home depot",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches the chrome browser and enters the URL www.homedepot.com",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_launches_the_chrome_browser_and_enters_the_url_www_homedepot_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Gift Cards link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_Gift_Cards_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Shop Now button of the Purchase a Gift Card section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_Shop_Now_button_of_the_Purchase_a_Gift_Card_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Birthday from the Category dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_selects_Birthday_from_the_Category_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Someone else radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_selects_Someone_else_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a Recipient name, Sender name and Sender message",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_enters_a_Recipient_name_Sender_name_and_Sender_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects amount of $50 denomination",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_selects_amount_of_$_denomination(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Buy Now button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_clicks_on_Buy_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is directed to a page with title \"The Home Depot Gift Cards by CashStar\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_directed_to_a_page_with_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/Logintohomedepot.feature");
formatter.feature({
  "name": "Login to HomeDepot",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful Login to Homedepot",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "name": "User launches the chrome browser and enters the URL www.homedepot.com",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on the My Account link and selects SignIn",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cemail\u003e\" and user enters \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on the SignIn button",
  "keyword": "And "
});
formatter.step({
  "name": "Verification page opens with heading \"Verification Code Entry\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "testfntestln001@gmail.com",
        "homedepotseleniumproject"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful Login to Homedepot",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches the chrome browser and enters the URL www.homedepot.com",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_launches_the_chrome_browser_and_enters_the_url_www_homedepot_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the My Account link and selects SignIn",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_my_account_link_and_selects_sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"testfntestln001@gmail.com\" and user enters \"homedepotseleniumproject\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_enters_and_user_enters(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verification page opens with heading \"Verification Code Entry\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.verification_page_opens_with_heading(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"single-signin__body\"]/div/div[1]/div/div/p\"}\n  (Session info: chrome\u003d89.0.4389.114)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027ROHINI-LNV\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\rohin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53213}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 84633f929029df6e9bda79c5f59d67ca\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"single-signin__body\"]/div/div[1]/div/div/p}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat stepDefinition.StepDef.verification_page_opens_with_heading(StepDef.java:108)\r\n\tat ✽.Verification page opens with heading \"Verification Code Entry\"(file:Features/Logintohomedepot.feature:9)\r\n",
  "status": "failed"
});
formatter.uri("file:Features/Searchanitem.feature");
formatter.feature({
  "name": "Search an item in HomeDepot",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successfully Search an item in Homedepot",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches the chrome browser and enters the URL www.homedepot.com",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_launches_the_chrome_browser_and_enters_the_url_www_homedepot_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Wooden crates\" in the search box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enters_in_the_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the orange lens search icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_orange_lens_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects checkbox Less than 15 inch from the Product width filter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_selects_checkbox_Less_than_inch_from_the_Product_width_filter(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects checkbox 5-10 from the Product height filter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_selects_checkbox_from_the_Product_height_filter(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select checkbox Unfinished Wood from the Color Family filter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_select_checkbox_Unfinished_Wood_from_the_Color_Family_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Three filter buttons are shown in the final search page of wooden crates",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.three_filter_buttons_are_shown_in_the_final_search_page_of_wooden_crates()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/StoreFinder.feature");
formatter.feature({
  "name": "Find a store",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Find a Homedepot store near you",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches the chrome browser and enters the URL www.homedepot.com",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_launches_the_chrome_browser_and_enters_the_url_www_homedepot_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Store Finder link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_Store_Finder_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters 60194 in the zip code search box and clicks on the search icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_enters_in_the_zip_code_search_box_and_clicks_on_the_search_icon(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Show only stores with",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_clicks_on_Show_only_stores_with()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Search within 5 miles from the Location within dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_selects_Search_within_miles_from_the_Location_within_dropdown(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select Home Depot Truck Rental check box",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_select_Home_Depot_Truck_Rental_check_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Apply Filters button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_click_on_Apply_Filters_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees Schaumburg store and ElkGrove store",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_sees_Schaumburg_store_and_ElkGrove_store()"
});
formatter.result({
  "status": "passed"
});
});