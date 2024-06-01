// const deg = 6;
// const hr = document.querySelector("#hr");
// const mn = document.querySelector("#mn");
// const sc = document.querySelector("#sc");

// setInterval(() => {
//     let date = new Date();

//     let hh = date.getHours() * 30;
//     let mm = date.getMinutes() * deg;
//     let ss = date.getSeconds() * deg;
//     console.log(hh, mm);
//     hr.style.transform = `rotate(${hh + mm / 12}deg)`;
//     mn.style.transform = `rotate(${mm}deg)`;
//     sc.style.transform = `rotate(${ss}deg)`;
// });

const deg = 6;
const hr = document.querySelector(".hr");
const mn = document.querySelector(".mn");
const sc = document.querySelector(".sc");

setInterval(() => {
    let date = new Date();

    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;

    hr.style.transform = `rotate(${hh + mm / 12}deg)`;
    mn.style.transform = `rotate(${mm + ss / 60}deg)`;
    sc.style.transform = `rotate(${ss}deg)`;
}, 1000);
