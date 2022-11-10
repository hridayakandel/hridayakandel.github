


window.onload = function () {


    setInterval(() => {
        const dateAndTime = new Date();
        const result = `${dateAndTime.getFullYear()}-${dateAndTime.getMonth()}-${dateAndTime.getDay()}  ${dateAndTime.getHours()} : ${dateAndTime.getMinutes()} : ${dateAndTime.getSeconds()}`;
        document.getElementById('clock').innerText = result;
    }, 1000);




}