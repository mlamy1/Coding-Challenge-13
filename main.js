// Task 2: Fetch Products from the API Using Fetch and Promises

fetch('https://www.course-api.com/javascript-store-products') //Used to get products from the API
    .then(response => response.json()) // Used to parse response to json.
    .then(data => displayProducts(data)) // Used to process data and to display products.
    .catch(error => {
        console.error('Error fetching products:', error); //If fetch is not successful, messages will display. 
        document.getElementById('productContainer').innerHTML = '<p>Failed to load products. Please try again later.</p>';
    });

    