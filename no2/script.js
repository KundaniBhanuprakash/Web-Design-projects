 // Get logo image and button
 const logoImg = document.getElementById('logo-img');
 const shopBtn = document.getElementById('shopnow-btn');
 // Create a temporary image to get its color
 logoImg.onload = function() {
     // Create canvas to get average color
     const canvas = document.createElement('canvas');
     canvas.width = logoImg.width;
     canvas.height = logoImg.height;
     const ctx = canvas.getContext('2d');
     ctx.drawImage(logoImg, 0, 0, logoImg.width, logoImg.height);
     const imageData = ctx.getImageData(0, 0, logoImg.width, logoImg.height).data;
     let r = 0, g = 0, b = 0, count = 0;
     for (let i = 0; i < imageData.length; i += 4) {
         r += imageData[i];
         g += imageData[i+1];
         b += imageData[i+2];
         count++;
     }
     r = Math.round(r/count);
     g = Math.round(g/count);
     b = Math.round(b/count);
     shopBtn.style.backgroundColor = `rgb(${r},${g},${b})`;
     shopBtn.style.borderColor = `rgb(${r},${g},${b})`;
     shopBtn.style.color = '#fff';
 };
 // If image is cached
 if (logoImg.complete) logoImg.onload();

   // Add custom-shadow class to all cards on DOMContentLoaded
 document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card').forEach(function(card) {
        card.classList.add('custom-shadow');
    });
});