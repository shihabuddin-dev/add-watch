// brand color  ring buttons functionality
let productImageBase = '../images/';
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
        productImage.src = productImageBase + color + '.png';
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

// quantity functionality increment and decrements buttons + -
const quantityBtn = document.querySelectorAll('.quantity-button');
for (let btn of quantityBtn) {
    btn.addEventListener('click', function (event) {
        const incDecBtn = event.target.innerText === '+' ? 1 : -1;
        const quantity = parseInt(document.getElementById('quantity').innerText);
        const newQuantity = Math.max(0, quantity + incDecBtn);
        document.getElementById('quantity').innerText = newQuantity;
    })
}

// main functionality checkout 
let cartCount = 0;
let cartItems = [];
document.getElementById('add-to-cart').addEventListener('click', function () {
    const quantity = parseInt(document.getElementById('quantity').innerText);
    if (quantity > 0) {
        document.getElementById('checkout-container').classList.remove('hidden');
        cartCount = cartCount + quantity;
        document.getElementById('cart-count').innerText = cartCount;
        const selectedColorBtn = document.querySelector('button.border-purple-700.w-6');

        const selectedColor = selectedColorBtn.id.split('-')[0];
        const selectedSizeBtn = document.querySelector('button.border-purple-700:not(.w-6)')

        const selectedSize = selectedSizeBtn.innerText.split(' ')[0];
        const selectedPrice = selectedSizeBtn.innerText.split(' ')[1].split('$')[1];


        cartItems.push({
            Image: selectedColor + '.png',
            title: 'Classy Modern Smart Watch',
            color: selectedColor,
            size: selectedSize,
            quantity: quantity,
            price: quantity * parseInt(selectedPrice)
        })
        console.log(cartItems);

    } else {
        alert('Please select a quantity')
    }

})


document.getElementById('checkout-btn').addEventListener('click', function () {
    const cartModal = document.getElementById('cart-modal');
    const cartContainer = document.getElementById('cart-items');

    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const row = document.createElement('tr');
        row.classList.add('border-b');
        row.innerHTML = `
       <td>
    <div class="flex items-center space-x-2 py-2">
      <img class="h-10 w-10 object-cover rounded-md" src="${productImageBase}${item.Image}" alt="">
      <span class="font-semibold">${item.title}</span>
    </div>
  </td>
  <td class="py-2 px-4"> ${item.color}</td>
  <td class="py-2 px-4"> ${item.size}</td>
  <td class="py-2 px-4"> ${item.quantity}</td>
  <td class="py-2 px-4">$${item.price}</td>

        `;
        cartContainer.appendChild(row)

    }
    cartModal.classList.remove('hidden');
})

document.getElementById('continue-shopping').addEventListener('click', function () {
    document.getElementById('cart-modal').classList.add('hidden')
})
document.getElementById('checkout').addEventListener('click', function () {
    alert('Your Order is Progressing....')
})