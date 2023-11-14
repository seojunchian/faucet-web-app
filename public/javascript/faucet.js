document.getElementById("home").addEventListener("click", () => {
  window.location.href = "/";
});
document.getElementById("coffee").addEventListener("click", () => {
  window.location.href = "coffee";
});

document.getElementById("log-in").addEventListener("click", async () => {
  const provider = window.ethereum;
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const balances = await window.ethereum.request({
    method: "eth_getBalance",
    params: [accounts[0]],
  });

  window.ethereum.on("accountsChanged", (accounts) => {
    address.innerHTML = "Address: " + accounts[0];
  });

  document.getElementById("address").innerHTML = "Address: " + accounts[0];
  document.getElementById("balance").innerHTML = "Balance: " + balances;
});

document.getElementById("btn-send").addEventListener("click", async () => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  window.ethereum
    .request({
      method: "eth_sendTransaction",
      params: [
        {
          from: accounts[0],
          to: document.getElementById("input-address").value,
          value: "1000000000000",
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error(error));
});

document.getElementById("footer").addEventListener("click", () => {
  document.getElementById("footer").setAttribute("target", "_blank");
});
