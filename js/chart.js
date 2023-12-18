const wrapper = document.querySelector(".wrapper"),
  generateBtn = document.querySelector(".form button"),
  downloadBtn = document.querySelector(".qr-code button"),
  qrinput = document.querySelector(".form input"),
  qrImg = document.querySelector(".qr-code img")
      
qrinput.addEventListener("input", function () {
  qrinput.classList.toggle("shadowing")
})
let url;
let colors = ['ffffff','fff000','ffff00','00ffff','8e2be2','0f00f0','f0ff0f','f00f00','00f00f','7fff00','00ff00','f0000f']
generateBtn.addEventListener("click", () => {
  let randomclr = Math.floor(Math.random() * colors.length)
  let qrvalue = qrinput.value;
  if (!qrvalue) return;
  generateBtn.innerHTML = "Ishlab chiqarilmoqda...";
  url = `https://api.qrserver.com/v1/create-qr-code/?background=red/?size=120x120&data=${qrvalue}&bgcolor=${colors[randomclr]}`
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?background=red/?size=120x120&data=${qrvalue}&bgcolor=${colors[randomclr]}`
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active")    
    generateBtn.innerHTML = "Tayyor!"
  })
  
})
downloadBtn.onclick = function () {
  let a = document.createElement("a");
  a.href = url;
  a.download = "rasm.jpg";
  a.click()

}
qrinput.addEventListener("keyup", () => {
  if (!qrinput.value) {
    wrapper.classList.remove("active")       
  }
})
// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example&bgcolor=ffff00