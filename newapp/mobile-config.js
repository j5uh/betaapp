App.info({
  name: 'our new app',
  description: 'Our very first app!',
  author: 'Team JS',
  email: 'info@js.com',
  website: 'http://teamjs.com',
  version: '0.0.1'
});

App.icons({
  // iOS
  'iphone': 'resources/icons/Icon-60.png',
  'iphone_2x': 'resources/icons/Icon@2x.png',
  'ipad': 'resources/icons/Icon-72.png',
  'ipad_2x': 'resources/icons/Icon-72@2x.png'

  // Android
  //'android_ldpi': 'resources/icons/Icon-36x36.png',
  //'android_mdpi': 'resources/icons/Icon-48x48.png',
  //'android_hdpi': 'resources/icons/Icon-72x72.png',
  //'android_xhdpi': 'resources/icons/Icon-96x96.png'
});

App.launchScreens({
  // iOS
  'iphone': 'resources/splash/Default.png',
  'iphone_2x': 'resources/splash/Default@2x.png',
  'iphone5': 'resources/splash/Default-568h@2x.png'
  //'ipad_portrait': 'resources/splash/Default-Portrait.png',
  //'ipad_portrait_2x': 'resources/splash/splash-768x1024@2x.png',
  //'ipad_landscape': 'resources/splash/splash-1024x768.png',
  //'ipad_landscape_2x': 'resources/splash/splash-1024x768@2x.png',

  // Android
  //'android_ldpi_portrait': 'resources/splash/splash-200x320.png',
  //'android_ldpi_landscape': 'resources/splash/splash-320x200.png',
  //'android_mdpi_portrait': 'resources/splash/splash-320x480.png',
  //'android_mdpi_landscape': 'resources/splash/splash-480x320.png',
  //'android_hdpi_portrait': 'resources/splash/splash-480x800.png',
  //'android_hdpi_landscape': 'resources/splash/splash-800x480.png',
  //'android_xhdpi_portrait': 'resources/splash/splash-720x1280.png',
  //'android_xhdpi_landscape': 'resources/splash/splash-1280x720.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');

