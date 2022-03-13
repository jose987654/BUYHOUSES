const signIn = (e) => {
  let fname = document.getElementById("fname").value,
    email = document.getElementById("email").value,
    pwd = document.getElementById("pwd").value;

  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) => data.fname.toLowerCase() == fname.toLowerCase()
    );

  if (!exist) {
    formData.push({ fname, email, pwd });
    localStorage.setItem("formData", JSON.stringify(formData));
    document.querySelector("form").reset();
    document.getElementById("fname").focus();
    alert("Account Created.\n\nPlease Sign In using the link below.");
  } else {
    alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
  }
  e.preventDefault();
};




     Cost = document.getElementById("cartvalue").addEventListener("click", function () {
     localStorage.setItem("cost",xxxx);
     let formData = JSON.parse(localStorage.getItem("formData")) || [];
     formData.push({ Cost });
     localStorage.setItem("formData", JSON.stringify(formData));
     alert("added to cart");

 
  


  $(document).ready(function() {
    var test = ["text1", "text2", "text3"];
    $('#here').html(test.join("<br>"));
}); 
 