
		const product = document.getElementsByClassName("add_cart");
		console.log(product);
		const shopCart = document.querySelector('.shopcard__dropdown > ul');
	
		let addToCart = function(){
			const productTitle = 
			this.closest('.body_product').firstElementChild.textContent;
			const productPrice = 
			this.closest('.productPrice .oprice').children[2].firstElementChild.innerText;
			const productImageSource = 
			this.closest('.product').children[0].children[1].src;

			console.log(productTitle);
			
			
			
		
	
			const positon = "afterbegin";
			const cartTemplate = `<div class="bag__img">
											<h3>${productTitle}</h3>
											<a href="?search=#">
												<img style="width: 100%"; height="150px" src="${productImageSource}" alt="">
											</a>
										</div>
										<div class="bag__info">
											<p class="info__title"><a href="?"></a></p>
											<div class="info__price">
												<span style="font-size: 30px">${productPrice}</span>
												<span class="currency">$</span>
                                    			<span class="oprice">36</span>
												<span>'+price[0].innertext+'</span>
											</div>
											<div class="trash">
												<a href="?search=#"><i class="far fa-trash-alt"></i></a>
											</div>
										</div>'`;
		shopCart.insertAdjacentHTML(positon, cartTemplate);

		total_price();
	
		
		// Удаление товара
		delete_product();

		//получить общее количество суммы товаров в корзине
		total_price();

		//получить количество товаров в корзине
		count_product();

		fetch("http://urok65/requests", {
			method: "POST",
			headers: {
				"Content-type": "Application/json"
			},
			body: JSON.stringify({
				"ttl": title[0].innerText,
				"image": image[0].src,
				"price": price[0].innerText
			})

		});

	};

	// for (var i = 0; i < class_name.length; i++) {
	// 	class_name[i].addEventListener('click', myFunction, false);
	// 	// addEventListener - добовляем событие клика
	// 	// ('click', myFunction, false);
	// 	//  тип события
	// 	//  Что должно выполнятся
	// 	// Обработчик
	// }

	document.querySelector(".main__list").addEventListener("click", event => {

		if(event.target.parentNode.classList.contains("list__item")) return false;

		let ttl = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
		let price = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
		let img = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".item__img img");
		
		myFunction(ttl, price, img);

	});

	
	
	function delete_product(){
		let click_trash = document.querySelectorAll(".trash");

		for (var i = 0; i < click_trash.length; i++) {
			click_trash[i].addEventListener('click', del_func, false);
		}

		function del_func(evt){
			evt.preventDefault();
			this.parentNode.parentNode.remove();

			total_price();
			count_product();
		}
	}


	function total_price() {
		let count_price = document.querySelectorAll(".info__price .oprice");

		let total_price = 0;

		for (var i = 0; i < count_price.length; i++) {
			total_price = total_price + (+count_price[i].textContent);
		}

		document.getElementsByClassName('total_cart')[0].innerHTML = `$ ${total_price}`;
		document.querySelectorAll('.shopcard__total span')[0].innerHTML = `$ ${total_price}`;
		
	}

	function count_product(){
		let count_ptoduct = document.getElementsByClassName("bag__item").length;
		document.getElementsByClassName('cart_count')[0].innerHTML = count_ptoduct;
	}

