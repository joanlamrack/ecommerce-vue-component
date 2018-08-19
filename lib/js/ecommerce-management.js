Vue.component("ecommerce-management", {
	template: `
		<div>
			<navbar  @clear-cart="clearCart" :cartitems="cart"></navbar>
			
			<ecommerce-content :frontpageitems="frontPageItems"  @item-obj="addItemToCart" ></ecommerce-content>

			<ecommerce-footer :footerLicense="footerLicense"></ecommerce-footer>
		</div>
	`,
	data: function() {
		return {
			footerLicense: "2018 &#169; PT. Generasi SuperMie",
			cart: [],
			frontPageItems: [
				{
					name: "Produk Baru",
					itemlist: [
						{
							name: "Topi",
							store: "The Hats Store",
							price: 50000,
							stock: 10,
							imgurl: "https://source.unsplash.com/vU2MmvDCmUo/1000x600"
						},
						{
							name: "Jaket",
							store: "The Jacket Store",
							price: 50000,
							stock: 10,
							imgurl: "https://source.unsplash.com/1000x600/?men-wearing-jacket"
						},
						{
							name: "Sepatu Hak Tinggi",
							store: "The Heels Store",
							price: 300000,
							stock: 10,
							imgurl:
								"https://source.unsplash.com/1000x600/?women-high-heels-sitting-down"
						},
						{
							name: "Perhiasan",
							store: "The Jewellry Store",
							price: 300000000,
							stock: 10,
							imgurl: "https://source.unsplash.com/1000x600/?jewellery"
						},
						{
							name: "Laptop",
							store: "The Laptop Store",
							price: 3000000000,
							stock: 10,
							imgurl: "https://source.unsplash.com/1000x600/?laptop"
						},
						{
							name: "Hats",
							store: "The Hats Store",
							price: 50000,
							stock: 10,
							imgurl: "https://source.unsplash.com/1000x600/?hat,hats"
						},
						{
							name: "Kacamata",
							store: "The Kacamata Store",
							price: 50000,
							stock: 10,
							imgurl: "https://source.unsplash.com/1000x600/?glasses"
						},
						{
							name: "Lilin",
							store: "The candle Store",
							price: 50000,
							stock: 10,
							imgurl: "https://source.unsplash.com/1000x600/?candle"
						}
					]
				},
				{
					name: "Paket Liburan",
					itemlist: [
						{
							name: "Bali",
							store: "Bali United",
							price: 10000000,
							stock: 10,
							imgurl: "https://source.unsplash.com/1000x600/?bali"
						},
						{
							name: "Paris",
							store: "Oh Paris, I'm love",
							price: 15000000,
							stock: 5,
							imgurl: "https://source.unsplash.com/1000x600/?paris"
						},
						{
							name: "Lost in Madrid",
							store: "Le Madrid",
							price: 30000000,
							stock: 2,
							imgurl: "https://source.unsplash.com/1000x600/?madrid"
						},
						{
							name: "Italy : Eat, love, Pray",
							store: "Bene la Pierre",
							price: 5000000,
							stock: 2,
							imgurl: "https://source.unsplash.com/1000x600/?italy"
						},
						{
							name: "Flamenco of Spain",
							store: "La bonita",
							price: 40000000,
							stock: 2,
							imgurl: "https://source.unsplash.com/1000x600/?spain"
						},
						{
							name: "Liburan ke Pantai",
							store: "Seribu pulau",
							price: 1000000,
							stock: 2,
							imgurl: "https://source.unsplash.com/1000x600/?beach"
						},
						{
							name: "Naik Naik Gunung",
							store: "Hikers Merbabu",
							price: 1200000,
							stock: 2,
							imgurl: "https://source.unsplash.com/1000x600/?mountain"
						}
					]
				}
			]
		};
	},
	mounted() {
		axios
			.get(
				"https://dry-plateau-25368.herokuapp.com/category"
			)
			.then(response => {
				console.log(response.data);
				this.frontPageItems = response.data;
			});
	},
	methods: {
		addItemToCart: function([categoryName, itemId]) {
			for (let category of this.frontPageItems) {
				if (category.name === categoryName && category.itemlist[itemId]) {
					if (category.itemlist[itemId].stock > 0) {
						category.itemlist[itemId].stock--;
						if (
							this.checkIfItemExistOnCart(category.itemlist[itemId]) === false
						) {
							this.cart.push({
								item: category.itemlist[itemId],
								jumlah: 1
							});
						} else {
							this.cart[this.checkIfItemExistOnCart(category.itemlist[itemId])]
								.jumlah++;
						}
					}
				}
			}
		},
		checkIfItemExistOnCart: function(item) {
			for (let i = 0; i < this.cart.length; i++) {
				if (this.cart[i].item.name === item.name) {
					return i;
				}
			}
			return false;
		},
		getTotalInCart: function() {
			return function getTotalPriceInCart() {
				return this.cart.map(x => x.item.price * x.jumlah).reduce((a, b) => {
					return a + b;
				}, 0);
			};
		},
		clearCart: function() {
			this.cart = [];
		}
	}
});
