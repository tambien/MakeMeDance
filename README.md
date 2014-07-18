MakeMeDance
===========

Collaborative DJing with Spotify

In order to authenticate users with the Spotify API, you'll need to [register an application with Spotify](https://developer.spotify.com/my-applications), and set the following [environment variables](http://genepath.med.harvard.edu/mw/Bash:HOW_TO:_Set_an_environment_variable_in_the_bash_shell) in app.js:

```
var client_secret = process.env.spotSecret;
var client_id = process.env.spotID;
```

CSS compiles with SASS:
```sass --watch style/:style/main.css```
