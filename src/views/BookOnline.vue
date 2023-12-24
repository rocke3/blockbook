<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
	AOS.init({ duration: 800 });
});
</script>

<template>
	<section class="bookOnline">
		<div class="container">
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
		</div>
	</section>
</template>

<style scoped>
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
