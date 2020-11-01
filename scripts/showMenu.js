function myFunction() {
    var x = document.getElementsByClassName("navLinks");
    console.log(x);
    if (x[0].style.display === "flex") {
        x[0].style.display = "";
    } else {
        x[0].style.display = "flex";

    }
}