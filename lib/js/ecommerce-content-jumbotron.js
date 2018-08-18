Vue.component("ecommerce-content-jumbotron", {
	template: `
	<div class="container">
		<div class="row side_image">
			<div id="carouselExampleControls" class="col-lg-6 col-md-6 carousel slide" data-ride="carousel" data-interval="3000">
				<ol class="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
				</ol>
				<div class="carousel-inner col-lg-6">
					<div class="carousel-item active">
						<img class="d-block w-100" src="https://source.unsplash.com/N_Y88TWmGwA/1000x600" alt="First slide">
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="https://source.unsplash.com/Fzde_6ITjkw/1000x600" alt="Second slide">
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="https://source.unsplash.com/D4jRahaUaIc/1000x600" alt="Third slide">

					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="https://source.unsplash.com/UfRLtAHHaP8/1000x600" alt="Third slide">
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
			<div class="col-lg-6 col-md-6">
				<div class="row side_image">
					<div class="col-lg-6 col-md-12">
						<img src="https://source.unsplash.com/G4ZjuxOFD8Y/1000x600" class="img-fluid centered-and-cropped" alt="Responsive image">
					</div>
					<div class="col-lg-6 col-md-12">
						<button class="button" type="button" data-hover="Kamu, iya kamu" data-active="I'M ACTIVE">
							<span> Ada yang Gajian? </span>
						</button>
					</div>
				</div>
				<div class="row side_image">
					<div class="col-lg-6 col-md-12">
						<button class="button" type="button" data-hover="Mau Tahu?" data-active="I'M ACTIVE">
							<span>Paket Jalan + Makan ? </span>
						</button>
					</div>
					<div class="col-lg-6 col-md-12">
						<img src="https://source.unsplash.com/PMxT0XtQ--A/1000x600" class="img-fluid centered-and-cropped" alt="Responsive image">
					</div>

				</div>
			</div>

		</div>

	</div>
	`
});
