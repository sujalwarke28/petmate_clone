// Show modal on every visit and refresh
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('popup-modal');
    const closeBtn = document.getElementById('close-modal');
    const noThanksBtn = document.getElementById('no-thanks');
    const signupForm = document.getElementById('signup-form');
  
    // Always show modal on load
    modal.style.display = 'flex';
  
    // Close modal on 'X' or 'NO, THANKS'
    closeBtn.onclick = noThanksBtn.onclick = function() {
      modal.style.display = 'none';
    };
  
    // Prevent form submission from closing modal for demo
    signupForm.onsubmit = function(e) {
      e.preventDefault();
      // Optionally: handle signup logic here
      modal.style.display = 'none';
      alert('Thank you for signing up!');
    };
  });
  
  