Vue.component("navbar-shopping-cart", {
	template: `
	<div>
		<div class="dropdown shoppingcart">
			<button type="button" class="btn dropdown-toggle shoppingcart" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				&#x1F6D2;
				<span class="badge badge-danger">{{cart.length}}</span>
			</button>
			<div class="dropdown-menu cartViewer" aria-labelledby="dropdownMenuButton">
				<a class="dropdown-item">Total: {{cart.length}} Barang</a>
				<div class="dropdown-divider"></div>
				<ul class="nav flex-column">
					<div v-if="cart.length > 0">
						<li class="nav-item" v-for="cartA in cart.slice(0,5)">
							<a class="nav-link active" href="#">{{cartA.item.name}}</a>
						</li>
					</div>
					<li class="nav-item" v-else>
						<a class="nav-link active" href="#">Kamu Belum Belanja!</a>
					</li>
				</ul>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" data-toggle="modal" data-target="#CartModal">Lihat Keranjang</a>
			</div>
		</div>
		<div class="modal fade" id="CartModal" tabindex="1" role="dialog" aria-labelledby="CartModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content" style="border: none">
					<div class="modal-header">
						<h5 class="modal-title" id="CartModalLabel">Daftar Belanja</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div v-if="cart.length > 0">
							<table class="table">
								<thead>
									<tr>
										<th scope="col">Nama Item</th>
										<th scope="col">Jumlah</th>
										<th scope="col">Total</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="cartA in cart">
										<td>{{cartA.item.name}}</td>
										<td>{{cartA.jumlah}}</td>
										<td>{{ priceFormater(cartA.item.price * cartA.jumlah) }}</td>
									</tr>
									<tr>
										<td></td>
										<td>Total : </td>
										<td>{{ priceFormater(getTotalInCart(cart)) }}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="nav-item" v-else>
							<a class="nav-link active" href="#">Kamu Belum Belanja!</a>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
						<button v-if="cart.length > 0" @click="clearCart" data-dismiss="modal" type="button" class="btn btn-primary" onclick="swal(
							'Beres!',
							'Jangan Lupa bayar yah!',
							'success'
						)" style="background-color: #2bbcba; border: none">Bayar</button>
						<button button v-else data-dismiss="modal" type="button" class="btn btn-primary" onclick="swal(
								'Eh?',
								'Kamu Belum Belanja loh!',
								'question'
							)" style="background-color: #2bbcba; border: none"> Bayar</button>
					</div>
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
		getTotalInCart: function getTotalPriceInCart(cart) {
			return cart.map(x => x.item.price * x.jumlah).reduce((a, b) => {
				return a + b;
			}, 0);
		},
		clearCart:function(){
			this.$emit("clear-cart",[]);
		}
	},
	props: ["cart"]
});
