<script setup>
import { onMounted } from "vue";
import AOS from "aos";
onMounted(() => {
	AOS.init({ duration: 800 });
});
</script>

<template>
	<div>
		<section class="banner">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 imgDiv order-lg-2" data-aos="fade-left">
						<div class="bannerImg text-center text-lg-end">
							<img src="../assets/img/bg1.svg" />
						</div>
					</div>

					<div class="col-lg-6 order-lg-1" data-aos="fade-right">
						<div class="pb-2">
							<h1 class="mb-4">Upload.<br />Genereer. Bespaar.</h1>
							<p class="sub">Bespaar tijd met een AI tool gebouwd <br />voor docenten.</p>
							<a class="btn btn-primary" href="">Plan enn Demo</a>
						</div>
						<div class="row minusLeft">
							<div class="col">
								<div class="d-flex">
									<img src="../assets/img/Nakijken.svg" width="55" class="me-2" />
									<p>Nakijken &<br />Feedback geven</p>
								</div>
							</div>
							<div class="col">
								<div class="d-flex">
									<img src="../assets/img/Casussen.svg" width="55" class="me-2" />
									<p>Casussen <br />ontwikkelen</p>
								</div>
							</div>
							<div class="col">
								<div class="d-flex">
									<img src="../assets/img/Oefentoetsen.svg" width="55" class="me-2" />
									<p>Oefentoetsen en <br />tentamenvragen</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="geloven">
			<div class="divider"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-6" data-aos="fade-right">
						<h2>Wij geloven in technologie & innovatie voor het onderwijs!</h2>
					</div>
					<div class="col-md-6" data-aos="fade-left">
						<p>Nieuwe technologieën hebben een steeds grotere impact op het onderwijs. Wij zijn er om de nieuwe technologieën toegankelijk te maken voor docenten en studenten. Daarmee geloven wij in beter onderwijs.</p>
					</div>
				</div>
			</div>
		</section>

		<section class="watWij" id="product">
			<div class="container">
				<div data-aos="zoom-in">
					<h2>Wat wij doen</h2>
					<p>Wij zetten AI in om een docent te ondersteunen bij het ontwikkelen van oefenvragen, casussen, nakijken, feedback geven en het bijhouden van resultaten van studenten.</p>
					<button class="btn btn-outline-primary">Plan enn Demo</button>
				</div>
				<div class="row text-center text-md-start">
					<div class="col-md-6 col-lg-3">
						<div class="watItem" data-aos="fade-up">
							<img src="../assets/img/Wat1.webp" />
							<h3>Upload <br />lesmateriaal</h3>
							<p>Upload het lesmateriaal voor jouw vak en maak hiermee een leeromgeving. Je kan PowerPoints, PDFs, beoordelingsformulieren, oude toetsen en andere tekstbestanden uploaden om de leeromgeving van jouw vak te maken.</p>
						</div>
					</div>
					<div class="col-md-6 col-lg-3">
						<div class="watItem" data-aos="fade-up">
							<img src="../assets/img/Wat2.webp" />
							<h3>Geautomatiseerde <br />digitale leeromgeving</h3>
							<p>Na het uploaden van het leermateriaal maken wij in 10 min een digitale leeromgeving. Pas hierin aan wat aangepast moet worden en publiceer de digitale leeromgeving met oefenmateriaal naar studenten.</p>
						</div>
					</div>
					<div class="col-md-6 col-lg-3">
						<div class="watItem" data-aos="fade-up">
							<img src="../assets/img/Wat3.webp" />
							<h3>Maak sneller content <br />voor student</h3>
							<p>Genereer geautomatiseerd oefencontent voor studenten. Studenten kunnen oefentoetsen vinden die passen bij hun leerdoelen en gepersonaliseerd op hun leerproces.</p>
						</div>
					</div>
					<div class="col-md-6 col-lg-3">
						<div class="watItem" data-aos="fade-up">
							<img src="../assets/img/Wat4.webp" />
							<h3>Geef feedback in <br />een handomdraai</h3>
							<p>Laat de nakijktool de tussentijdse formatieve opdrachten nakijken en studenten voorzien met feedback op basis van de leerdoelen en een beoordelingsformulier.</p>
						</div>
					</div>
				</div>
				<div class="text-center mb-5 mt-4" data-aos="zoom-in">
					<button class="btn btn-outline-primary exLong">Leer meer over ons product</button>
				</div>

				<div class="row voorHet">
					<div class="col-lg-6" data-aos="fade-up">
						<img class="leftImg" src="../assets/img/bg2.png" />
					</div>
					<div class="col-lg-6">
						<div class="rightContent" data-aos="fade-up">
							<h2>Voor het onderwijs, <br />door studenten</h2>
							<p>Blockbook is ontstaan omdat twee studenten geloven dat nieuwe technologieën meer gebruikt moeten worden in het onderwijs. Met Blockbook worden nieuwe technologieën toegankelijk gemaakt in het onderwijs.</p>
							<div class="d-flex icons" data-aos="fade-up">
								<img src="../assets/img/Alles.svg" width="32" class="me-2" />
								<p>Alles-in-een <br />hulp</p>
								<img src="../assets/img/op.svg" width="32" class="me-2" />
								<p>Op basis van <br />lesmateriaal</p>
								<img src="../assets/img/Gemaakt.svg" width="32" class="me-2" />
								<p>Gemaakt voor <br />het onderwijs</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="werken">
			<div class="divider"></div>
			<div class="container">
				<div data-aos="zoom-in">
					<h2>Wij werken samen met</h2>
					<p>Deze partners helpen ons op onze missie om technologie toegankelijk te maken in het onderwijs. Geloof jij ook in de kracht van technologie en help jij ons ook?</p>
				</div>
				<div class="row text-center">
					<div class="col-6 col-md-3" data-aos="fade-up">
						<img src="../assets/img/Wij1.webp" />
					</div>
					<div class="col-6 col-md-3" data-aos="fade-up">
						<img src="../assets/img/Wij2.webp" />
					</div>
					<div class="col-6 col-md-3" data-aos="fade-up">
						<img src="../assets/img/Wij3.webp" />
					</div>
					<div class="col-6 col-md-3" data-aos="fade-up">
						<img src="../assets/img/Wij4.webp" />
					</div>
					<div class="col-6 col-md-3" data-aos="fade-up">
						<img src="../assets/img/Wij5.webp" />
					</div>
					<div class="col-6 col-md-3" data-aos="fade-up">
						<img src="../assets/img/Wij6.webp" />
					</div>
					<div class="col-6 col-md-3" data-aos="fade-up">
						<img src="../assets/img/Wij7.webp" />
					</div>
					<div class="col-6 col-md-3" data-aos="fade-up">
						<img src="../assets/img/Wij8.webp" />
					</div>
				</div>
			</div>
		</section>

		<section class="reacties">
			<div class="container">
				<h2>Welke reacties wij nu al krijgen</h2>
				<div class="row">
					<div class="col-md-4">
						<div class="react left" data-aos="fade-right">
							<p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</p>
							<div>Deena Levies,<br />Mission Bay</div>
							<img src="../assets/img/welke1.svg" />
						</div>
					</div>
					<div class="col-md-4">
						<div class="react center" data-aos="fade-up">
							<p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</p>
							<div>Tom Smithenson, <br />Parkmerced</div>
							<img src="../assets/img/welke2.svg" />
						</div>
					</div>
					<div class="col-md-4">
						<div class="react end" data-aos="fade-left">
							<p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</p>
							<div>Tilly Green, <br />Hayes Valley</div>
							<img src="../assets/img/welke3.svg" />
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="kostHet">
			<div class="container">
				<div class="row">
					<div class="col-md-7 left" data-aos="fade-right">
						<h2>Wat kost het</h2>
						<p>Wij rekenen in studiejaar licenties op basis van het aantal studenten die gebruik gaan maken van de tool. Wij bieden op dit moment twee opties, een gratis optie en een betaalde optie.</p>
						<button class="btn btn-primary">Bekijk Prijzen</button>
					</div>
					<div class="col-md-5 mt-5 mt-md-0" data-aos="fade-left">
						<div class="priceBox">
							<div class="name">Voordeligst</div>
							<div class="top">
								<div class="title">Premium</div>
								<div class="price">US$<span>50</span></div>
								<small>Elke maand</small>
								<p class="mt-2 mb-4">Use this area to describe one of your memberships.</p>
								<small>12 maanden geldig</small>
								<div class="text-center pt-3">
									<button class="btn btn-white">Get Started</button>
								</div>
							</div>
							<div class="botom">
								<p><img src="../assets/img/check.svg" /> I'm a benefit</p>
								<p><img src="../assets/img/check.svg" /> I'm a benefit</p>
								<p><img src="../assets/img/check.svg" /> I'm a benefit</p>
								<p class="m-0"><img src="../assets/img/check.svg" /> I'm a benefit</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="divider"></div>
		</section>

		<section class="jouw">
			<div class="container">
				<h2 class="mb-4" data-aos="fade-up">Maximaliseer jouw productiviteit en geef <br />beter onderwijs!</h2>
				<button class="btn btn-outline-primary" data-aos="fade-up">Boek een Demo</button>
				<div class="img" data-aos="fade-up">
					<img src="../assets/img/bg3.svg" />
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
section {
	padding: 120px 0;
	position: relative;
	.container {
		max-width: 1523px;
	}
	.minusLeft {
		margin-left: -25px;
		margin-top: 65px;
		p {
			line-height: 1.2;
			margin-top: 15px;
		}
	}
	@media only screen and (max-width: 1650px) {
		.minusLeft {
			margin-left: 0;
		}
	}
}
.banner {
	padding: 60px 0 80px 0;
	.col-md-6 {
		padding-top: 70px;
		padding-bottom: 70px;
	}
	h1 {
		font-size: 50px;
		line-height: 1.1;
	}
	.sub {
		font-size: 20px;
		margin-bottom: 40px;
	}
	.imgDiv {
		position: relative;
		.bannerImg {
			img {
				width: 500px;
				height: 100%;
				max-width: 100%;
				margin-right: -50px;
			}
		}
		@media only screen and (max-width: 1650px) {
			.bannerImg {
				img {
					margin-right: -0;
				}
			}
		}
	}
}
.divider {
	background: url("../assets/img/divider.svg");
	height: 92px;
	position: absolute;
	width: 100%;
	top: -1px;
	transform: rotate(180deg);
}

