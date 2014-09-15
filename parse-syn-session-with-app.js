if (!Parse) {
  window.alert("You need to use Parse Javascript SDK first!");
} else {
  window.parseSynchronizeSessionWithApp = function () {
    if(window.android == null) {
      window.alert("You need to wrap this web page with an android or iphone app set up with ParseAppWebViewSessionConnector.");
      return;
    }

    var android = window.android;

    var resultString = android.getParseInfoFromApp();

    var parseInfo = JSON.parse(resultString);

    var appId = parseInfo.applicationId;
    var appSecret = parseInfo.appSecret;

    Parse.initialize(appId, appSecret);

    if (!Parse.applicationId) {
      window.alert("You need to call Parse.initialize before using Parse.");
    }

    var userString = JSON.stringify({"_sessionToken":parseInfo._sessionToken, "objectId": parseInfo.objectId});

    localStorage.setItem('Parse/'+appId+'/currentUser', userString);
  };
}
