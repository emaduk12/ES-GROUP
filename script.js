// Demo users
const users = {
  "7GHT2B": {
    name: "John Doe",
    photo: "https://i.pravatar.cc/150?img=12",
    dob: "1995-06-12",
    location: "New York, USA",
    code: "7GHT2B",
    balance: "120.75"
  },
  "A8B3X1": {
    name: "Jane Smith",
    photo: "https://i.pravatar.cc/150?img=48",
    dob: "1990-11-05",
    location: "London, UK",
    code: "A8B3X1",
    balance: "340.00"
  },
  "KURD12": {
    name: "kurdistan",
    photo: "https://files.fm/thumb_show.php?i=8eunjnhpab",
    dob: "1990-11-05",
    location: "erbil, kurdistan",
    code: "KURD12",
    balance: "£45.08"
  }
};

function login() {
  const input = document.getElementById("codeInput").value.trim().toUpperCase();
  const error = document.getElementById("error");

  if (users[input]) {
    const user = users[input];
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("profile-section").classList.remove("hidden");

    document.getElementById("name").textContent = user.name;
    document.getElementById("photo").src = user.photo;
    document.getElementById("dob").textContent = user.dob;
    document.getElementById("location").textContent = user.location;
    document.getElementById("userCode").textContent = user.code;
    document.getElementById("balance").textContent = user.balance;
    error.textContent = "";

    // Set login time
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("loginTime").textContent = timeString;

    // Generate smaller QR Code with only name and balance
    const qrData = JSON.stringify({
      name: user.name,
      balance: user.balance
    });

    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = ""; // Clear previous QR code if any

    new QRCode(qrContainer, {
      text: qrData,
      width: 100,
      height: 100,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

  } else {
    error.textContent = "❌ ئەڤ کودە بەردەست نینە";
  }
}

function logout() {
  document.getElementById("profile-section").classList.add("hidden");
  document.getElementById("login-section").classList.remove("hidden");
  document.getElementById("codeInput").value = "";
  document.getElementById("qrcode").innerHTML = ""; // Clear QR code
}

function toggleForgotCard() {
  const card = document.getElementById("forgotCard");
  card.classList.toggle("hidden");
}