fetch("http://localhost:5000/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Andika",
    email: "andika@mail.com",
    message: "Halo ini tes"
  })
})
  .then(res => res.json())
  .then(data => console.log("Respon backend:", data))
  .catch(err => console.error("Error:", err));
