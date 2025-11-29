import './style.css'

// --- TU JAVASCRIPT REAL ---
const menu = document.getElementById("mobileMenu");
const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");

openBtn.addEventListener("click", () => {
  menu.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("translate-x-full");
});


document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const content = item.querySelector(".accordion-content");
    const icon = item.querySelector(".accordion-icon");
    const question = item.querySelector(".accordion-question");

    // Cerrar los demás
    document.querySelectorAll(".accordion-item").forEach(other => {
      if (other !== item) {
        other.querySelector(".accordion-content").classList.add("hidden");
        other.querySelector(".accordion-icon").textContent = "+";
        other.querySelector(".accordion-question").classList.remove("font-bold", "text-gray-800");
        other.querySelector(".accordion-question").classList.add("text-gray-600");
      }
    });

    // Toggle del actual
    const isOpen = !content.classList.contains("hidden");

    if (isOpen) {
      content.classList.add("hidden");
      icon.textContent = "+";
      question.classList.remove("font-bold", "text-gray-800");
      question.classList.add("text-gray-600");
    } else {
      content.classList.remove("hidden");
      icon.textContent = "-";
      question.classList.remove("text-gray-600");
      question.classList.add("font-bold", "text-gray-800");
    }
  });
});

  document.addEventListener("DOMContentLoaded", () => {
  const devTab = document.getElementById("devTab");
  const financeTab = document.getElementById("financeTab");

  const devContent = document.getElementById("devContent");
  const financeContent = document.getElementById("financeContent");

  devTab.addEventListener("click", () => {
    devTab.classList.add("bg-gray-800", "text-gray-100");
    financeTab.classList.remove("bg-gray-800", "text-gray-100");

    devContent.classList.remove("hidden");
    financeContent.classList.add("hidden");
  });

  financeTab.addEventListener("click", () => {
    financeTab.classList.add("bg-gray-800", "text-gray-100");
    devTab.classList.remove("bg-gray-800", "text-gray-100");

    financeContent.classList.remove("hidden");
    devContent.classList.add("hidden");
  });
});


  document.getElementById("sendBtn").addEventListener("click", () => {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const details = document.getElementById("details").value;
    const budget = document.getElementById("budget").value;
    const timeline = document.getElementById("timeline").value;

    const phoneNumber = "+50686290791"; // <-- TU NÚMERO DE WHATSAPP AQUÍ

    const message = `
New Project Inquiry:
--------------------
Name: ${name}
Email: ${email}
Budget: ${budget}
Timeline: ${timeline}

Project Details:
${details}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank"); 
  });

