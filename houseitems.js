if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  const catalogue = [
    {
      id: "house1",
      desc: "KIIRA ESTATE",
      image: "./Images/home1pic1.png",
      des: " A four bedroomed house, self contained with a quiet neighbourhood",
      link: "./House1.html",
    },
    {
      id: "house2",
      desc: "KIIRA ESTATEt",
      image: "./Images/home2pic1.png",
      des: " A four bedroomed house, self contained with a quiet neighbourhood",
      link: "./House2.html",
    },
    {
      id: "house3",
      desc: "KIIRA ESTATE",
      image: "./Images/home3pic1.png",
      des: " A four bedroomed house, self contained with a quiet neighbourhood",
      link: "./House3.html",
    },
    {
      id: "house4",
      desc: "KIIRA ESTATE",
      image: "./Images/home4pic1.png",
      des: " A four bedroomed house, self contained with a quiet neighbourhood",
      link: "./House4.html",
    },
    {
      id: "house5",
      desc: "KIIRA ESTATE",
      image: "./Images/home5pic1.png",
      des: " A four bedroomed house, self contained with a quiet neighbourhood",
      link: "./House5.html",
    },
    {
      id: "house6",
      desc: "KIIRA ESTATE",
      image: "./Images/home6pic1.png",
      des: " A four bedroomed house, self contained with a quiet neighbourhood",
      link: "./House6.html",
    },
    {
      id: "house7",
      desc: "KIIRA ESTATE",
      image: "./Images/home7pic1.png",
      des: " A four bedroomed house, self contained with a quiet neighbourhood",
      link: "./House7.html",
    },
    {
      id: "house8",
      desc: "KIIRA ESTATE",
      image: "./Images/home8pic1.png",
      des: " A four bedroomed house, self contained with a quiet neighbourhood",
      link: "./House8.html",
    },
    {
      id: "house9",
      desc: "KIIRA ESTATE",
      image: "./Images/home9pic1.png",
      des: " A four bedroomed house, self contained with a quiet neighbourhood",
      link: "./House9.html",
    },
  ];

  catalogue.forEach((item) => {
    let itemAsHtml = `<div class="house-item"><a href="#"><img src="${item.image}" class="category__imagename11 center"/></a>
    <a id="${item.id}" class="category__imagename1 text" href="${item.link}">${item.desc}</a>
    <p class="category__imagename12" >${item.des}</p>
    </div>`;
    const htmlObject = document.createElement("div");
    htmlObject.innerHTML = itemAsHtml;
    const container = document.getElementById("container");
    console.log("container is", container);
    container.append(htmlObject);
    console.log("window is ", window);
  });

  document.getElementById("house1").addEventListener("click", function () {
    window.open("https://jose987654.github.io/BUYHOUSES/AboutUS.html", "_self");
  });
  document.getElementById("house2").addEventListener("click", function () {
    window.open("https://jose987654.github.io/BUYHOUSES/AboutUS.html", "_self");
  });
  document.getElementById("house3").addEventListener("click", function () {
    window.open("https://jose987654.github.io/BUYHOUSES/AboutUS.html", "_self");
  });
  document.getElementById("house4").addEventListener("click", function () {
    window.open("https://jose987654.github.io/BUYHOUSES/AboutUS.html", "_self");
  });
  document.getElementById("house5").addEventListener("click", function () {
    window.open("https://jose987654.github.io/BUYHOUSES/AboutUS.html", "_self");
  });
  document.getElementById("house5").addEventListener("click", function () {
    window.open("https://jose987654.github.io/BUYHOUSES/AboutUS.html", "_self");
  });
  document.getElementById("house6").addEventListener("click", function () {
    window.open("https://jose987654.github.io/BUYHOUSES/AboutUS.html", "_self");
  });
  document.getElementById("house7").addEventListener("click", function () {
    window.open("https://jose987654.github.io/BUYHOUSES/AboutUS.html", "_self");
  });
  document.getElementById("house8").addEventListener("click", function () {
    window.open("https://jose987654.github.io/BUYHOUSES/AboutUS.html", "_self");
  });
  document.getElementById("house9").addEventListener("click", function () {
    window.open("https://jose987654.github.io/BUYHOUSES/AboutUS.html", "_self");
  });
}
