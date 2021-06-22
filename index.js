const QRCode = require("qrcode");

let data = {
  name: "John Doe",
  age: 27,
  department: "Police",
  id: "azertyuiop0123456789",
};

let stringData = JSON.stringify(data);

// Print the QR code to terminal
QRCode.toString(stringData, { type: "terminal" }, function (err, url) {
  if (err) return console.log("Error:", err);
  console.log(url);
});

// Get the base64 url
QRCode.toDataURL(stringData, function (err, url) {
  if (err) return console.log("error occured");
  console.log(url);
});
