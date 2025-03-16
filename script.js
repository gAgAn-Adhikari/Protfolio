// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');
const contactForm = document.getElementById('contactForm');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // You would typically send this data to a server
    // For now, we'll just log it and show a success message
    console.log({ name, email, subject, message });
    
    // Show success message
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => group.style.display = 'none');
    
    const submitBtn = document.querySelector('.contact-form button');
    submitBtn.style.display = 'none';
    
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h3>Message Sent Successfully!</h3>
        <p>Thank you for reaching out, ${name}. I'll get back to you soon.</p>
    `;
    
    contactForm.appendChild(successMessage);
    
    // Reset form after 5 seconds
    setTimeout(() => {
        formGroups.forEach(group => group.style.display = 'block');
        submitBtn.style.display = 'block';
        successMessage.remove();
        contactForm.reset();
    }, 5000);
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.timeline-item, .skill-category, .about-content');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

// Run animation check on scroll
window.addEventListener('scroll', animateOnScroll);

// Run animation check on page load
window.addEventListener('load', animateOnScroll);

// Add CSS for the animations
const style = document.createElement('style');
style.textContent = `
    .timeline-item, .skill-category, .about-content {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .timeline-item.animate, .skill-category.animate, .about-content.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .timeline-item:nth-child(2) {
        transition-delay: 0.2s;
    }
    
    .timeline-item:nth-child(3) {
        transition-delay: 0.4s;
    }
    
    .skill-category:nth-child(2) {
        transition-delay: 0.2s;
    }
    
    .skill-category:nth-child(3) {
        transition-delay: 0.4s;
    }
    
    .success-message {
        text-align: center;
        padding: 30px;
        color: var(--success-color);
    }
    
    .success-message i {
        font-size: 3rem;
        margin-bottom: 15px;
    }
`;

document.head.appendChild(style);
