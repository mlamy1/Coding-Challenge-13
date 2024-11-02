// Task 2: Fetch Products from the API Using Fetch and Promises

fetch('https://www.course-api.com/javascript-store-products') //Used to get products from the API
    .then(response => response.json()) // Used to parse response to json.
    .then(data => displayProducts(data)) // Used to process data and to display products.
    .catch(error => {
        console.error('Error fetching products:', error); //If fetch is not successful, messages will display. 
        document.getElementById('productContainer').innerHTML = '<p>Failed to load products. Please try again later.</p>';
    });

// Task 3: Display Product Details Dynamically
function displayProducts(products) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Used to clear container

    products.forEach(product => { //Used to search through all products 
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        //Used to give each product its own elements (Image, name, company, price)
        productElement.innerHTML = `
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}"> 
            <h3>${product.fields.name}</h3>
            <p>${product.fields.company}</p>
            <p>$${product.fields.price / 100}</p>
        `;

        productContainer.appendChild(productElement); //Used to add product elements to the products container. 
    });
}

