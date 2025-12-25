// // ____Slider Settings for Main Page Hero Section____
// if (typeof $ !== 'undefined' && $(".my-car").length > 0) {         //____Check if Slider Exists
// $(document).ready(function(){           //____for loading the slider after the page is fully loaded
//     $(".my-car").slick({                //____Slick Slider Plugin
//         autoplay: true,                 //____Automatically Sliding Images 
//         autoplaySpeed: 3000,            //____3000 milli-seconds (3 sec for each img)
//         speed: 500,                     //____Fade transition (0.5 sec)
//         dots: false,                    //____No dots like pagination
//         arrows: false,                  //____Hides Previous and Next Arrows
//         infinite: true,                 //____Repetition of Loop
//         fade: true,                     //____Slides fade transition to avoid sliding
//         cssEase: 'linear',              //____Makes Fade Smoother for Premium Looks
//         pauseOnHover: false             //____On Hovering, Slider Not Stops
//     })
// });
// }

// /* ____Theme Switcher Logic____ */
// $(document).ready(function() {
//     const toggleSwitch = $('#theme-toggle');
//     const body = $('body');

//     // 1. Check Local Storage (Remember user preference)
//     if (localStorage.getItem('theme') === 'light') {
//         body.addClass('light-mode');
//         toggleSwitch.prop('checked', true); // Set the toggle to 'checked' (Sun mode)
//     }

//     // 2. Handle Click Event
//     toggleSwitch.on('change', function() {
//         if ($(this).is(':checked')) {
//             body.addClass('light-mode');
//             localStorage.setItem('theme', 'light');
//         } else {
//             body.removeClass('light-mode');
//             localStorage.setItem('theme', 'dark');
//         }
//     });
// });

// // ____HamBurger Responsive Navbar____
// function toggleMenu() {                                             //____Creating Function
//     const menu = document.getElementById("navMenu");                //____Find Element with navMenu ID
//     const icon = document.querySelector(".hamburger i");            //____Find i in hamburger class (font awesome icon)
//     menu.classList.toggle("open");                                  //____Add this class if not and remove if added
//                                                                     //____Menu shows when class open added and vice versa
    

//     if(menu.classList.contains("open")){                            //____Check if menu is open?
//         icon.classList.remove("fa-bars");                           //____Removes hamburger icon
//         icon.classList.add("fa-xmark");                             //____and adds close (cross) icon
//     } else {                                                        //____Check if menu is closed?
//         icon.classList.remove("fa-xmark");                          //____Removes the cross
//         icon.classList.add("fa-bars");                              //____and Adds hamburger icon again
//     }
// }


// // ____Login/SignUp Toggle____
// var loginForm = document.getElementById("loginForm");       //____Find HTML Element of ID loginForm and stores it in loginForm
// var signupForm = document.getElementById("signupForm");     //____Find HTML Element of ID signupForm and stores it in SignupForm
// var loginBtn = document.getElementById("loginBtn");         //____Find Button of ID loginBtn and stores it in loginBtn
// var signupBtn = document.getElementById("signupBtn");       //____Find Button of ID signupBtn and stores it in signupBtn

// function showLogin() {                                      //____Creating Function (For Login Tab)
//     loginForm.style.display = "block";                      //____Make Login Form Visible
//     signupForm.style.display = "none";                      //____Hides Signup Form
//     loginBtn.classList.add("active");                       //____Add Active class to Login Button
//     signupBtn.classList.remove("active");                   //____Remove Active class from Signup Button
// }

// function showSignup() {                                     //____Creating Function (For Signup Tab)
//     loginForm.style.display = "none";                       //____Hides Login Form
//     signupForm.style.display = "block";                     //____Make Signup Form Visible
//     loginBtn.classList.remove("active");                    //____Remove Active class from Login Button
//     signupBtn.classList.add("active");                      //____Add Active class to Signup Button
// }


// //____Simulate Fake Login without DataBase
// document.getElementById("loginForm").addEventListener("submit", function(event){    //___runs function when user clicks Loign Button
//     event.preventDefault();                                       //____Prevents default reloading of Page
//     var phone = document.getElementById("loginPhone").value;      //____Get value typed in phone input
//     var pass = document.getElementById("loginPass").value;        //____Get value typed in password input

