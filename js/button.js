document.getElementById("Bite").addEventListener("click" ,changestyleBtn1);
document.getElementById("Bite2").addEventListener("click" ,changestyleBtn2);

function changestyleBtn1() {
    document.getElementById("Bite").style.backgroundColor = "white";
    document.getElementById("MoskitoButton").src = "img/green-mosquito.png";
    document.getElementById("Bite").style.border = "solid"
    document.getElementById("Bite").style.color = "#118b04"
}

function changestyleBtn2() {
    document.getElementById("Bite2").style.backgroundColor = "white";
    document.getElementById("EyeButton").src = "img/green-eye.png";
    document.getElementById("Bite2").style.border = "solid"
    document.getElementById("Bite2").style.color = "#118b04"
}