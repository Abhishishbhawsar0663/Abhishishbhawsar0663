const popup = document.getElementById("popup");
const title = document.getElementById("popup-title");
const message = document.getElementById("popup-message");

function showPopup(type) {
    popup.classList.remove("Submited", "Failed");

    if (type === "success") {
        popup.classList.add("Submited");
        title.textContent = "Submited Successful";
        message.textContent = "Welcome! You have Submited successfully";
       message.className="popup  "

    } else {
        popup.classList.add("Failed");
        title.textContent = "Submition Failed";
        message.textContent = "Invalid ";
    }

    popup.classList.add("show");


    setTimeout(closePopup, 3000);
}

function closePopup() {
    popup.classList.remove("show");
}