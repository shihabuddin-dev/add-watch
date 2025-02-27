// brand color  ring buttons functionality
const allRingButtons = document.querySelectorAll('.ring-button');
for (let ringButtons of allRingButtons) {
    ringButtons.addEventListener('click', function (event) {
        for (let ringBtn of allRingButtons) {
            ringBtn.classList.remove('border-purple-700');
            ringBtn.classList.add('border-gray-100');
        }
        event.target.classList.add('border-purple-700');
        event.target.classList.remove('border-gray-100');
        const color = event.target.id.replace('-color', '');
        const productImage = document.getElementById('product-image');
        productImage.src = '../images/' + color + '.png';
    })
}

// size button functionality 
function selectWristSize(size) {
    const sizes = ['S', 'M', 'L', 'XL'];
    for (let siz of sizes) {
        const button = document.getElementById('size-' + siz);
        console.log(button);
        if (size === siz) {
            button.classList.add('border-purple-700');
        }
        else {
            button.classList.remove('border-purple-700');
        }
    }
}