.geloven {
	padding-top: 250px;
	background: #ffb64f;
	h2 {
		max-width: 375px;
	}
	p {
		max-width: 500px;
	}
}

.watWij {
	h2 {
		margin-bottom: 25px;
	}

	p {
		max-width: 500px;
	}
	.watItem {
		margin-top: 30px;
		img {
			border: 2px solid;
			border-radius: 8px;
			margin-bottom: 30px;
		}
		h3 {
			font-size: 21px;
			font-weight: 600 !important;
		}
		p {
			max-width: 240px;
		}
		@media only screen and (max-width: 767px) {
			p {
				margin: auto;
			}
		}
	}
	.exLong {
		padding-left: 90px;
		padding-right: 90px;
	}
}

.voorHet {
	.leftImg {
		max-width: 487px;
	}
	.rightContent {
		margin-left: 12vw;
		margin-top: 150px;
		p {
			max-width: 400px;
		}
		.icons {
			p {
				margin-top: 15px;
				font-size: 14px;
				line-height: 1.2;
				margin-right: 40px;
			}
		}
	}
}

.werken {
	padding-top: 250px;
	background-color: #ffd7ef;
	.divider {
		transform: rotateX(180deg);
		height: 70px;
	}
	p {
		margin-top: 50px;
		margin-bottom: 50px;
		max-width: 448px;
	}
	img {
		padding: 15px;
	}
}

