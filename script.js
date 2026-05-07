// script.js - Simple Portfolio Script
// 1. Project Buttons - Show Alert
document.getElementById(projects).onclick = function (e) {
    if (e.target.dataset.proj) {
        let box = document.getElementById("projectAlert");
        box.textContent = "you clicked: " + e.target.dataset.proj + " ✅ ";
        box.classList.remove("d-none");
        setTimeout(() => box.classList.add("d-none"), 3000);
    }
};

// 2. Contact Form - Send with Formspree
document.getElementById(contactForm).onsubmit = function (e) {
    e.preventDefault(); // Prevent the default from submission behavior 
    let form = this;

    // Send the form data to Formspree using fetch
    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
    })
        .then(res => {
            if (res.ok) {
                // Show success message if the response is successful
                document.getElementById("sentOk").classList.remove("d-none");
                form.reset(); // Reset the form after submission
                document.getElementById("sentFail").classList.remove("d-none");
            }
        })
        .catch(() => {
            // if there is an error in the fetch request,show faliure message
            document.getElementById("sentFail").classList.remove("d-none");
        });
};

const h = document.querySelector(".hero"), b = document.querySelector(".navbar-brand"),
    t = () => b.classList.toggle("hide", h.getBoundingClientRect().botton > 60);
t(); addEventListener("scroll", t);