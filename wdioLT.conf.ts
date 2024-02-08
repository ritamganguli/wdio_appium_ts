exports.config = {
    user:"ritamg",
    key: "bhul_gaya",
  
    updateJob: false,
    specs: ["./specs/**/android-test.ts"],
    exclude: [],
  
    capabilities: [
      {
        build: "NodeJS WebDriverIO iOS",
        name: "Sample Test - WebDriverIO",
        isRealMobile: true,
        deviceName: "Pixel.*,Nexus.*,Galaxy.*",
        platformVersion: "12",
        platformName: "android",
        app:"lt://APP10160631101688537717000234", //Set your APP URL
      },
    ],
  
    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: "mobile-hub.lambdatest.com",
    port: 80,  
    framework: "mocha",

    
    
    mochaOpts: {
      ui: "bdd",
      timeout: 20000,
    },
  };
