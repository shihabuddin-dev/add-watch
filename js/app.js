// brand color  ring buttons functionality

const allRingButtons = document.querySelectorAll('.ring-button');

for (let ringButtons of allRingButtons) {
    ringButtons.addEventListener('click', function (event) {
        const color = event.target.id.replace('-color', '');
        for (let ringBtn of allRingButtons) {
            ringBtn.classList.remove('border-purple-700');
            ringBtn.classList.add('border-gray-100');
        }
        event.target.classList.add('border-purple-700');
        event.target.classList.remove('border-gray-100');
        const productImage = document.getElementById('product-image');
        productImage.src = '../image/' + color + '.png';
    })
}