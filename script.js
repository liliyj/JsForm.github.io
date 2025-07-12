document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name-input");
    const ageInput = document.getElementById("age-input");

    const messageDiv = document.createElement("div");
    form.appendChild(messageDiv);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const age = ageInput.value.trim();

        if (name === "" || age === "") {
            messageDiv.textContent = "لطفاً همه فیلدها را پر کنید.";
            return;
        }

        messageDiv.textContent = `سلام ${name} عزیز! شما ${age} سال دارید.`;
    });
});
