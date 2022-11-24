const printCards = () => {
    const block = document.getElementById("products-block");
    const favArr = ["/images/jpg/products/product-1.jpg",
        "/images/jpg/products/product-2.jpg",
        "/images/jpg/products/product-3.jpg",
        "/images/jpg/products/product-4.jpg",
        "/images/jpg/products/product-5.jpg",
        "/images/jpg/products/product-6.jpg",
        "/images/jpg/products/product-2.jpg",
        "/images/jpg/products/product-1.jpg",
        "/images/jpg/products/product-1.jpg",
        "/images/jpg/products/product-5.jpg",
        "/images/jpg/products/product-3.jpg",
        "/images/jpg/products/product-5.jpg",
    ];

    favArr.forEach(function (i) {
        const htmlStr =
            `<div class="product-card">
                <a href="../pages/product_page.html">
                <img src=` + i + ` class="product-card__image" alt="product image">
                <h4 class="product-card__name product-text">Top Flex</h4>
                <p class="product-card__description product-text">Lorem ipsum dolor sit amet, consectetur</p>
                <p class="product-card__new-price product-text">12 980 ₽</p>
                <p class="product-card__old-price product-text">11 033 ₽</p>
                </a>
                <img class="product-card__favorite-button" src="/images/svg/user_page/favorite_filled.svg">
                <span class="product-card__new-product">New</span>
            </div>
            `
        const parser = new DOMParser();
        const document = parser.parseFromString(htmlStr, "text/html");
        block.append(document.body.firstChild);
    });
}

printCards();
