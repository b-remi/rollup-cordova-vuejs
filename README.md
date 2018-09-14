# rollup-cordova-vuejs
Rollup Cordova with splashscreen plugin 
  + VueJS with VueRouter and VueRessource 
  + VueMaterial with a base application Template including a swipe left menu.
  

# HOWTO
install node modules
+ npm install

install browser support for developpement
+ cordova platform add browser

install android and/or ios if you  want
+ cordova platform add android
+ cordova platform add ios

add specific requirements needed by cordova for the platform
you can check install is fine
+ cordova requirements

start simulate server for browser test (don't kill this server during developpement)
+ npm run server

start developpement with auto build
+ npm run dev

change vue file in /src directory and enjoy
all change will automaticly bundle, you just need to refresh your browser to show the change

deploy application on phone (android or ios)
+ npm run android
+ npm run ios

# generated rollup file :
 + /www/css/bundle.css               // bundle css for /src/scss/app.scss
 + /www/css/bundle_component.css     // include style present in .vue file
 + /www/js/bundle.js                 // bundle of VueJs Application
