var display = document.getElementById("display");
var buttons = document.getElementsByTagName("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if (this.id === "c") {
            display.value = "";
        } else if (this.id === "=") {
            try {
                var result = eval(display.value);
                if (isNaN(result)) throw "Error";
                if (result === "Infinity") throw "Error";
                display.value = result;
            } catch (err) {
                display.value = "Error";
                display.style.color = "red";
            }
        } else {
            display.style.color = "white";
            display.value += this.id;
        }
    });
}
