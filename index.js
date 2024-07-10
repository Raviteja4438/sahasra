// Function to switch off
function switchOff() {
    document.getElementById("catImage").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("onSwitch").style.backgroundColor = "#22c55e";
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
  }
  
  // Function to switch on
  function switchOn() {
    document.getElementById("catImage").src =
      "https://res.cloudinary.com/dlngyh6jo/image/upload/v1720508821/Sahastra/1720508773591_kggvcs.jpg";
    document.getElementById("switchStatus").textContent = "Switched On";
    document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
  }
  
  // Set initial state to Off when the page loads
  document.addEventListener("DOMContentLoaded", function () {
    switchOff();
    colorizeHeading();
  });
  
  // Function to colorize each letter in the heading
function colorizeHeading() {
    const heading = document.querySelector('.birth');
    const text = heading.textContent;
    const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8', 'color-9', 'color-10'];
  
    heading.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.className = colors[i % colors.length];
      heading.appendChild(span);
    }
}