"use strict";

window.addEventListener("load", () => {
    setInterval(() => {
        const date = new Date();

        const hours = document.getElementById("hours");
        const minutes = document.getElementById("minutes");
        const seconds = document.getElementById("seconds");

        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();

        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;


        if (h < 10) {
            hours.innerHTML = "0" + h;
        }

        if (m < 10) {
            minutes.innerHTML = "0" + m;
        }

        if (s < 10) {
            seconds.innerHTML = "0" + s;
        }
    }, 1000);
})