This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

This version includes `react-native-image-picker` and `react-native-share`.



## The problem
(Case tested with both Facebook and Instagram apps installed and updated to the very latest version)

### iOS
When I try to share to Facebook a live photo taken from camera or a local one, I am redirected to Safari on the following URL: https://m.facebook.com/sharer/sharer.php, with the following error message: `href should represent a valid URL`.

I am passing the `uri` from my iOS object:

![Screenshot](https://github.com/IronTony/RNShareExample/blob/master/Screen%20Shot%202018-09-08%20at%2010.10.37.png)

And this is the warning message I get back:

![Screenshot](https://github.com/IronTony/RNShareExample/blob/master/Screen%20Shot%202018-09-08%20at%2010.10.24.png)

Instagram works fine.


### Android
When I try to share to Facebook a live photo taken from camera or a local one, the Facebook app opens but without the image inside.

When I try to share to Instagram a live photo taken from camera or a local one, the Instagram app seems to open but I have a blank screen and a toast message with `An unknown error occurred`.

I am passing the `uri` from my Android object:

![Screenshot](https://github.com/IronTony/RNShareExample/blob/master/Screen%20Shot%202018-09-08%20at%2010.04.24.png)
