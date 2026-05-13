function buyItem(name, price) {
alert(
"You bought:\n\n" +
name +
"\nPrice: Rp" + price +
"\n\nThank you for your purchase 🍣"
);
}

const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;

  message.textContent = `Welcome, ${username}! 🍣`;
});