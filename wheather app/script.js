
function showMessage() {

    const message = document.getElementById("final-message");

    message.innerHTML =
        "No matter how long it takes, I hope we can smile together again. 💗<br><br>Sending you the biggest virtual hug! 🫂";

    message.style.animation = "float 2s ease-in-out";
}

// Create floating hearts

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.color = "#d97991";
    heart.style.fontSize = "25px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 1
            },
            {
                transform: "translateY(-100vh) rotate(360deg)",
                opacity: 0
            }
        ],
        {
            duration: 5000,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 1000);
