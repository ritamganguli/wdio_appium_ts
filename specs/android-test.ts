describe("Proverbial APK", () => {

  it("Changes color", async () => {
    var color = await $("id=color");
    await driver.execute("lambda-hook: {\"action\": \"setTestStatus\",\"arguments\": {\"status\":\"passed\", \"remark\":\"This is a sample remark for failed test \"}}");
    await color.waitForDisplayed({ timeout: 30000 });
    await color.click();
    await color.click();
  });

  

  it("Changes text", async () => {
    var text = await $("id=Text");
    await text.waitForDisplayed({ timeout: 30000 });
    await text.click();
  });

  it("Toast", async () => {
    var toast = await $("id=toast");
    await toast.waitForDisplayed({ timeout: 30000 });
    await toast.click();
  });

  it("Notification", async () => {
    var nf = await $("id=notification");
    await nf.waitForDisplayed({ timeout: 30000 });
    await nf.click();
  });

  it("Geolocation", async () => {
    var geo = await $("id=geoLocation");
    await geo.waitForDisplayed({ timeout: 30000 });
    await geo.click();

    driver.back();
  });

  it("SpeedTest", async () => {
    var st = await $("id=speedTest");
    await st.waitForDisplayed({ timeout: 30000 });
    await st.click();

    await browser.pause(10000);
    
    driver.back();
  });

  // More test cases...

});