.reacties {
	h2 {
		margin-top: 20px;
		margin-bottom: 40px;
	}
	.react {
		background: url("../assets/img/Frame.svg");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 280px;
		max-width: 100%;
		height: 400px;
		padding: 30px;
		margin-top: 50px;
		padding-top: 75px;
		position: relative;
		div {
			text-align: end;
			font-weight: 600;
			margin-top: 75px;
		}
		img {
			position: absolute;
			width: 115px;
			left: -20px;
			bottom: -5px;
		}
	}
	@media only screen and (max-width: 870px) {
		.react {
			height: 450px;
		}
	}

	.center {
		margin: 50px auto 0;
		img {
			left: -35px;
			bottom: -40px;
			width: 135px;
		}
	}
	.end {
		margin: 50px 0 0 auto;
		img {
			left: -35px;
			bottom: -31px;
			width: 135px;
		}
	}
	@media only screen and (max-width: 767px) {
		.left {
			margin: 50px auto 0;
		}
		.end {
			margin: 50px auto 0;
		}
	}
}

.kostHet {
	background-color: #e5edf7;
	.left {
		h2 {
			margin-top: 60px;
		}
		.btn {
			margin-top: 25px;
		}
		p {
			margin-top: 30px;
			max-width: 425px;
		}
	}
	.priceBox {
		max-width: 454px;
		background: #004aad;
		position: relative;
		border-radius: 8px;
		padding: 2px;
		.top {
			color: #fff;
			padding: 25px;
		}
		.name {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 5px 15px;
			background: #ffb64f;
			border: 1px solid #004aad;
			font-size: 14px;
			font-weight: 600;
		}
		.title {
			font-size: 30px;
		}
		.price {
			font-weight: 600;
			span {
				font-size: 50px;
				vertical-align: top;
			}
		}
		.btn-white {
			padding: 10px 90px;
		}
		.botom {
			padding: 23px;
			background: #ffd7ef;
			border-radius: 0 0 6px 6px;
		}
	}
	.divider {
		background: url("../assets/img/divider2.svg");
		transform: rotateY(180deg);
		top: auto;
		bottom: 0;
		height: 60px;
	}
}

.jouw {
	text-align: center;
	padding-bottom: 0;
	.img {
		max-width: 965px;
		margin: auto;
		img {
			width: 100%;
		}
	}
}
</style>
