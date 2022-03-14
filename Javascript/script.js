const signUp = (e) => {
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
    document.getElementById("email").focus();
    alert("Account Created.\n\nPlease Proceed using the link below.");
    window.open(
      "https://jose987654.github.io/BUYHOUSES/AboutUS.html",
      "_blank"
    );
  } else {
    alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
    window.open(
      "https://jose987654.github.io/BUYHOUSES/AboutUS.html",
      "_blank"
    );
  }
  e.preventDefault();
};

function signIn(e) {
  let email = document.getElementById("uname").value,
    pwd = document.getElementById("pwd").value;
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd
    );
  if (!exist) {
    alert("Incorrect login credentials");
  } else {
    location.href = "/";
  }
  e.preventDefault();
}
