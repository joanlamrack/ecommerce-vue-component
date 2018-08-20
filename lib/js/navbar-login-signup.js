Vue.component("navbar-login-signup", {
	template: `
		
	<div>
		<div class="dropdown">
			<button type="button" class="btn dropdown-toggle shoppingcart" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				&#x1f510;
			</button>
			<div class="dropdown-menu"  v-if="signin" style="width:300px; padding:10px;" aria-labelledby="dropdownMenuButton">
				Masuk
				<form>
					<div class="form-group">
						<label for="exampleInputEmail1">Alamat Surel</label>
						<input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Masukkan Alamat Surel">
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Kata Sandi</label>
						<input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Kata Sandi">
					</div>
					<a @click="togglesignuporsignin">Ga punya akun? Daftar disini!</a>
					<button type="button" class="btn btn-primary" style="background-color: #2bbcba; border:none; width:100%;">Masuk</button>
				</form>
			</div>
			<div class="dropdown-menu" v-else  style="width:300px; padding:10px;" aria-labelledby="dropdownMenuButton">
				Daftar
				<form>
					<div class="form-group">
						<label for="exampleInputPassword1">Nama Kamu</label>
						<input type="password" v-model="name" class="form-control" id="exampleInputPassword1" placeholder="Nama Kamu">
					</div>
					<div class="form-group">
						<label for="exampleInputEmail1">Alamat Surel</label>
						<input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Alamat Surel">
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Kata Sandi</label>
						<input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Kata Sandi">
					</div>
					<a @click="togglesignuporsignin">aku punya akun! Masuk disini</a>
					<button type="button" class="btn btn-primary" style="background-color: #2bbcba; border:none; width:100%;">Daftar</button>
				</form>
			</div>
		</div>
	</div>
	`,
	data: function() {
		return {
			signin: true,
			email: "",
			nama: "",
			password: ""
		};
	},
	methods: {
		togglesignuporsignin: function() {
			this.signin = !this.signin;
			this.resetFields();
		},
		signin: function() {
			this.$emit("signin", { email: this.email, password: this.password });
		},
		signup: function() {
			this.$emit("signup", {
				email: this.email,
				password: this.password,
				name: this.name
			});
		},
		resetFields() {
			this.email = this.name = this.password = "";
		}
	}
});
