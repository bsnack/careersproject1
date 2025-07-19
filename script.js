let currentSection = 0;
const sections = ['intro', 'tip1', 'tip2', 'tip3', 'tip4', 'tip5'];

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.tip-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update current section index
    currentSection = sections.indexOf(sectionId);
    
    // Update active tab
    document.querySelectorAll('.tab')[currentSection].classList.add('active');
    
    // Update navigation
    updateNavigation();
    
    // Update progress bar
    updateProgressBar();
}

function nextSection() {
    if (currentSection < sections.length - 1) {
        currentSection++;
        showSection(sections[currentSection]);
    }
}

function previousSection() {
    if (currentSection > 0) {
        currentSection--;
        showSection(sections[currentSection]);
    }
}

function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentSection === 0;
    nextBtn.disabled = currentSection === sections.length - 1;
    
    if (currentSection === sections.length - 1) {
        nextBtn.textContent = 'You did it!';
    } else {
        nextBtn.textContent = 'Next →';
    }
}

function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    const progress = ((currentSection + 1) / sections.length) * 100;
    progressFill.style.width = progress + '%';
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        previousSection();
    } else if (e.key === 'ArrowRight') {
        nextSection();
    }
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateNavigation();
    updateProgressBar();
});

// Smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.journal-container');
    if (container) {
        container.style.scrollBehavior = 'smooth';
    }
});
