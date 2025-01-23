"use strict";

const refs = {
    themeButton: document.querySelector(".theme-button"),
    moonIcon: document.querySelector(".theme-icon-moon"),
    sunIcon: document.querySelector(".theme-icon-sun"),
    forgotLink: document.querySelector(".forgot-text"),
};

refs.themeButton.addEventListener("click", changeTheme);
refs.forgotLink.addEventListener("click", showModal);

function changeTheme() {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "");

    updateIcons(isDark);
}

function updateIcons(isDark) {
    if (isDark) {
        refs.moonIcon.style.display = "none";
        refs.sunIcon.style.display = "block";
    } else {
        refs.moonIcon.style.display = "block";
        refs.sunIcon.style.display = "none";
    }
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.toggle("dark");
    updateIcons(savedTheme);
}

function showModal(e) {
    e.preventDefault();

    const modalHTML = `<div class="modal-box"><p>We are working on this page...</p></div>`;
    const instance = basicLightbox.create(modalHTML);

    instance.show();
}
