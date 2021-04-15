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
  "error_message": "java.lang.NullPointerException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:44)\r\n\tat com.homedepot.PageObjects.GiftCardsPO.categoryselect(GiftCardsPO.java:78)\r\n\tat stepDefinition.StepDef.user_selects_Birthday_from_the_Category_dropdown(StepDef.java:263)\r\n\tat ✽.User selects Birthday from the Category dropdown(file:Features/Giftcards.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User selects Someone else radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_selects_Someone_else_radio_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters a Recipient name, Sender name and Sender message",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_enters_a_Recipient_name_Sender_name_and_Sender_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects amount of $50 denomination",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_selects_amount_of_$_denomination(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Buy Now button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_clicks_on_Buy_Now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is directed to a page with title \"The Home Depot Gift Cards by CashStar\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_directed_to_a_page_with_title(String)"
});
formatter.result({
  "status": "skipped"
});
});