/*=============== SHOW SCROLL UP ===============*/

const scrollButton = function() {
    const scrollingButton = document.getElementById("scroll-up");
    if (this.scrollY > 300) {
      scrollingButton.classList.add("active");
    } else {
      scrollingButton.classList.remove("active");
    }
  };
  window.addEventListener("scroll", scrollButton);
  

/*=============== NAVBAR TOGGLE ===============*/

function showSidebar(){
    const sidebar = document.querySelector('#sidebar-ul');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('#sidebar-ul');
    sidebar.style.display = 'none';
}

/*=============== NAVBAR SCROLLING ===============*/

/* Include this script at the end of your body or in your existing script file */
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navigation');
  let lastScrollY = window.scrollY;

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      // User is scrolling up
      navbar.classList.add('navbar-visible');
      navbar.classList.remove('navbar-hidden');
    } else {
      // User is scrolling down
      navbar.classList.add('navbar-hidden');
      navbar.classList.remove('navbar-visible');
    }
    lastScrollY = window.scrollY;
  };

  window.addEventListener('scroll', handleScroll);
});


/*================ Email JS ==================*/ 

function sendMail() {
  var name = document.getElementById("name").value;
  var company = document.getElementById("company-name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var message = document.getElementById("message").value;

  // Validation checks
  if (name === "" || email === "" || message === "") {
      alert("Please fill in all required fields.");
      return;
  }

  var params = {
      name: name,
      company: company,
      email: email,
      number: number,
      message: message
  };

  const serviceID = "service_auwcq3v";
  const templateID = "template_nvpzwp7";

  emailjs.send(serviceID, templateID, params)
      .then(res => {
          document.getElementById("name").value = "";
          document.getElementById("company-name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("number").value = "";
          document.getElementById("message").value = "";

          console.log(res);
          alert("Message sent successfully!");
      })
      .catch(err => console.log(err));
}

   
 /*================ Stastistics Number Counter ==================*/

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const clients = document.getElementById("clients-number");
const leads = document.getElementById("leads-number");
const deliverables = document.getElementById("deliverables-number");

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target === clients) {
        animateValue(clients, 0, 25, 1000);
      } else if (entry.target === leads) {
        animateValue(leads, 0, 4500, 1000);
      } else if (entry.target === deliverables) {
        animateValue(deliverables, 0, 700, 1000);
      }
      observer.unobserve(entry.target); // Stop observing once animation starts
    }
  });
};

const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.1 // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver(callback, options);

observer.observe(clients);
observer.observe(leads);
observer.observe(deliverables);



/*============ Designed & Developed by Quick-Binary Inc. ============*/