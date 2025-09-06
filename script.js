


const ramadan = new Date("Feb 17, 2026 18:00:00");

function update() {
    const now = new Date();
    let t = (ramadan - now) / 1000;

    if (t <= 0) {
        document.getElementById("countdown").innerHTML = "<span class='celebrate'>🌙 Ramadan Mubarak!</span>";


        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });

        return;
    }

    const months = Math.floor(t / (30 * 24 * 60 * 60));
    t %= 30 * 24 * 60 * 60;

    const days = Math.floor(t / (24 * 60 * 60));
    t %= 24 * 60 * 60;

    const hours = Math.floor(t / 3600);
    t %= 3600;

    const minutes = Math.floor(t / 60);
    const seconds = Math.floor(t % 60);

    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    document.getElementById("currentTime").innerText =
        "Current Time: " + now.toLocaleTimeString();
}

setInterval(update, 1000);
update();




