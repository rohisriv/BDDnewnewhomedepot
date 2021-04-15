package stepDefinition;



import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import com.homedepot.PageObjects.*;
import com.homedepot.Utilities.ReadConfigHomeDepot;


import cucumber.api.java.Before;
import cucumber.api.java.en.*;

public class StepDef extends BaseClassHomeDepot{
	
	@Before
	public void setup() 
	{
		ReadConfigHomeDepot readconfig = new ReadConfigHomeDepot();
		
		String URL = readconfig.getApplicationURL();
		String brow = readconfig.getBrowser();
		
		System.out.println(URL);
		System.out.println(brow);
		
		if(brow.equals("chrome"))
		{
			System.setProperty("webdriver.chrome.driver",readconfig.getChromePath());
			ChromeOptions op = new ChromeOptions();
			op.setHeadless(true);
			op.addArguments("window-size=1920,1080");
			driver = new ChromeDriver(op);
			//driver = new ChromeDriver();
		}
		else if(brow.equals("IE")) 
		{
			System.setProperty("webdriver.ie.driver",readconfig.getIEPath());
			driver = new InternetExplorerDriver();			
		}
		
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);	
		driver.get(URL);
		
	}
	
	
	
	
	// LOGIN test case
	
	@Given("User launches the chrome browser and enters the URL www.homedepot.com")
	public void user_launches_the_chrome_browser_and_enters_the_url_www_homedepot_com() throws IOException {
	    lpo = new LoginPO(driver);
	    
	    driver.manage().window().maximize();
	    //captureScreen(driver,"HomeDepot_HomePage");
	    
	}

	@When("User clicks on the My Account link and selects SignIn")
	public void user_clicks_on_the_my_account_link_and_selects_sign_in() throws InterruptedException {
		
		lpo.myaccountclick();
		Thread.sleep(2000);
		lpo.signinclick();
		Thread.sleep(2000);
		
	}

	@When("User enters {string} and user enters {string}")
	public void user_enters_and_user_enters(String email, String pass) throws InterruptedException {
	   
		WebElement elem1,elem2;
		elem1=lpo.enteremail();
		elem1.sendKeys(email);
		Thread.sleep(2000);
		
		elem2=lpo.enterpassword();	
		elem2.sendKeys(pass);
		Thread.sleep(2000);
	}

	@When("User clicks on the SignIn button")
	public void user_clicks_on_the_sign_in_button() throws InterruptedException {
	   
		lpo.signinbutton();
		System.out.println("I have found the button....");
		Thread.sleep(4000);
	}

	@Then("Verification page opens with heading {string}")
	public void verification_page_opens_with_heading(String string) {
	    
		System.out.println("The Title of the current page is ... " + driver.getTitle());
		Assert.assertEquals(driver.getTitle(),"The Home Depot");
		
		/*WebElement q = driver.findElement(By.xpath("//*[@id=\"single-signin__body\"]/div/div[1]/div/div/p"));
		String qs = q.getText();
		System.out.println(qs);
	    Assert.assertEquals(qs, string);*/
		
		driver.quit();
	}

	//SEARCH AN ITEM test case
	
	@When("User enters {string} in the search box")
	public void user_enters_in_the_search_box(String item) {
	   
		hspo = new HomeScreenPO(driver);
		hspo.setsearch(item);
	}

	@When("User clicks on the orange lens search icon")
	public void user_clicks_on_the_orange_lens_search_icon() throws InterruptedException {
	   
		hspo.clicksrchbtn();
		Thread.sleep(4000);
	}

	@When("User selects checkbox Less than {int} inch from the Product width filter")
	public void user_selects_checkbox_Less_than_inch_from_the_Product_width_filter(Integer int1) throws InterruptedException {
		
		System.out.println(int1);
		hspo.clickwidthCB1();
		Thread.sleep(4000);
	    
	}

	@When("User selects checkbox {int}{int} from the Product height filter")
	public void user_selects_checkbox_from_the_Product_height_filter(Integer int1, Integer int2) throws InterruptedException {
		
		System.out.println(int1);
		System.out.println(int2);
		hspo.clickheightCB1();
		Thread.sleep(4000);
	   
	}

	@When("User select checkbox Unfinished Wood from the Color Family filter")
	public void user_select_checkbox_Unfinished_Wood_from_the_Color_Family_filter() throws InterruptedException {
		
		hspo.clickcolorCB1();
		Thread.sleep(4000);
	   
	}

	@Then("Three filter buttons are shown in the final search page of wooden crates")
	public void three_filter_buttons_are_shown_in_the_final_search_page_of_wooden_crates() {
		
		Assert.assertTrue((hspo.getProdcolor_btn().isDisplayed()) && (hspo.getProdheight_btn().isDisplayed()) && (hspo.getProdwidth_btn().isDisplayed()));
		driver.quit();
	   
	}
	
	//STORE FINDER test case
	
	@When("User clicks on the Store Finder link")
	public void user_clicks_on_the_Store_Finder_link() throws InterruptedException {
		
		sfpo = new StoreFinderPO(driver);
		sfpo.clickstorefinder();
		Thread.sleep(2000);
	    
	}

	@When("User enters {int} in the zip code search box and clicks on the search icon")
	public void user_enters_in_the_zip_code_search_box_and_clicks_on_the_search_icon(Integer int1) throws InterruptedException {
		
		sfpo.storeSearchBoxsendkeys("60194");
		Thread.sleep(2000);
		sfpo.storeSearchBoxButtonclick();
		Thread.sleep(2000);
	    
	}

	@When("User clicks on Show only stores with")
	public void user_clicks_on_Show_only_stores_with() throws InterruptedException {
		
		sfpo.showonlystorewithclick();
		Thread.sleep(2000);
	   
	}

	@When("User selects Search within {int} miles from the Location within dropdown")
	public void user_selects_Search_within_miles_from_the_Location_within_dropdown(Integer int1) throws InterruptedException {
		
		sfpo.radiusselect();
		Thread.sleep(2000);
		sfpo.radius5milesclick();
		Thread.sleep(2000);
	    
	}

	@When("User select Home Depot Truck Rental check box")
	public void user_select_Home_Depot_Truck_Rental_check_box() throws InterruptedException {
	   
		sfpo.homedepottruckrentalCBclick();
		Thread.sleep(2000);
	}

	@When("User click on Apply Filters button")
	public void user_click_on_Apply_Filters_button() throws InterruptedException {
		
		sfpo.applyfiltersclick();
		Thread.sleep(2000);
		EventFiringWebDriver efw = new EventFiringWebDriver(driver);
		efw.executeScript("document.querySelector('body > section > div:nth-child(3) > div.col__4-12.col__4-12--sm.col__3-12--md.listFrame').scrollTop=500");
		
	    
	}

	@Then("User sees Schaumburg store and ElkGrove store")
	public void user_sees_Schaumburg_store_and_ElkGrove_store() {
		
		System.out.println("Finding stores...");
		String s1 = sfpo.get_store1();
		System.out.println(s1);
		String s2 = sfpo.get_store2();
		System.out.println(s2);
		
		Assert.assertTrue(s1.equalsIgnoreCase("1 - Schaumburg #1904") && s2.equalsIgnoreCase("2 - Elk Grove Village #6701"));
		
		driver.quit();
	   
	}
    
	//********************
    //GIFT CARDS test case
	//********************
	
	@When("User clicks on the Gift Cards link")
	public void user_clicks_on_the_Gift_Cards_link() throws InterruptedException {
		
		gcpo = new GiftCardsPO(driver);
		gcpo.giftcardclick();
		Thread.sleep(2000);
	    
	}

	@When("User clicks on the Shop Now button of the Purchase a Gift Card section")
	public void user_clicks_on_the_Shop_Now_button_of_the_Purchase_a_Gift_Card_section() throws InterruptedException {
		
		gcpo.shopnowclick();
		Thread.sleep(2000);
	   
	}

	@When("User selects Birthday from the Category dropdown")
	public void user_selects_Birthday_from_the_Category_dropdown() throws InterruptedException {
	    
		gcpo.categoryselect();
		Thread.sleep(2000);
	}

	@When("User selects Someone else radio button")
	public void user_selects_Someone_else_radio_button() throws InterruptedException {
		
		gcpo.whoisthisforradio();
		Thread.sleep(2000);
	    
	}

	@When("User enters a Recipient name, Sender name and Sender message")
	public void user_enters_a_Recipient_name_Sender_name_and_Sender_message() throws InterruptedException {
		
		WebElement elem;
		JavascriptExecutor js = (JavascriptExecutor)driver;
		
		elem = gcpo.reciepientname();
		js.executeScript("arguments[0].scrollIntoView(true);",elem);
		elem.click();
		elem.clear();
		String recename = "Rohini";
		Thread.sleep(2000);
		js.executeScript("arguments[0].value='" + recename + "';", elem);
		elem.sendKeys(" ");
        elem.sendKeys(Keys.BACK_SPACE);
		Thread.sleep(2000);
		
		elem=gcpo.sendername();
		elem.click();
		elem.clear();
		Thread.sleep(2000);
		String sendname = "Rohit";
		js.executeScript("arguments[0].value='" + sendname + "';", elem);
		elem.sendKeys(" ");
        elem.sendKeys(Keys.BACK_SPACE);
		Thread.sleep(2000);
		
		elem=gcpo.sendermess();
		elem.click();
		elem.clear();
		Thread.sleep(2000);
		String mess = "Happy Birthday";
		js.executeScript("arguments[0].value='" + mess + "';", elem);
		elem.sendKeys(" ");
        elem.sendKeys(Keys.BACK_SPACE);
		Thread.sleep(2000);
	    
	}

	@When("User selects amount of ${int} denomination")
	public void user_selects_amount_of_$_denomination(Integer int1) throws InterruptedException {
		
		System.out.println(int1);
		gcpo.dollar50button();
		Thread.sleep(2000);
	    
	}

	@When("User clicks on Buy Now button")
	public void user_clicks_on_Buy_Now_button() throws InterruptedException {
		
		gcpo.buynowbutton();
		Thread.sleep(2000);
	    
	}

	@Then("User is directed to a page with title {string}")
	public void user_is_directed_to_a_page_with_title(String string) {
		
		String pagetitle = driver.getTitle();
		System.out.println(pagetitle);
		
		Assert.assertEquals(driver.getTitle(),"The Home Depot Gift Cards by CashStar");
		
		driver.quit();
	    
	}

}
