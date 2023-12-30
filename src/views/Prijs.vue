<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
	AOS.init({ duration: 800 });
});
</script>

<template>
	<div class="prijs">
		<section class="prices">
			<div class="topSec">
				<v-container class="container">
					<div class="text-center">
						<h1>Explore Our Pricing Plans</h1>
						<p>Use this area to describe one of your memberships.</p>
					</div>
				</v-container>
				<div class="divider"></div>
			</div>
			<div class="bottomSec">
				<v-container class="container">
					<v-row justify="center">
						<v-col class="priceBox" data-aos="fade-right">
							<div class="top">
								<div class="title">Free</div>
								<div class="price">US$<span>0</span></div>
								<small class="month"></small>
								<p class="mt-2 mb-4">Use this area to describe one of your memberships.</p>
								<small>12 maanden geldig</small>
								<div class="d-grid pt-3">
									<button class="btn btn-lg btn-primary">Get Started</button>
								</div>
							</div>
							<div class="botom">
								<p><img src="../assets/img/check.svg" /> I'm a benefit</p>
								<p class="m-0"><img src="../assets/img/check.svg" /> I'm a benefit</p>
							</div>
						</v-col>
						<v-col class="priceBox" data-aos="fade-up">
							<div class="top">
								<div class="title">Standard</div>
								<div class="price">US$<span>30</span></div>
								<small>Elke maand</small>
								<p class="mt-2 mb-4">Use this area to describe one of your memberships.</p>
								<small>12 maanden geldig</small>
								<div class="d-grid pt-3">
									<button class="btn btn-lg btn-primary">Get Started</button>
								</div>
							</div>
							<div class="botom">
								<p><img src="../assets/img/check.svg" /> I'm a benefit</p>
								<p><img src="../assets/img/check.svg" /> I'm a benefit</p>
								<p class="m-0"><img src="../assets/img/check.svg" /> I'm a benefit</p>
							</div>
						</v-col>
						<v-col class="priceBox active" data-aos="fade-left">
							<div class="name">Voordeligst</div>
							<div class="top">
								<div class="title">Premium</div>
								<div class="price">US$<span>50</span></div>
								<small>Elke maand</small>
								<p class="mt-2 mb-4">Use this area to describe one of your memberships.</p>
								<small>12 maanden geldig</small>
								<div class="d-grid pt-3">
									<button class="btn btn-lg btn-white">Get Started</button>
								</div>
							</div>
							<div class="botom">
								<p><img src="../assets/img/check.svg" /> I'm a benefit</p>
								<p><img src="../assets/img/check.svg" /> I'm a benefit</p>
								<p><img src="../assets/img/check.svg" /> I'm a benefit</p>
								<p class="m-0"><img src="../assets/img/check.svg" /> I'm a benefit</p>
							</div>
						</v-col>
					</v-row>
				</v-container>
			</div>
		</section>

		<section class="grass">
			<v-container>
				<div class="grassDiv"></div>
			</v-container>
		</section>
	</div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish&family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
html {
	overflow-x: hidden;
	body {
		font-family: "Mulish", sans-serif;
		color: #164dac;
		font-size: 16px;
	}
}
h1,
h2,
h3,
h4,
h5,
h6,
.btn {
	font-family: "Space Grotesk", sans-serif !important;
	font-weight: 400;
}
.btn {
	padding: 10px 16px;
	display: inline-block;
	text-decoration: none;
	font-weight: 600;
	transition: 0.3s all;
	width: 100%;
	border-radius: 5px;
}
.v-container {
	max-width: 1523px;
}
.btn-primary {
	background: #004aad;
	color: #fff;
	&:active,
	&:hover,
	&:focus {
		background: #ffb64f;
		color: #004aad;
		outline: 1px solid #004aad;
	}
}
.btn-outline-primary {
	background: #ffb64f;
	color: #004aad;
	border: 1px solid #004aad;
}
.btn-outline-primary:active,
.btn-outline-primary:hover,
.btn-outline-primary:focus {
	color: #ffb64f;
	background: #004aad;
}
.btn-white {
	background: #fff;
	color: #004aad;
	transition: 0.3s all;
	&:hover {
		color: #fff;
		outline: 1px solid #fff;
		background: transparent;
	}
}

section {
	color: #004aad;
	padding: 60px 0;
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
}
.prijs {
	.prices {
		padding-bottom: 15px;
	}
	.topSec {
		position: relative;
		padding: 50px 0 310px 0;
		background: #ffd7ef;
		h1 {
			font-size: 50px;
		}
		.divider {
			background: url("../assets/img/divider2.svg");
			height: 92px;
			width: 100%;
			bottom: 0;
			position: absolute;
		}
	}
	.bottomSec {
		margin-top: -280px;
	}
}

.priceBox {
	max-width: 295px;
	background: #ffb64f;
	position: relative;
	border-radius: 8px;
	margin: 15px;
	padding: 0;
	.top {
		padding: 25px;
	}
	&.active {
		background: #004aad;
		.top {
			color: #fff;
		}
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
	.month {
		display: block;
		height: 24px;
	}
	.botom {
		padding: 23px;
		background: #ffd7ef;
		border-radius: 0 0 6px 6px;
		height: 220px;
	}
}

.grass {
	padding: 0;
	background: #ffb64f;
	margin-bottom: 45px;
	.grassDiv {
		height: 100px;
		max-width: 980px;
		margin: auto;
		position: relative;
		&:before,
		&:after {
			position: absolute;
			content: "";
			top: -100px;
		}
		&:before {
			background: url("../assets/img/pricing1.svg");
			background-size: 100% 100%;
			background-repeat: no-repeat;
			width: 153px;
			height: 117px;
			transform: rotateY(180deg);
			left: -23px;
		}
		&:after {
			background: url("../assets/img/pricing2.svg");
			background-size: contain;
			background-repeat: no-repeat;
			right: -23px;
			width: 127px;
			height: 134px;
			top: -110px;
		}
	}
}
</style>
