/**
 * login.js
 * @author Hridaya Kandel
 * @since 09-11-2022 

 */

"use strict;"
window.onload = function () {
    const loginForm = document.getElementById('nameform');
    loginForm.onsubmit = function (event) {
        event.preventDefault();
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const websiteURL = document.getElementById("websiteURL");
        const checkbox = document.getElementById("checkbox");
        // console.log(checkbox);
        console.log(`Email : ${email.value}`);
        console.log(`password : ${password.value}`);
        console.log(`website URL : ${websiteURL.value}`);
        console.log(`checkbox : ${checkbox.value}`);
        email.value = "";
        password.value = "";
        websiteURL.value = "";
        checkbox.value = "";
    }

}