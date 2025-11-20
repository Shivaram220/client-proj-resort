// Navbar JS

Navbar();
function Navbar(){
    let open = document.getElementById('NOCOpen');
    let close = document.getElementById('NOCClose');

    let navbar = document.querySelector('.NavbarAndRequest');

    open.addEventListener('click',()=>{
        navbar.style.display="flex";
        open.style.display="none";
        open.style.animation="0.5s open linear";
        close.style.display="flex";
        close.style.animation="1.5s close linear";
    });

    close.addEventListener('click',()=>{
        navbar.style.display="none";
        open.style.display="flex";
        close.style.display="none";
    });

}



// Home Images Slide JS

let currenthomeSlide = 0;
function showHomeSlide(index) {
    const carouselHomeImages = document.querySelectorAll('.Home');
    const Homepositions = [0, -100, -200];
    for (let i = 0; i < carouselHomeImages.length; i++) {
        const newHomePosition = Homepositions[i - index];
        document.querySelector('.SlidesParent').children[0].style.transform = `translateX(${newHomePosition}%)`;
        document.querySelector('.SlidesParent').children[1].style.transform = `translateX(${newHomePosition}%)`;
        document.querySelector('.SlidesParent').children[2].style.transform = `translateX(${newHomePosition}%)`;
    }
} 

function nextHomeSlide() {
    currenthomeSlide = (currenthomeSlide + 1) % 3;
    showHomeSlide(currenthomeSlide);
}

function prevHomeSlide() {
    currenthomeSlide = (currenthomeSlide - 1 + 3) % 3;
    showHomeSlide(currenthomeSlide);
}

showHomeSlide(currenthomeSlide) 

setInterval(prevHomeSlide, 5000);





// Happy Clients Slide JS

let currentSlide = 0;
function showSlide(index) {
    const carouselImages = document.querySelectorAll('.ClientsContainerWrap');
    const positions = [0, -100, -200, -300, -400, -500];
    for (let i = 0; i < carouselImages.length; i++) {
        const newPosition = positions[i - index];
        document.querySelector('.ClientsContainerNew').children[0].style.transform = `translateX(${newPosition}%)`;
        document.querySelector('.ClientsContainerNew').children[1].style.transform = `translateX(${newPosition}%)`;
        document.querySelector('.ClientsContainerNew').children[2].style.transform = `translateX(${newPosition}%)`;
        document.querySelector('.ClientsContainerNew').children[3].style.transform = `translateX(${newPosition}%)`;
        document.querySelector('.ClientsContainerNew').children[4].style.transform = `translateX(${newPosition}%)`;
        document.querySelector('.ClientsContainerNew').children[5].style.transform = `translateX(${newPosition}%)`;
    }
} 

function nextSlide() {
    currentSlide = (currentSlide + 1) % 6;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + 6) % 6;
    showSlide(currentSlide);
}

setInterval(prevSlide, 7500);










// Question and Answer JS

var lastOpenedAnswerId = null;

function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);

    if (lastOpenedAnswerId && lastOpenedAnswerId !== answerId) {
        var lastOpenedAnswer = document.getElementById(lastOpenedAnswerId);
        lastOpenedAnswer.style.animation = "backidentifier 0.3s forwards";
        lastOpenedAnswer.style.display = "none";
        lastOpenedAnswerId = null;
    }

    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.animation = "identifier 2s forwards";
        answer.style.display = "flex";
        lastOpenedAnswerId = answerId;
    } else {
        answer.style.animation = "backidentifier 0.3s forwards";
        answer.style.display = "none";
        lastOpenedAnswerId = null;
    }
}






// Phone Feature JS

document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll('.LOIIPEach');
    let index = 0;

    setInterval(() => {
        if (images.length > 0) {
            images.forEach(img => {
                img.style.zIndex = 0;
            });

            images[index].style.zIndex = 1;
            images[index].style.left = '0px';

            let nextIndex = (index + 1) % images.length;
            images[nextIndex].style.left = '225px';

            index = nextIndex;
        }
    }, 2000);
});







