// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {});
let hideError = document.getElementById("modal");
hideError.className = "hidden";

let hearts = document.querySelectorAll(".like-glyph");
let errMessage = document.getElementsByName("modal");

mimicServerCall()
  .then((data) => {
    console.log(data);
    hearts.forEach((heart) => {
      heart.addEventListener("click", () => {
        heart.textContent === EMPTY_HEART
          ? (heart.textContent = FULL_HEART)
          : (heart.textContent = EMPTY_HEART);
        heart.classList.toggle("activated-heart");
      });
    });
  })
  .catch((error) => {
    console.log(error);
    errMessage.textContent = "error, please try again later.";
    errMessage.classList.remove("hidden");
    setTimeout(() => errMessage.classList.add("hidden"), 3000);
  });

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
mimicServerCall();
