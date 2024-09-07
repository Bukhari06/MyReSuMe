
document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById("typewriter");
    const textContent = text.innerHTML;
    text.innerHTML = ""; // Clear the text
    let index = 0;

    function typeWriter() {
        if (index < textContent.length) {
            text.innerHTML += textContent.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Typing speed (in milliseconds)
        } else {
            // Optional: Add a blinking caret effect once typing is done
            text.style.borderRight = 'none'; // Remove caret if desired
        }
    }

    setTimeout(typeWriter, 1000); // Start typing after 1 second delay (sync with fade-in)
});

var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});



