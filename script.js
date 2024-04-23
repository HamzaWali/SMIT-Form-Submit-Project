// function seemore () {
//     let para =
//     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde venigikguyiuhgiuhgiuhgihguigyiygfiufyufyufytufyufygufgufgam voluptatum architecto necessitatibus. Perspiciatis architecto recusandae unde. Porro sapiente voluptatem inventore, provident labore molestiae vitae vel ullam. Facere, ea voluptates.";
// document.querySelector(".pra").innerHTML =para;
// }
function myFunction() {
    var dots = document.getElementById("#dots");
    var moreText = document.getElementById("#more");
    var btnText = document.getElementById("#myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }