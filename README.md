This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

This version includes `react-native-image-picker` and `react-native-share`.



## The problem
(Case tested with both Facebook and Instagram apps installed and updated to the very latest version)

### iOS
When I try to share to Facebook a live photo taken from camera or a local one, I am redirect to Safari on the following URL: https://m.facebook.com/sharer/sharer.php, with the following error message: `href should represent a valid URL`.
Instagram works fine.

### Android
When I try to share to Facebook a live photo taken from camera or a local one, the Facebook app opens but without the image inside.

When I try to share to Instagram a live photo taken from camera or a local one, the Instagram app seems to open but I have a blank screen and a toast message with `An unknown error occurred`.