// Clock feature JS

// var second = 0;
// let rs100=document.getElementById('Rs100');
// let rs500=document.getElementById('Rs500');
// let rs2000=document.getElementById('Rs2000');
// setTimeout(function() {
//     let interval = setInterval(function () {
//         second += 90;
//         if (second > 360) {
//             rs100.style.display = "none";
//             rs500.style.display = "flex";
//         }
//         if (second > 720) {
//             rs500.style.display = "none";
//             rs2000.style.display = "flex";
//         }
//         if (second >= 1080) {
//             clearInterval(interval);
//         }
//         document.getElementById("Note-wrapper").style.transform = "rotate(" + second + "deg)";
//         document.getElementById("Note-wrapper").style.scrollBehavior = "smooth";
//     }, 1000);
// }, 1000);

// function showClockFeature() {
//     var clockFeature = document.querySelector(".ClockFeature");
//     clockFeature.style.display = "flex";
// }
// setTimeout(showClockFeature, 1000);

// function closeClockContainer(){
//     document.querySelector(".ClockFeature").style.display="none";
// }











var strings = ['Coastal Getaway', 'Relaxing Holiday', 'Seaside Escape', 'Gentle Sea Breezes'];
var colors = ['#F4E4C1', '#F4E4C1', '#F4E4C1', '#F4E4C1'];

var formattedStrings = strings.map((string, index) => `<span style="color: ${colors[index]};">${string}</span>`);

var typed = new Typed('#HC1WTitiles', {
    strings: formattedStrings,
    typeSpeed: 100,
    loop: true,
});









// Form validation JS

document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#form");
    form.addEventListener("submit", function (e){
        e.preventDefault();
    });
});
function validate() {
    form.addEventListener("submit", function (e){
        e.preventDefault();
    });
    let name = document.querySelector("#name1");
    let cnt = 0;

    resetError("divname");
    resetError("divemail");
    resetError("divnumber");
    resetError("divmessage");

    if (!isNaN(name.value) || name.value.length <= 3) {
        setError("divname", "(Required)");
    } else {
        cnt++;
    }

    let email = document.querySelector("#email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        setError("divemail", "(Required)");
    } else {
        cnt++;
    }

    let phNumber = document.querySelector("#telphone").value;

    if (isNaN(phNumber) || phNumber.length !== 10) {
        setError("divnumber", "(Required)");
    } else {
        cnt++;
    }

    let message = document.querySelector("#textarea");

    if (message.value.trim() === "") {
        setError("divmessage", "(Required)");
    } else {
        cnt++;
    }

    if (cnt === 4) {
        let formData = new FormData(form);
        let url = "https://script.google.com/macros/s/AKfycbxQayYYRUgrFYxDf2BUX_Qm3bW13f0ECzi1UY_7exAEV0jX5v7qA0zeb2uyGtJbz3ezDg/exec";

        fetch(url, {
            method: "POST",
            body: new URLSearchParams(formData),
        })
            .then((res) => res.text())
            .then((finalRes) => {
                console.log(finalRes);
                showSuccessMessage();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
}

function setError(id, error) {
    let element = document.getElementById(id);
    let errorElement = element.querySelector(".CS2MC1FMCLabel span");

    if (errorElement) {
        errorElement.innerHTML = error;
    }
}

function resetError(id) {
    let element = document.getElementById(id);

    if (element) {
        let errorElement = element.querySelector(".CS2MC1FMCLabel span");

        if (errorElement) {
            errorElement.innerHTML = "";
        }
    }
}

function showSuccessMessage() {
    let okieThanks = document.getElementById("successIcon");
    okieThanks.style.display = "flex";

    okieThanks.addEventListener("animationend", function () {
        okieThanks.style.display = "none";
    });

    document.querySelector('#form').reset();
}
