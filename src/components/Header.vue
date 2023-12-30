<script setup>
import { ref } from "vue";
let menu = ref(false);
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-light">
		<v-container class="mt-2">
			<v-row justify="space-between">
				<v-col sm="3" lg="2">
					<a class="navbar-brand d-flex" href="#">
						<img src="../assets/img/logo.svg" alt="blockbook" width="42" />
						<div class="ms-2 logoTxt">
							<div class="title">Blockbook</div>
							<div class="sub">Onderwijs van nu</div>
						</div>
					</a>
				</v-col>
				<v-col>
					<ul class="navbar-nav text-end">
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
					<div class="mobileMenu" :class="menu ? 'open' : ''">
						<div class="menuBtn" @click="menu = !menu">
							<span></span>
							<span></span>
							<span></span>
						</div>
						<div class="mmenu">
							<router-link @click="menu = false" class="nav-link" to="/">Home</router-link>
							<a @click="menu = false" class="nav-link" aria-current="page" href="/#product">Product</a>
							<router-link @click="menu = false" class="nav-link" to="/Prijs">Prijs</router-link>
							<a @click="menu = false" class="nav-link" aria-current="page" href="/#contact">Contact</a>
							<router-link @click="menu = false" class="nav-link" to="/BookOnline">Online boeken</router-link>
							<a @click="menu = false" class="nav-link" aria-current="page" href="#"> <img class="me-2" src="../assets/img/user_icon.svg" width="26" /> Log In </a>
							<a @click="menu = false" class="btn btn-outline-primary" href="#">Plan Demo</a>
						</div>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</nav>
</template>

<style scoped>
nav {
	.v-container {
		max-width: 1523px;
	}
	.navbar-brand {
		text-decoration: none;
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
	}
	.btn {
		padding: 6px 16px;
		display: inline-block;
		text-decoration: none;
		font-weight: 600;
		transition: 0.3s all;
		border-radius: 5px;
	}
	.v-container {
		max-width: 1523px;
	}
	.btn-outline-primary {
		background: #ffb64f;
		color: #004aad;
		border: 1px solid #004aad;
		&:active,
		&:hover,
		&:focus {
			color: #ffb64f;
			background: #004aad;
		}
	}
	.navbar-nav {
		list-style: none;

		.nav-item {
			margin-left: 20px;
			display: inline-block;
			.nav-link {
				color: #004aad;
				text-decoration: none;
				transition: 0.3s all;
				img {
					vertical-align: bottom;
				}
				&:hover {
					color: #ffb64f;
				}
			}
		}
	}
	.mobileMenu {
		display: none;
		float: right;
		.menuBtn {
			span {
				transition: 0.3s all;
				display: block;
				height: 5px;
				width: 55px;
				background: #004aad;
				border-radius: 2px;
				&:not(:last-child) {
					margin-bottom: 10px;
				}
			}
		}
		.mmenu {
			display: none;
			margin-top: 50px;
			a {
				display: block;
				margin-top: 30px;
				font-size: 35px;
				text-decoration: none;
				font-weight: 600;
			}
			a.btn {
				display: inline-block;
			}
		}
	}
	.mobileMenu.open {
		padding: 20px;
		position: fixed;
		width: 100vw;
		height: 100%;
		left: 0;
		top: 0;
		background-color: #fff;
		z-index: 3;
		.mmenu {
			display: block;
		}
		.menuBtn {
			float: right;
			span {
				&:first-child {
					transform: rotate(40deg);
					margin-top: 20px;
				}
				&:last-child {
					transform: rotate(-40deg);
					margin-top: -15px;
				}
				&:nth-child(2) {
					display: none;
				}
			}
		}
	}
	@media only screen and (max-width: 950px) {
		.navbar-nav {
			display: none;
		}
		.mobileMenu {
			display: block;
		}
	}
}
</style>
