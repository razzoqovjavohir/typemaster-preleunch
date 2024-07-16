const featuresData = [
    {
        icon: "🖥️",
        sarlavha: "HIGHLY COMPATIBLE",
        malumot: "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.",
    },
    {
        icon: "🔷",
        sarlavha: "WIRELES WIDTH BLUETOOTH",
        malumot: "Poewfuul 2.4g RF technology allows you to connect the cordles keyboard from up to 30ft away.",
    },
    {
        icon: "🔋",
        sarlavha: "HIGH CAPACITY BATTERY",
        malumot: "Equipped with a long-lasting built-in battery, you'll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.",
    },
    {
        icon: "💡",
        sarlavha: "RGB BACKLIT MODES",
        malumot: "Choose from bachlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light condions",
    }
];

const features = document.getElementById("features");

document.addEventListener("DOMContentLoaded", () => {
    let shablonlar = "";

    for (let i = 0; i < featuresData.length; i++) {
        console.log(featuresData[i]);

        let shablon = `<article>
        <div class="icon">${featuresData[i].icon}</div>
        <h3>${featuresData[i].sarlavha}</h3>
        <p>${featuresData[i].malumot}</p>
        </article>`;

        shablonlar += shablon;
    }

    features.innerHTML = shablonlar;
}); 
