const menuItemsContainer = document.getElementById('menuItems');
const menuItems = [
    {
        "title": "Cheese Burger",
        "price": "$5.99/-",
        "image": "https://thesamikhsya.com/wp-content/uploads/2019/08/burger-king-original.jpg"
    },
    {
        "title": "cheese Pizza",
        "price": "$8.99/-",
        "image": "https://img.freepik.com/foto-gratis/deliciosa-pizza-interior_23-2150873912.jpg"
    },
    {
        "title": "Pasta",
        "price": "$9.99/-",
        "image": "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg"
    },
    {
        "title": "Fried Chicken",
        "price": "$7.99/-",
        "image": "https://www.andy-cooks.com/cdn/shop/articles/20230826032636-andy-20cooks-20-20korean-20fried-20chicken.jpg?v=1693088250"
    },
    {
        "title": "3 flavour smoothie",
        "price": "$5.99/-",
        "image": "https://facts.net/wp-content/uploads/2023/11/10-burger-king-smoothies-nutrition-facts-1700626223.jpg"
    },
    {
        "title": "cupcake",
        "price": "$2.99/-",
        "image": "https://www.browneyedbaker.com/wp-content/uploads/2024/01/Red-velvet-cupcakes-10-1200.jpg"
    }
];

menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;
    menuItem.appendChild(image);

    const info = document.createElement('div');
    info.classList.add('menu-item-info');

    const title = document.createElement('h3');
    title.classList.add('menu-item-title');
    title.textContent = item.title;
    info.appendChild(title);

    const price = document.createElement('p');
    price.classList.add('menu-item-price');
    price.textContent = item.price;
    info.appendChild(price);

    const addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add('add-to-cart-btn');
    addToCartBtn.textContent = 'Add to Cart';
    info.appendChild(addToCartBtn);

    menuItem.appendChild(info);
    menuItemsContainer.appendChild(menuItem);
});

// You can add more JavaScript code here for functionalities like adding to cart, etc.
