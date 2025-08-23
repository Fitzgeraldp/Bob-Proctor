function aboutUsClick(e) {
    e.preventDefault();
    showaboutUsClick();
    hideclassesTimesAndPrices();

}

function classTimesAndPricesClick(e) {
    e.preventDefault();
    hideaboutUsClick();
    showclassesTimesAndPrices();

}

function FAQsClick(e) {
    e.preventDefault();
    hideaboutUsClick();
    hideclassesTimesAndPrices();
    showFAQs();

}

function contactUsClick(e) {
    e.preventDefault();
    hideaboutUsClick();
    hideclassesTimesAndPrices();
    hideFAQs();
    showcontactUs();

}

function signInClick(e) {
    e.preventDefault();
    hideaboutUsClick();
    hideclassesTimesAndPrices();
    hideFAQs();
    hidecontactUs();
    showsignIn();

}

function hideclassesTimesAndPricesClick() {
    var element = document.getElementById("about-us");
    element.style.display = "none";

}


function showaboutUsClick() {
    var element = document.getElementById("about-us");
    element.style.display = "block";

}

function hideclassesTimesAndPrices() {
    var element = document.getElementById("classes-times-and-prices");
    element.style.display = "none";
}

function showclassesTimesAndPrices() {
    var element = document.getElementById("classes-times-and-prices");
    element.style.display = "block";
}

function hideFAQs() {
    var element = document.getElementById("FAQs");
    element.style.display = "none";
}

function showFAQs() {
    var element = document.getElementById("FAQs");
    element.style.display = "block";
}

function hidecontactUs() {
    var element = document.getElementById("contact-us");
    element.style.display = "none";
}

function showcontactUs() {
    var element = document.getElementById("contact-us");
    element.style.display = "block";
}

function hidesignIn() {
    var element = document.getElementById("sign-in");
    element.style.display = "none";
}

function showsignIn() {
    var element = document.getElementById("sign-in");
    element.style.display = "block";
}


// Function to add hyperlink to reserve class times    
function handleReservationClick(e) {
    event.preventDefault();

    const reservationId = event.target.getAttribute('data-reservation-id');
    console.log(`Reservation option selected with ID: ${reservationId}`);

}

// Add reservation links for session times
const reservationLinks = document.querySelectorAll('.reservation-link');
reservationLinks.forEach(link => {
    link.addEventListener('click', handleReservationClick);
});

document.addEventListener("DOMContentLoaded", () => {
    const times = ["05:00", "06:00", "07:00", "17:00", "18:00", "19:00"];
    const reservationContainer = document.getElementById("reserve-class"); // Corrected ID
});

// Function to create reservation links
function reserveClass() {
    classTimes.forEach((time) => {
        const reserve = document.createElement("reserve");
        button.textContent = `Reserve ${time}`;
        button.classList.add("reservation-link");
        button.setAttribute("data-time", time);

        button.addEventListener("click", function () {
            reserveClass(time, button);
        });

        reservationContainer.appendChild(button);
    });
}

// Adding link to reserve session times
function reserveTime(button, time) {
    if (button.classList.contains("reserved")) {
        alert(`"${time}" is already reserved!`);
    } else {
        button.classList.add("reserved");
        button.innerText = `Reserved: ${time}`;
        alert(`You have reserved the "${time}" class!`);
    }
}



//Add hyperlink to price options
let mybutton = document.getElementById("PayNow")

const priceOptions = [20, 50, 80]; // Example array
priceOptions.forEach(price => {
    console.log(`Price option: $${price}`);
});

let mybutton = document.getElementById("ReturntoTop");

function topFunction() {
    document.documentElement.scrollTop = 0;
}

const programInput = document.getElementById('program-upload');
const fileNameDisplay = document.querySelector('.program-name');

document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("file-upload");
    const fileNameDisplay = document.getElementById("file-name");

    fileInput.addEventListener("change", function () {
        if (fileInput.files.length > 0) {
            fileNameDisplay.textContent = `Selected: ${fileInput.files[0].name}`;
        } else {
            fileNameDisplay.textContent = "No file chosen";
        }
    });
});

// Download program url and and file name
function downloadProgram() {
    const programUrl = 'program-file.pdf';
    const programName = 'program-download.pdf';

    // Create a a program url and program name
    const download = document.createElement('a');
    downloadLink.href = programUrl;
    downloadLink.download = programName;

    // Download program
    document.body.appendChild(download);
    downloadLink.click();
    document.body.removeChild(download);
}


