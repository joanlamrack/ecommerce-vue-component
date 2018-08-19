Vue.component("ecommerce-content-productlist", {
	template: `
	<div class="container">
		<div v-for="productCats in frontpageitems">
			<div class="produkTitle">
				<a>{{ productCats.name }}</a>
			</div>
			<div class="row sellItems">

				<div class="items card col-lg-2 col-md-4" v-for="(item, index) in productCats.itemlist">

					<img class="card-img-top centered-and-cropped" v-bind:src="item.imgurl" v-bind:alt="item.itemName">
					<div class="card-body">
						<p class="card-text">
							<a class="itemName">{{ item.name }}</a>
							<br>
							<a class="store">{{ item.store }}</a>
							<br>
							<a class="price">
								{{ priceFormater(item.price) }}
							</a>
							<br>
							<a class="availblity">{{ item.availibility }}</a>

						</p>

					</div>
					<button type="button" class="btn btn-primary" v-on:click="addToCart(productCats.name,index)" style="background-color: #2bbcba; border:none">+</button>
				</div>
			</div>
		</div>
	</div>
	`,
	methods: {
		priceFormater: function(price) {
			if (typeof price === "number") {
				price = Array.from(String(price));
				let frontNumber = price.length % 3;
				let oi = price.splice(0, frontNumber).join("");
				return `Rp. ${frontNumber ? oi + "." : ""}${this.priceFormater(price)}`;
			} else {
				return `${price.splice(0, 3).join("")}.${
					price.length > 3
						? this.priceFormater(price) + "."
						: price.splice(0, 3).join("") + ",--"
				}`;
			}
		},
		addToCart: function(productName, index) {
			console.log("productlist emitted", arguments);
			this.$emit("item-obj", [productName, index]);
		}
	},
	props: ["frontpageitems"]
});
