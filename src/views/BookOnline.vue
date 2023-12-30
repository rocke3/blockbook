<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
	AOS.init({ duration: 800 });
});
</script>

<template>
	<section class="bookOnline">
		<v-container>
			<div class="text-center">
				<h1>Onze diensten</h1>
			</div>
			<div class="d-flex justify-content-center">
				<div class="item" data-aos="fade-up">
					<img src="../assets/img/book.webp" />
					<div class="content">
						<h4>Online vergadering</h4>
						<hr />
						<p>1 uur</p>
						<p>Gratis</p>
						<button class="btn btn-outline-primary">Nu boeken</button>
					</div>
				</div>
				<div class="item" data-aos="fade-up">
					<img src="../assets/img/book.webp" />
					<div class="content">
						<h4>Online vergadering</h4>
						<hr />
						<p>1 uur</p>
						<p>Gratis</p>
						<button class="btn btn-outline-primary">Nu boeken</button>
					</div>
				</div>
				<div class="item" data-aos="fade-up">
					<img src="../assets/img/book.webp" />
					<div class="content">
						<h4>Online vergadering</h4>
						<hr />
						<p>1 uur</p>
						<p>Gratis</p>
						<button class="btn btn-outline-primary">Nu boeken</button>
					</div>
				</div>
			</div>
		</v-container>
	</section>
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
}
.btn-white:hover {
	opacity: 0.5;
	color: #004aad;
	background: #fff;
}

section {
	padding: 80px 0;
	position: relative;
	.item {
		margin: 25px;
		border: 1px solid;
		.content {
			padding: 25px;
		}
	}
}
</style>
