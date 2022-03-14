if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  catalogue.forEach((item) => {
    let itemAsHtml = (
      <div>
        <img src="${item.image}" />
      </div>
    );
    document.getElementById("#container").append(itemAsHtml);
  });
}

const catalogue = [
  { id: "house1", image: "./Images/home1pic1.png" },
  { id: "house2", image: "./Images/home2pic1.png" },
  { id: "house3", image: "./Images/home3pic1.png" },
  { id: "house4", image: "./Images/home4pic1.png" },
  { id: "house5", image: "./Images/home5pic1.png" },
  { id: "house6", image: "./Images/home6pic1.png" },
  { id: "house7", image: "./Images/home7pic1.png" },
  { id: "house8", image: "./Images/home8pic1.png" },
  { id: "house9", image: "./Images/home0pic1.png" },
];
