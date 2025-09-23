
let slideIndex = 0;
let totalSlides = 6;

    function sendMail(){
            var templateParams={
                name: document.querySelector("#name").value,
                phone: document.querySelector("#phone").value,
                email: document.querySelector("#email").value,
                subject: document.querySelector("#subject").value,
                message: document.querySelector("#message").value,
            };

            emailjs.send("service_dw0q0tj", "template_yl5iusu", templateParams).then(
  (response) => {
    alert("Message sent successfully")
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    alert("Service Unavailable please try agail later")
    console.log('FAILED...', error);
  },
);

        }

        // Show the slides
        function showSlides() {
            let slides = document.getElementsByClassName("slides");
            let dots = document.getElementsByClassName("dot");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }
            slides[slideIndex - 1].style.display = "block";

            // Update the dots
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[slideIndex - 1].className += " active";

            setTimeout(showSlides, 45000); // Change image every 45 seconds
        }

        // Change slide manually
        function changeSlide(n) {
            slideIndex += n;
            let slides = document.getElementsByClassName("slides");
            let dots = document.getElementsByClassName("dot");
            if (slideIndex > slides.length) { slideIndex = 1; }
            if (slideIndex < 1) { slideIndex = slides.length; }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";

            // Update the dots
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[slideIndex - 1].className += " active";
        }

        // Initialize dots dynamically
        function initDots() {
            let dotsContainer = document.getElementById("dots");
            for (let i = 0; i < totalSlides; i++) {
                let dot = document.createElement("span");
                dot.classList.add("dot");
                dotsContainer.appendChild(dot);
            }
        }

        initDots(); // Initialize the dots
        showSlides(); // Initialize slideshow

        // Add active class to the current page link
        const currentPage = window.location.pathname.split("/").pop(); // Get the current page name

        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            if (link.href.includes(currentPage)) {
                link.classList.add('active'); // Add active class to the current page
            }
        });



    