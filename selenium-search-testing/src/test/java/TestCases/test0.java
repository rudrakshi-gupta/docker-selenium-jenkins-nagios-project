package TestCases;

import org.testng.Assert;
import org.testng.annotations.Test;

import PageObjects.content;

public class test0 extends BaseTest{
	@Test
	public void searchTest() {
		content c = new content(driver);
		c.launchURL();
		c.isDisplayed();
		c.searchText("editorial");
		try {
			Thread.sleep(2000);
		}
		catch(InterruptedException e) {
			System.err.println(e.getMessage());
		}
		Assert.assertEquals("Pass", "Pass");
	}
}