//all => dark theme , form , leftright
//----------bar section------------------
let topHeader = document.querySelector(".top");
let sideBar = document.querySelector(".sidebar");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // topHeader.classList.add("hide");
    sideBar.classList.add("hide-side");
  } else {
    // topHeader.classList.remove("hide");
    sideBar.classList.remove("hide-side");
  }

  lastScrollY = window.scrollY;
});
//------change Mode section---------------
let switchToggle = document.querySelector('input[type="checkbox"]');
let toggleAll = document.querySelector("#toggle-all");
let nav = document.querySelector("nav");
let side = document.querySelector(".sidebar");

function switchMode(e) {
  //ทำงานตรวจเช็คว่า ตัวที่คลิกไป มันติ๊กถูกหรือปล่าว ให้ใช้ e.target.checked
  if (e.target.checked) {
    // document.documentElement.setAttribute("data-theme", "dark");

    darkMode();
  } else {
    // document.documentElement.setAttribute("data-theme", "กราจอก"); //เราไม่ได้กำหนดค่าlightMode ดังนั้นพิมอะไรก็ได้ มันจะกลายเป็น ค่า default แทน
    lightMode();
  }
}
function darkMode() {
  toggleAll.children[0].textContent = "Dark mode";
  toggleAll.children[1].classList.replace("fa-sun", "fa-moon");
  nav.style.backgroundColor = "rgb(5,3,3,0.5)";
  side.style.backgroundColor = "rgb(5,3,3,0.5)";
  document.body.classList.toggle("dark-theme");
}

function lightMode() {
  toggleAll.children[0].textContent = "Light mode";
  toggleAll.children[1].classList.replace("fa-moon", "fa-sun");
  nav.style.backgroundColor = "rgba(185, 212, 233, 0.5)";
  side.style.backgroundColor = "rgba(185, 212, 233, 0.5)";
  document.body.classList.toggle("dark-theme");
}
switchToggle.addEventListener("change", switchMode); //ถ้ามีการเปลี่ยนค่าสถานะ function switchMode จะทำงาน

//------------btn left-right img---------------
let rabbitArr = [
  "images/rabbit1.jpg",
  "images/rabbit2.jpg",
  "images/rabbit3.jpg",
  "images/rabbit4.jpg",
  "images/rabbit5.jpg",
  "images/rabbit6.jpg",
  "images/rabbit7.jpg",
  "images/rabbit8.jpg",
  "images/rabbit9.jpg",
  "images/rabbit10.jpg",
  "images/rabbit11.jpg",
];
let img1 = document.querySelector(".img1");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let indexArr = 0;

function checkPrev() {
  if (indexArr > 0) {
    indexArr--;

    img1.src = rabbitArr[indexArr];
  }
}
function checkNext() {
  if (indexArr < rabbitArr.length - 1) {
    indexArr++;
    img1.src = rabbitArr[indexArr];
  }
}

prev.addEventListener("click", checkPrev);
next.addEventListener("click", checkNext);

//-------------side bar ------------------------------

let usernames = document.querySelector("#username");
let passwords = document.querySelector("#password1");
let errorMessage1 = document.querySelector(".error-message1");
let errorMessage2 = document.querySelector(".error-message2");
let lastAns = document.querySelector(".login");

usernames.addEventListener("input", function () {
  let invalid = false;
  let username = usernames.value;
  let userCheck = /^(?=.{6,12}$)[a-z][a-z]+\d*$|^(?=.{6,12}$)[a-z]\d\d+$/gi;
  let result = userCheck.test(username);
  if (!result) {
    invalid = true;
  }
  if (invalid) {
    errorMessage1.style.visibility = "visible";
  } else {
    errorMessage1.style.visibility = "hidden";
  }
});
passwords.addEventListener("input", function () {
  let invalid = false;
  let pass = passwords.value;
  let userCheck = /^(?=.{6,12}$)[a-z][a-z]+\d*$|^(?=.{6,12}$)[a-z]\d\d+$/gi;
  let result = userCheck.test(pass);
  if (!result) {
    invalid = true;
  }
  if (invalid) {
    errorMessage2.style.visibility = "visible";
  } else {
    errorMessage2.style.visibility = "hidden";
  }
});

lastAns.addEventListener("click", (e) => {
  if (usernames.value === "") {
    errorMessage1.style.visibility = "visible";
  }
  if (passwords.value === "") {
    errorMessage2.style.visibility = "visible";
  }
  if (
    errorMessage1.style.visibility === "visible" ||
    errorMessage2.style.visibility === "visible" ||
    document.querySelector("input").value === ""
  ) {
    e.preventDefault();
  } else {
    alert("Login successfully");
  }
});
