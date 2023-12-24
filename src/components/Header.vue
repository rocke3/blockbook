<script setup></script>

<template>
	<nav class="navbar navbar-expand-lg navbar-light">
		<div class="container-fluid mt-2">
			<a class="navbar-brand d-flex" href="#">
				<img src="../assets/img/logo.svg" alt="blockbook" width="42" />
				<div class="ms-2 logoTxt">
					<div class="title">Blockbook</div>
					<div class="sub">Onderwijs van nu</div>
				</div>
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link" to="/">Home</router-link>
					</li>
					<li class="nav-item">
						<a class="nav-link" aria-current="page" href="/#product">Product</a>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/Prijs">Prijs</router-link>
					</li>
					<li class="nav-item">
						<a class="nav-link" aria-current="page" href="/#contact">Contact</a>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/BookOnline">Online boeken</router-link>
					</li>
					<li class="nav-item">
						<a class="nav-link" aria-current="page" href="#"> <img class="me-2" src="../assets/img/user_icon.svg" width="26" /> Log In </a>
					</li>
					<li class="nav-item">
						<a class="btn btn-outline-primary" href="#">Plan Demo</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style scoped>
nav {
	.container-fluid {
		max-width: 1710px;
	}
	.logoTxt {
		color: #004aad;
		font-weight: bold;
		.title {
			font-size: 23px;
			line-height: 1;
		}
		.sub {
			font-size: 14px;
		}
	}
	.nav-item {
		margin-left: 12px;
		a {
			color: #004aad;
		}
	}
}
</style>
