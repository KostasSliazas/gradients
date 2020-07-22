(function () {
    let body = document.body;
    let colorDirection = document.getElementsByName("direction");
    let color1 = document.getElementById("color1");
    let color2 = document.getElementById("color2");
    let colorOut = document.getElementById("color-out");
    let copyTxt = document.getElementById("copy-text");
    let ranges = document.getElementById("ranges");
    let wrp = document.getElementById("wraoer");
    let range;
    // get checked value
    function getCheckedRadio() {
        let cheked = "0deg";
        colorDirection.forEach(element => {
            if (element.checked) checked = element.value;
        });
        return checked;
    }
    //copy input text to cliboard
    function copyText(element) {
        element.select();
        element.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }

    //update all stuff
    function updateValues(e) {
        getCheckedRadio();
        setLabel();
        if (e && e.target.parentElement.className === "radios") {
            range = getCheckedRadio();
        } else {
            range = ranges.value + "deg";
        }
        setBodyBackground();
        colorOut.value = setGradient();
    }

    //set gradient string
    function setGradient() {
        return `linear-gradient(${range}, ${color1.value}, ${color2.value})`;
    }

    //set body background
    function setBodyBackground() {
        body.style.backgroundImage = setGradient();
    }

    //set label of ranges
    function setLabel() {
        ranges.nextElementSibling.innerText = ranges.value + "deg";
    }

    wrp.addEventListener("input", updateValues);
    copyTxt.addEventListener("click", () => copyText(colorOut));
    updateValues();
})();