document.getElementById("home").addEventListener("click", () => {
    window.location.href = "/";
});
document.getElementById("faucet").addEventListener("click", () => {
    window.location.href = "faucet";
});
document.getElementById("coffee1-img").addEventListener("click", buyNFT);
document.getElementById("coffee2-img").addEventListener("click", buyNFT);
document.getElementById("coffee3-img").addEventListener("click", buyNFT);

function buyNFT() {
    window.location.href = "https://google.com";
}
