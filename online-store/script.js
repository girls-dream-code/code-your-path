document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: 'Product 1',
            description: 'This is a great product.',
            price: '$10.00',
            image: 'https://images.pexels.com/photos/4544818/pexels-photo-4544818.jpeg?            auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            name: 'Product 2',
            description: 'This is another great product.',
            price: '$15.00',
            image: 'https://images.pexels.com/photos/13442882/pexels-photo-13442882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            name: 'Product 3',
            description: 'You will love this product.',
            price: '$20.00',
            image: 'https://images.pexels.com/photos/17772627/pexels-photo-17772627/free-photo-of-flowers-and-necklace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
    ];

    const productList = document.querySelector('.product-list');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image;

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        const productButton = document.createElement('button');
        productButton.textContent = 'Add to Cart';

        productElement.appendChild(productImage);
        productElement.appendChild(productName);
        productElement.appendChild(productDescription);
        productElement.appendChild(productPrice);
        productElement.appendChild(productButton);

        productList.appendChild(productElement);
    });
});