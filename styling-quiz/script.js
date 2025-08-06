document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const question = document.querySelector('select[name="q1"]').value;

    let resultImage = document.getElementById('resultImage');
    let resultLink = document.getElementById('resultLink');

    // Show different images based on answers
    if (question === 'vintage') {
        resultImage.src = 'https://images.pexels.com/photos/8916600/pexels-photo-8916600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
        resultLink.href = 'https://www.google.com';
    } else if (question === 'casual') {
        resultImage.src = 'https://images.pexels.com/photos/3527572/pexels-photo-3527572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
        resultLink.href = 'www.example.com';
    } else if (question === 'formal') {
        resultImage.src = 'https://images.pexels.com/photos/15893780/pexels-photo-15893780/free-photo-of-various-dresses-hanging-on-coathangers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
        resultLink.href = 'www.example.com';
    } else {
        resultImage.src = 'https://areal.me/cover-images/aesthetic-quiz.png';
    }

    // Show the result section
    //document.getElementById('result-section').classList.remove('hidden');
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}