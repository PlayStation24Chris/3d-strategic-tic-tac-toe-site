window.addEventListener("resize", changeSize);

function changeSize()
{
    document.getElementById("titleText").style.fontSize = ((screen.width + 400) / 80) + "px";
    console.log(((screen.width + 400) / 80) + "px");
}