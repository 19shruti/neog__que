var txtInput = document.querySelector("#txtInput");
var btn = document.querySelector("#btn");
var output = document.querySelector("h1");

if (btn) {
    btn.addEventListener("click", checkpassword);
}







function checkpassword() {
    var password = txtInput.value;
    if (password.length < 10) {
        output.innerHTML = `minimum length should be 10 characters `;
        output.style.backgroundColour = "red";

    } else {
        var count = 0;
        for (let i = 0; i < password.length; i++) {
            if (password[i] !== '@') {
                continue;
            } else {
                count++;
                break;
            }
        }
        if (count > 0) {
            output.innerHTML = "password is good";
            output.style.backgroundColour = "green";
        } else {
            output.style.backgroundColour = "red";
            output.innerHTML = "password should contain @";
        }
    }




}
