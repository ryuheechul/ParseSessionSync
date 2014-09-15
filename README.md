ParseSessionSync
==============

## Want to share Parse's user session with Webview in Android app?
(iPhone will be supported in near future)

## Usage

#### Android

- add ParseSessionSyncJsInterface.java to android project src folder.

```java
import your.package.ParseSessionSyncJsInterface;
ParseSessionSyncJsInterface.applyInterface(webView, [ApplicationID], [Javascriptkey]);
```

#### Web page in webview

- add parse-sync-session-with-app.js to js src folder.

```js
<script type="text/javascript" src="[js src dir]/parse-sync-session-with-app.js"></script>
<script type="text/javascript">
  ...

  parseSyncSessionWithApp(); // instead of Parse.initialize([ApplicationID], [Javascriptkey]);

  var currentUser = Parse.User.current();

  // strongly recommended to fetch to get user data.
  currentUser.fetch({
    success: function(myObject) {
    },
    error: function(myObject, error) {
    }
  });

  ...
</script>
```

## Author

Ryu Heechul, ryuhcii@gmail.com

## License

ParseSessionSync is available under the MIT license. See the LICENSE file for more info.

## Contribution

Welcome your contribution!
