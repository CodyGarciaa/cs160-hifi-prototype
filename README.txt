# Phobia Free Films 🎬
Phobia Free Films is a movie streaming app that helps film enjoyers avoid seeing their phobias. 

## How to build and run 🛠️
Our project was built with react. There are some packages you need to install before running: 
```
npm install react-router-dom
npm install video-js
```

Then run the program with this command:
```
npm start
```
The app should automatically be opened in a browser window, but if not, put `localhost:3000` in the address bar. In this tab, open inspect element and toggle mobile app view, since this app is meant to be used on a phone. The app works most well with iPhone 12 Pro dimensions. 
> The Matrix is the only movie that works with the scene skipping feature, but `theMatrix30mins.mp4` is needed in the `public` folder for it to work

> Warning: all the other movies are able to be watched with inspect element turned off, however I would avoid doing this since the streaming API we are using opens pop ups when used. Just stay in inspect element and everything should be fine. 
