document.getElementById("home").addEventListener("click", () => {
  window.location.href = "/";
});
document.getElementById("faucet").addEventListener("click", () => {
  window.location.href = "faucet";
});
document.getElementById("log-in").addEventListener("click", async () => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const balances = await window.ethereum.request({
    method: "eth_getBalance",
    params: [accounts[0]],
  });
  document.getElementById("address").innerHTML = "Address: " + accounts[0];
  document.getElementById("balance").innerHTML = "Balance: " + balances;
});
