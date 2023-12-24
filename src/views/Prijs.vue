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
				<div class="container">
					<div class="text-center">
						<h1>Explore Our Pricing Plans</h1>
						<p>Use this area to describe one of your memberships.</p>
					</div>
				</div>
				<div class="divider"></div>
			</div>
			<div class="bottomSec">
				<div class="container">
					<div class="d-flex justify-content-center">
						<div class="priceBox" data-aos="fade-right">
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
						</div>
						<div class="priceBox" data-aos="fade-up">
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
						</div>
						<div class="priceBox active" data-aos="fade-left">
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
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="grass">
			<div class="container">
				<div class="grassDiv"></div>
			</div>
		</section>
	</div>
</template>

<style scoped>
section {
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
