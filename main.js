$(document).ready(() => {
   let aboutMe = document.getElementById('aboutMe');
   let aboutMePos = aboutMe.offsetTop;
   let buttonTop = document.getElementById('goTop');
   let $currentPos;

   setTimeout(() => {                               // HIDE TO THE BOTTOM
    $('#loading').css("top","100%");
    $('#loading').css("opacity","0");
   }, 1500);

   setTimeout(() => {                                   // HIDE LOADING SCREEN
    $('#loading').css("display","none");
   }, 3000);

   window.onscroll = function() {goTop()};

   function goTop() {
       if ( window.pageYOffset >= aboutMePos ) {
           console.log("btn wlaczony");
           buttonTop.style.display = "block";
       } else {
           buttonTop.style.display = "none";
           console.log("btn wylacz");
       }
   }

   window.onscroll = function() {menuCheck();};

   function menuCheck() { //Check menu pos and highlight the proper button
    $currentPos = $(window).scrollTop();
    console.log($currentPos);

    if ($currentPos < 235) { //HIGHLIGHT HOME

        $("#homeLink").css({"background-color": "rgb(192, 192, 192)", "color": "black"});
        $(".fa-home").css({"background-color": "rgb(192, 192, 192)", "color": "black"});

        $("#aboutMeLink").css({"background-color": "rgb(34, 34, 34)", "color": "white"});
        $(".fa-user").css({"background-color": "rgb(34, 34, 34)", "color": "white"});

        $("#projectsLink").css({"background-color": "rgb(34, 34, 34)", "color": "white"});
        $(".fa-laptop-code").css({"background-color": "rgb(34, 34, 34)", "color": "white"});

        $("#contactLink").css({"background-color": "rgb(34, 34, 34)", "color": "white"});
        $(".fa-envelope").css({"background-color": "rgb(34, 34, 34)", "color": "white"});

    } else if ($currentPos >=235 && $currentPos < 1338) {  //HIGHLIGHT ABOUT ME

        $("#homeLink").css({"background-color": "rgb(34, 34, 34)", "color": "white"});
        $(".fa-home").css({"background-color": "rgb(34, 34, 34)", "color": "white"});

        $("#aboutMeLink").css({"background-color": "rgb(192, 192, 192)", "color": "black"});
        $(".fa-user").css({"background-color": "rgb(192, 192, 192)", "color": "black"});

        $("#projectsLink").css({"background-color": "rgb(34, 34, 34)", "color": "white"});
        $(".fa-laptop-code").css({"background-color": "rgb(34, 34, 34)", "color": "white"});

        $("#contactLink").css({"background-color": "rgb(34, 34, 34)", "color": "white"});
        $(".fa-envelope").css({"background-color": "rgb(34, 34, 34)", "color": "white"});

    } else if ($currentPos >= 1338 && $currentPos <2202) { // HIGHLIGHT PROJECTS

        $("#homeLink").css({"background-color": "rgb(34, 34, 34)", "color": "white"});
        $(".fa-home").css({"background-color": "rgb(34, 34, 34)", "color": "white"});

        $("#projectsLink").css({"background-color": "rgb(192, 192, 192)", "color": "black"});
        $(".fa-laptop-code").css({"background-color": "rgb(192, 192, 192)", "color": "black"});

        $("#aboutMeLink").css({"background-color": "rgb(34, 34, 34)", "color": "white"});
        $(".fa-user").css({"background-color": "rgb(34, 34, 34)", "color": "white"});

        $("#contactLink").css({"background-color": "rgb(34, 34, 34)", "color": "white"});
        $(".fa-envelope").css({"background-color": "rgb(34, 34, 34)", "color": "white"});

    } else {

        $("#homeLink").css({"background-color": "rgb(34, 34, 34)", "color": "white"});
        $(".fa-home").css({"background-color": "rgb(34, 34, 34)", "color": "white"});

        $("#contactLink").css({"background-color": "rgb(192, 192, 192)", "color": "black"});
        $(".fa-envelope").css({"background-color": "rgb(192, 192, 192)", "color": "black"});

        $("#aboutMeLink").css({"background-color": "rgb(34, 34, 34)", "color": "white"});
        $(".fa-user").css({"background-color": "rgb(34, 34, 34)", "color": "white"});

        $("#projectsLink").css({"background-color": "rgb(34, 34, 34)", "color": "white"});
        $(".fa-laptop-code").css({"background-color": "rgb(34, 34, 34)", "color": "white"});

    }

   }

   

});