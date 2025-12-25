// // ____Slider Settings for Main Page Hero Section____

// ____Check if jQuery exists and slider element is present
if (typeof $ !== 'undefined' && $(".my-car").length > 0) {         
    $(document).ready(function(){                                  //____Run after page fully loads
        $(".my-car").slick({                                       //____Slick Slider Plugin
            autoplay: true,                                        //____Automatically play slider
            autoplaySpeed: 3000,                                   //____3 seconds per slide
            speed: 500,                                            //____Fade transition speed
            dots: false,                                           //____Disable dots navigation
            arrows: false,                                         //____Hide next/prev arrows
            infinite: true,                                        //____Loop slides infinitely
            fade: true,                                            //____Use fade instead of slide
            cssEase: 'linear',                                     //____Smooth premium fade
            pauseOnHover: false                                    //____Do not pause on hover
        });
    });
}

// /* ____Theme Switcher Logic____ */
$(document).ready(function() {                                     

    if ($('#theme-toggle').length) {                               //____Run only if toggle exists on this page
        const toggleSwitch = $('#theme-toggle');                   //____Theme toggle checkbox
        const body = $('body');                                    //____Body selector

        if (localStorage.getItem('theme') === 'light') {           //____Check Local Storage for saved theme
            body.addClass('light-mode');                           //____Enable light mode
            toggleSwitch.prop('checked', true);                    //____Toggle ON
        }

        toggleSwitch.on('change', function() {                     //____Handle toggle change event
            if ($(this).is(':checked')) {                          //____If toggle is ON
                body.addClass('light-mode');                       //____Apply light theme
                localStorage.setItem('theme', 'light');            //____Save preference
            } else {                                               //____If toggle is OFF
                body.removeClass('light-mode');                    //____Apply dark theme
                localStorage.setItem('theme', 'dark');             //____Save preference
            }
        });
    }
});

// // ____HamBurger Responsive Navbar____
function toggleMenu() {                                            //____Create toggle function

    const menu = document.getElementById("navMenu");               //____Navigation menu
    const icon = document.querySelector(".hamburger i");           //____Hamburger icon

    menu.classList.toggle("open");                                 //____Toggle menu visibility

    if(menu.classList.contains("open")){                           //____Change icon based on menu state
        icon.classList.remove("fa-bars");                          //____Remove bars icon
        icon.classList.add("fa-xmark");                            //____Add close icon
    } else {
        icon.classList.remove("fa-xmark");                         //____Remove close icon
        icon.classList.add("fa-bars");                             //____Add bars icon
    }

}

// // ____Login / Signup Toggle Logic____
//____Get elements from DOM
var loginForm  = document.getElementById("loginForm");             //____Login form
var signupForm = document.getElementById("signupForm");            //____Signup form
var loginBtn   = document.getElementById("loginBtn");              //____Login button
var signupBtn  = document.getElementById("signupBtn");             //____Signup button

//____Run only if forms exist (prevents errors on other pages)
if (loginForm && signupForm && loginBtn && signupBtn) {

    function showLogin() {                                         //____Show Login Form
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        loginBtn.classList.add("active");
        signupBtn.classList.remove("active");
    }

    function showSignup() {                                        //____Show Signup Form
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        loginBtn.classList.remove("active");
        signupBtn.classList.add("active");
    }

    //____Simulated Fake Login (No Database)
    document.getElementById("loginForm").addEventListener("submit", function(event){

        event.preventDefault();                                    //____Prevent page reload

        var phone = document.getElementById("loginPhone").value;   //____Get phone value
        var pass  = document.getElementById("loginPass").value;    //____Get password value

        if(phone && pass) {                                        //____If both fields filled
            alert("Login Successful!");
            window.location.href = "index.html";                   //____Redirect to home
        } else {
            alert("Please fill in all fields.");
        }

    });

    //____Simulated Fake Signup (No Database)
    document.getElementById("signupForm").addEventListener("submit", function(event){

        event.preventDefault();                                    //____Prevent page reload

        var fname = document.getElementById("fname").value;        //____Get full name
        var cnic  = document.getElementById("cnic").value;         //____Get CNIC

        if(fname && cnic) {                                        //____If fields filled
            alert("Account created for " + fname);
            showLogin();                                           //____Return to login
        } else {
            alert("Please fill in all fields.");
        }

    });

}
