const images = document.querySelectorAll('.gallery-img');
let currentIndex = 0;


images[currentIndex].classList.add('show');


function showNextImage() {
    
    images[currentIndex].classList.remove('show');
    
    
    currentIndex = (currentIndex + 1) % images.length;
    
    
    images[currentIndex].classList.add('show');
}

setInterval(showNextImage, 2000);

document.getElementById('an-link').addEventListener('click', function(event) {
    event.preventDefault();

    
    const hiddenMessage = document.getElementById('hidden-message');
    hiddenMessage.classList.toggle('visible');

    
    if (hiddenMessage.classList.contains('visible')) {
        const message = "An diesem besonderen Tag möchte ich dir sagen. Du bist jemand, der mein Herz immer ein bisschen schneller schlagen lässt. Ich bin so froh, dich in meinem Leben zu haben, und hoffe, dass dieser Tag dir genauso viel Freude bringt wie du mir immer bringst.";
        const typedMessage = document.getElementById('typed-message');

        
        typedMessage.textContent = '';

       
        let i = 0;
        function typeWriter() {
            if (i < message.length) {
                typedMessage.textContent += message.charAt(i);
                i++;
                setTimeout(typeWriter, 50); 
            }
        }
        typeWriter();
    }
});


