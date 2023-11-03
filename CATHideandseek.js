function switchoff() {
    document.getElementById("bulb-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchstatus").textContent = "switch Off"
    document.getElementById("off").style.backgroundColor = "#cbd2d9"
    document.getElementById("on").style.backgroundColor = "#22c55e"
}

function switchon() {
    document.getElementById("bulb-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchstatus").textContent = "switch on";
    document.getElementById("off").style.backgroundColor = "#e12d39"
    document.getElementById("on").style.backgroundColor = "#cbd2d9"
}