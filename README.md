MakeMeDance
===========

Collaborative DJing with Spotify

In order to authenticate users with the Spotify API, you'll need to [register an application with Spotify](https://developer.spotify.com/my-applications), and set the following environment variables in app.js:

```
var client_secret = process.env.spotSecret;
var client_id = process.env.spotID;
```

Set them from the command line like this:
```spotSecret=YOURSECRET spotID=YOURID node app.js```

CSS compiles with SASS:

```sass --watch client/style/main.scss:client/style/main.css```
