// ____Slider Settings for Main Page Hero Section____
if (typeof $ !== 'undefined' && $(".my-car").length > 0) {         //____Check if Slider Exists
$(document).ready(function(){           //____for loading the slider after the page is fully loaded
    $(".my-car").slick({                //____Slick Slider Plugin
        autoplay: true,                 //____Automatically Sliding Images 
        autoplaySpeed: 3000,            //____3000 milli-seconds (3 sec for each img)
        speed: 500,                     //____Fade transition (0.5 sec)
        dots: false,                    //____No dots like pagination
        arrows: false,                  //____Hides Previous and Next Arrows
        infinite: true,                 //____Repetition of Loop
        fade: true,                     //____Slides fade transition to avoid sliding
        cssEase: 'linear',              //____Makes Fade Smoother for Premium Looks
        pauseOnHover: false             //____On Hovering, Slider Not Stops
    })
});
}

// ____Pink/Girls Customized Theme Toggle____
function togglePinkMode() {                                         //____Creating Function
    document.body.classList.toggle("pink-mode");                    //____Add this class if not and remove if added
}


// ____HamBurger Responsive Navbar____
function toggleMenu() {                                             //____Creating Function
    const menu = document.getElementById("navMenu");                //____Find Element with navMenu ID
    const icon = document.querySelector(".hamburger i");            //____Find i in hamburger class (font awesome icon)
    menu.classList.toggle("open");                                  //____Add this class if not and remove if added
                                                                    //____Menu shows when class open added and vice versa
    

    if(menu.classList.contains("open")){                            //____Check if menu is open?
        icon.classList.remove("fa-bars");                           //____Removes hamburger icon
        icon.classList.add("fa-xmark");                             //____and adds close (cross) icon
    } else {                                                        //____Check if menu is closed?
        icon.classList.remove("fa-xmark");                          //____Removes the cross
        icon.classList.add("fa-bars");                              //____and Adds hamburger icon again
    }
}


// ____Login/SignUp Toggle____
var loginForm = document.getElementById("loginForm");       //____Find HTML Element of ID loginForm and stores it in loginForm
var signupForm = document.getElementById("signupForm");     //____Find HTML Element of ID signupForm and stores it in SignupForm
var loginBtn = document.getElementById("loginBtn");         //____Find Button of ID loginBtn and stores it in loginBtn
var signupBtn = document.getElementById("signupBtn");       //____Find Button of ID signupBtn and stores it in signupBtn

function showLogin() {                                      //____Creating Function (For Login Tab)
    loginForm.style.display = "block";                      //____Make Login Form Visible
    signupForm.style.display = "none";                      //____Hides Signup Form
    loginBtn.classList.add("active");                       //____Add Active class to Login Button
    signupBtn.classList.remove("active");                   //____Remove Active class from Signup Button
}

function showSignup() {                                     //____Creating Function (For Signup Tab)
    loginForm.style.display = "none";                       //____Hides Login Form
    signupForm.style.display = "block";                     //____Make Signup Form Visible
    loginBtn.classList.remove("active");                    //____Remove Active class from Login Button
    signupBtn.classList.add("active");                      //____Add Active class to Signup Button
}


//____Simulate Fake Login without DataBase
document.getElementById("loginForm").addEventListener("submit", function(event){    //___runs function when user clicks Loign Button
    event.preventDefault();                                       //____Prevents default reloading of Page
    var phone = document.getElementById("loginPhone").value;      //____Get value typed in phone input
    var pass = document.getElementById("loginPass").value;        //____Get value typed in password input

    if(phone && pass) {                                           //____Check if Phone and Password are not empty
        alert("Login Successful!");                               //____Shows Pop Up Message
        window.location.href = "index.html";                      //____Takes user to Main Page
    } else {                                                      //____Check if Phone and Password are Empty
        alert("Please fill in all fields.");                      //____Show This Pop Up Message
    }
});


//____Simulate Signup Fake Account Creation without DataBase
document.getElementById("signupForm").addEventListener("submit", function(event){   //___runs function when user clicks SignUp Button
    event.preventDefault();                                       //____Prevents default reloading of Page
    var fname = document.getElementById("fname").value;           //____Get value typed in full name input
    var cnic = document.getElementById("cnic").value;             //____Get value typed in CNIC input
    
    if(fname && cnic) {                                           //____Check if full name and CNIC are not empty
        alert("Account created for " + fname);                    //____Shows this Pop Up
        showLogin();                                              //____Login Page Appears
    } else {                                                      //____Check if full name and CNIC are empty
        alert("Please fill in all fields.");                      //____Shows this Pop Up
    }
});