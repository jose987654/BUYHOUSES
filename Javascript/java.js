if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  document.getElementById("homepage").addEventListener("click", function () {
    window.open("https://jose987654.github.io/BUYHOUSES/index.html", "_self");
  });

  document.getElementById("catalogue").addEventListener("click", function () {
    window.open(
      "https://jose987654.github.io/BUYHOUSES/Catalogue.html",
      "_self"
    );
  });

  document.getElementById("signup").addEventListener("click", function () {
    window.open(
      "https://jose987654.github.io/BUYHOUSES/SignUPpage.html",
      "_self"
    );
  });

  document.getElementById("signup").addEventListener("click", function () {
    window.open(
      "https://jose987654.github.io/BUYHOUSES/SignUPpage.html",
      "_self"
    );
  });

  document.getElementById("about").addEventListener("click", function () {
    window.open("https://jose987654.github.io/BUYHOUSES/AboutUS.html", "_self");
  });
}

Cost = document
  .getElementById("cartvalue")
  .addEventListener("click", function () {
    localStorage.setItem("cost", xxxx);
    let formData = JSON.parse(localStorage.getItem("formData")) || [];
    formData.push({ Cost });
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("added to cart");
  });