//     if(phone && pass) {                                           //____Check if Phone and Password are not empty
//         alert("Login Successful!");                               //____Shows Pop Up Message
//         window.location.href = "index.html";                      //____Takes user to Main Page
//     } else {                                                      //____Check if Phone and Password are Empty
//         alert("Please fill in all fields.");                      //____Show This Pop Up Message
//     }
// });


// //____Simulate Signup Fake Account Creation without DataBase
// document.getElementById("signupForm").addEventListener("submit", function(event){   //___runs function when user clicks SignUp Button
//     event.preventDefault();                                       //____Prevents default reloading of Page
//     var fname = document.getElementById("fname").value;           //____Get value typed in full name input
//     var cnic = document.getElementById("cnic").value;             //____Get value typed in CNIC input
    
//     if(fname && cnic) {                                           //____Check if full name and CNIC are not empty
//         alert("Account created for " + fname);                    //____Shows this Pop Up
//         showLogin();                                              //____Login Page Appears
//     } else {                                                      //____Check if full name and CNIC are empty
//         alert("Please fill in all fields.");                      //____Shows this Pop Up
//     }
// });


/* =========================================

   1. SLIDER SETTINGS (Requires jQuery & Slick)

   ========================================= */

if (typeof $ !== 'undefined' && $(".my-car").length > 0) { 

    $(document).ready(function(){

        $(".my-car").slick({

            autoplay: true,

            autoplaySpeed: 3000,

            speed: 500,

            dots: false,

            arrows: false,

            infinite: true,

            fade: true,

            cssEase: 'linear',

            pauseOnHover: false

        });

    });

}



/* =========================================

   2. THEME SWITCHER LOGIC (Requires jQuery)

   ========================================= */

$(document).ready(function() {

    // Only run if the toggle exists on the page

    if ($('#theme-toggle').length) {

        const toggleSwitch = $('#theme-toggle');

        const body = $('body');



        // A. Check Local Storage on Load

        if (localStorage.getItem('theme') === 'light') {

            body.addClass('light-mode');

            toggleSwitch.prop('checked', true); 

        }



        // B. Handle Click Event

        toggleSwitch.on('change', function() {

            if ($(this).is(':checked')) {

                body.addClass('light-mode');

                localStorage.setItem('theme', 'light');

            } else {

                body.removeClass('light-mode');

                localStorage.setItem('theme', 'dark');

            }

        });

    }

});



/* =========================================

   3. HAMBURGER MENU (Vanilla JS)

   ========================================= */

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    const icon = document.querySelector(".hamburger i");

    

    // Toggle the class

    menu.classList.toggle("open");



    // Toggle the icon

    if(menu.classList.contains("open")){

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

}



/* =========================================

   4. LOGIN/SIGNUP LOGIC (Vanilla JS)

   ========================================= */

// We wrap this in a check to ensure we are on the Login Page

// This prevents errors on Home/Cars pages where these IDs don't exist.

var loginForm = document.getElementById("loginForm");

var signupForm = document.getElementById("signupForm");

var loginBtn = document.getElementById("loginBtn");

var signupBtn = document.getElementById("signupBtn");



// Only run the following code if the Login Form actually exists on this page

if (loginForm && signupForm && loginBtn && signupBtn) {



    function showLogin() {

        loginForm.style.display = "block";

        signupForm.style.display = "none";

        loginBtn.classList.add("active");

        signupBtn.classList.remove("active");

    }



    function showSignup() {

        loginForm.style.display = "none";

        signupForm.style.display = "block";

        loginBtn.classList.remove("active");

        signupBtn.classList.add("active");

    }



    // Fake Login

    document.getElementById("loginForm").addEventListener("submit", function(event){

        event.preventDefault();

        var phone = document.getElementById("loginPhone").value;

        var pass = document.getElementById("loginPass").value;



        if(phone && pass) {

            alert("Login Successful!");

            window.location.href = "index.html";

        } else {

            alert("Please fill in all fields.");

        }

    });



    // Fake Signup

    document.getElementById("signupForm").addEventListener("submit", function(event){

        event.preventDefault();

        var fname = document.getElementById("fname").value;

        var cnic = document.getElementById("cnic").value;

        

        if(fname && cnic) {

            alert("Account created for " + fname);

            showLogin();

        } else {

            alert("Please fill in all fields.");

        }

    });

}