const products = document.getElementsByClassName("add_cart");
console.log(products);

const addToCart = function () {
	const productTitle = this.closest(".body_product").firstElementChild.textContent;
	const productImage = this.closest(".product").firstElementChild.children[1].scr;
	const productPrice = this.closest(."body_product").children[2].firstElementChild.innerText;
	
	
}
