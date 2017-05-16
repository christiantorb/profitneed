  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1941513152802043',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();   
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/nb_NO/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});


{ //response
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}

//Login button
<div class="fb-login-button" data-max-rows="1" data-size="small" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true"></div>

//While logging in(spinner) and remove btn after login
<script>
var finished_rendering = function() {
console.log("finished rendering plugins");
var spinner = document.getElementById("spinner");
spinner.removeAttribute("style");
spinner.removeChild(spinner.childNodes[0]);
}
FB.Event.subscribe('xfbml.render', finished_rendering);
</script>
<div id="spinner"
    style="
        background: #4267b2;
        border-radius: 5px;
        color: white;
        height: 40px;
        text-align: center;
        width: 250px;">
    Loading
    <div
    class="fb-login-button"
    data-max-rows="1"
    data-size="large"
    data-button-type="continue_with"
    ></div>
</div>
}