// script.js

// Gallery Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImages = document.querySelectorAll('.gallery img');

if (galleryImages) 
  {
  galleryImages.forEach(img => 
    {
    img.addEventListener('click', () => 
      {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });
}

if (lightbox) 
  {
  lightbox.addEventListener('click', () => 
    {
    lightbox.style.display = 'none';
  });
}

// Scroll to top button (optional enhancement)
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑ Top';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.border = 'none';
scrollBtn.style.backgroundColor = '#2e7d32';
scrollBtn.style.color = 'white';
scrollBtn.style.borderRadius = '5px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => 
  {
  if (window.scrollY > 300) scrollBtn.style.display = 'block';
  else scrollBtn.style.display = 'none';
});

scrollBtn.addEventListener('click', () => 
  {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Validation for email and South African 10‑digit cell number

document.getElementById("enquiryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const cell = document.getElementById("cell").value.trim();
    const response = document.getElementById("responseMessage");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cellPattern = /^[0-9]{10}$/; // SA 10‑digit number

    if (!emailPattern.test(email)) {
        response.style.display = "block";
        response.style.color = "red";
        response.textContent = "Please enter a valid email address.";
        return;
    }

    if (!cellPattern.test(cell)) {
        response.style.display = "block";
        response.style.color = "red";
        response.textContent = "Cell number must be 10 digits (numbers only).";
        return;
    }

    response.style.display = "block";
    response.style.color = "green";
    response.textContent = "Your enquiry has been submitted successfully!";

    document.getElementById("enquiryForm").reset();
});

