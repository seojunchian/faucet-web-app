document.getElementById("home").addEventListener("click", () => {
  window.location.href = "/";
});
document.getElementById("faucet").addEventListener("click", () => {
  window.location.href = "faucet";
});
document.getElementById("log-in").addEventListener("click", async () => {
  let address = document.getElementById("address");
  let balance = document.getElementById("balance");
  let provider = window.ethereum;
  if (typeof provider !== "undefined") {
    provider
      .request({method: "eth_requestAccounts"})
      .then((accounts) => {
        address.innerHTML = "Address: " + accounts[0];
      })
      .catch((error) => {
        console.log(error);
      });
    provider.on("accountsChanged", (accounts) => {
      address.innerHTML = "Address: " + accounts[0];
    });
  }
});
