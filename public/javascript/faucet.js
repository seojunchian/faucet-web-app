document.getElementById("home").addEventListener("click", () => {
  window.location.href = "/";
});

document.getElementById("coffee").addEventListener("click", () => {
  window.location.href = "coffee";
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
const toAccount = document.getElementById("input-address");

document.getElementById("btn-send").addEventListener("click", async () => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  window.ethereum
    .request({
      method: "eth_sendTransaction",
      params: [
        {
          from: accounts[0], // The user's active address.
          to: toAccount.value, // Required except during contract publications.
          value: "5000000000000000", // Only required to send ether to the recipient from the initiating external account.
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error(error));
});
