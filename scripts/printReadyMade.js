const printCards = () => {
    const block = document.getElementById("products-block");
    for (let i = 0; i < 12; i++) {
        const htmlStr =
            `<div class="product-card">
                <a href="../pages/ready_made_product_page.html">
                    <img src="../images/jpg/products/ready_made_kits.jpg" class="product-card__image" alt="product image">
                    <h4 class="product-card__name product-text">Top Flex</h4>
                    <p class="product-card__new-price product-text">12 980 ₽</p>
                    <p class="product-card__old-price product-text">11 033 ₽</p>
                </a>
                <img class="product-card__favorite-button" src="/images/svg/favorite.svg">
                <span class="product-card__new-product">New</span>
            </div>
            `
        const parser = new DOMParser();
        const document = parser.parseFromString(htmlStr, "text/html");
        block.append(document.body.firstChild);
    }
}

printCards();
