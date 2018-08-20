Vue.component("navbar", {
	template: `
	<nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color: #2bbcba;">
			<a class="navbar-brand" href="#">
				<img :src="logoUrl" height="30px">
			</a>

			<a v-if="loggedin">Welcome, {{username}}</a>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">

				<!-- nav bar category menu -->
				<navbar-category-menu :category-menu-data="navbarCategoryMenuData"></navbar-category-menu>

				<navbar-logout v-if="loggedin"></navbar-logout>

				<navbar-login-signup v-if="!loggedin" @signin="signin" @signup="signup"></navbar-login-signup>

				<!-- nav bar shopping cart -->
				<navbar-shopping-cart v-if="loggedin" @clear-cart="clearCart" :cart="cartitems"></navbar-shopping-cart>

				
				
				<form class="form-inline my-2 my-lg-0">
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text noborder" id="basic-addon1">
								<a style="-webkit-transform: rotate(-45deg); 
									-moz-transform: rotate(-45deg); 
									  -o-transform: rotate(-45deg);
										 transform: rotate(-45deg);
										 cursor: context-menu;">&#9906;</a>
							</span>
						</div>
						<input type="text" class="form-control noborder" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
					</div>

				</form>

			</div>
	</nav>

	`,
	data: function() {
		return {
			logoUrl: "./assets/img/AkhirBulan2.png",
			navbarCategoryMenuData: {
				name: "Mau ngapain hari ini?",
				categoryList: [
					{
						name: "Belanja!",
						link: "#"
					},
					{
						name: "Makan-Makan lah",
						link: "#"
					},
					{
						name: "Jalan-Jalan Dong !",
						link: "#"
					},
					{
						name: "Senang-Senang",
						link: "#"
					}
				]
			}
		};
	},
	methods: {
		clearCart: function() {
			this.$emit("clear-cart", []);
		},
		signin: function(credential) {
			this.$emit("signin", credential);
		},
		signup: function(credential) {
			this.$emit("signup", credential);
		}
	},
	props: ["cartitems", "loggedin", "username"]
});
