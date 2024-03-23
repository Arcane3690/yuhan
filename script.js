const infoContent = document.getElementById('info-content');
const rightcontainer = document.getElementById('right-container');
const lists = document.getElementById('lists');

const canvascontainer = document.getElementById('canvas-container');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

document.getElementById("my-button1").onclick = function () {
    canvascontainer.style.display = 'block'
    rightcontainer.style.display = 'none';
    infoContent.style.display = 'none';

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 300;
    const color = 'blue';

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  };

document.getElementById("my-button2").onclick = function () {
    infoContent.style.display = 'block';
    rightcontainer.style.display = 'none';
    canvascontainer.style.display = 'none';
  };

