document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name");

    if (!form || !nameInput) {
        console.error("Form or input not found");
        return;
    }


    const message = document.createElement("div");
    message.className = "message";
    message.textContent = "";

    form.parentNode.insertBefore(message, form.nextSibling);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        message.className = "message";

        const name = nameInput.value.trim();

        if (name === "") {
            showMessage("❌ Name is required. Form not submitted.", "error");
            return;
        }

        showMessage("✅ Form submitted successfully!", "success");
    });

    function showMessage(text, type) {
        message.textContent = text;
        message.classList.add(type);

        message.offsetHeight;

        message.classList.add("show");
    }

});