const buy = document.querySelectorAll(".put");
const bigger = document.getElementById("bigger");
const bottn = document.querySelectorAll(".butn");
const visa = document.getElementById("visa");
const submit = document.querySelectorAll(".submit");
const submitt = document.querySelectorAll(".submitt");
const tesst = document.getElementById("test");
const mode = document.getElementById("modee");
const dark = document.getElementById("daark");
const left = document.getElementById("left");
const addpro = document.querySelector("#ad-pro");
const proconatiner = document.querySelector("#pro-container");
const proz = `
<div class="card p-card">
          <img src="/uploads/camera.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h2 class="card-title d-flex justify-content-center text-secondary">
              fujifilm camera
            </h2>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              
              class="btn btn-primary d-flex justify-content-center put-card put"
              >Put in cart</a
            >
          </div>
        </div>


`;
addpro.addEventListener("click", (eo) => {
  proconatiner.innerHTML += proz;
});
proconatiner.addEventListener("click", (eo) => {
  if (
    eo.target.className ==
    "btn btn-primary d-flex justify-content-center put-card put"
  ) {
    bigger.style.display = "block";
    tesst.style.display = "none";
  }
});

mode.addEventListener("click", (eo) => {
  dark.classList.toggle("dark");
  left.classList.toggle("leeft");
});
// buy.forEach((item) =>
//   item.addEventListener("click", (eo) => {

//   })
// );

bottn.forEach((item) =>
  item.addEventListener("click", (eo) => {
    visa.style.display = "block";
  })
);

submit.forEach((item) =>
  item.addEventListener("click", (eo) => {
    tesst.style.display = "block";
    visa.style.display = "none";
    bottn.forEach((item) => (item.style.display = "none"));
    setTimeout(() => {
      tesst.style.display = "none";
      bigger.style.display = "none";
      visa.style.display = "none";
      bottn.forEach((item) => (item.style.display = "block"));
    }, 3000);
  })
);

submitt.forEach((item) =>
  item.addEventListener("click", (eo) => {
    tesst.style.display = "block";
    visa.style.display = "none";
    bottn.forEach((item) => (item.style.display = "none"));
    setTimeout(() => {
      tesst.style.display = "none";
      bigger.style.display = "none";
      visa.style.display = "none";
      bottn.forEach((item) => (item.style.display = "block"));
    }, 3000);
  })
);
