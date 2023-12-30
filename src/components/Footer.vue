<script setup></script>

<template>
	<footer id="contact">
		<v-container>
			<a class="navbar-brand d-flex" href="#">
				<img src="../assets/img/logo.svg" alt="blockbook" width="42" />
				<div class="ms-2">
					<div class="title">BlockBook</div>
					<div class="sub">betere educatie door innovatie</div>
				</div>
			</a>
			<div class="mt-4 ps-5">
				<v-row>
					<v-col md="5">
						<h5>Contact</h5>
						<v-row class="row">
							<v-col class="col">
								<p>500 Terry Francine Street San Francisco, CA 94158</p>
								<p class="mt-5">General Inquiries: 123-456-7890</p>
							</v-col>
							<v-col class="col">
								<p>Sales: <br />info@mysite.com</p>
								<p class="mt-5">Customer Care: <br />info@mysite.com</p>
							</v-col>
						</v-row>
					</v-col>
					<v-col class="col-sm-4 col-xl-2">
						<h5>Quick Links</h5>
						<p>
							<a href="https://jeroenvangessel.wixsite.com/blockbook-1/terms-conditions">Terms & Conditions</a>
						</p>
						<p>
							<a href="https://jeroenvangessel.wixsite.com/blockbook-1/privacy-policy">Privacy Policy</a>
						</p>
					</v-col>
					<v-col class="col-sm-8 col-xl-3">
						<h5>Follow</h5>
						<p>Sign up to get the latest news on our product.</p>
						<label>Email *</label>
						<form method="post" action="">
							<div class="input-group mb-3">
								<input type="text" class="form-control" />
								<button class="btn btn-primary">Subscribe</button>
							</div>
						</form>
					</v-col>
					<v-col class="col-sm-4 col-xl-2 social">
						<h5><a href="">LinkedIn</a></h5>
						<h5><a href="">YouTube</a></h5>
						<h5><a href="">Facebook</a></h5>
					</v-col>
				</v-row>
			</div>
		</v-container>
	</footer>
</template>

<style scoped>
footer {
	color: #004aad;
	background: #ffb64f;
	padding-top: 120px;
	padding-bottom: 80px;
	margin-top: -33px;
	.v-container {
		max-width: 1523px;
	}
	a {
		text-decoration: none;
		color: #004aad;
	}
	h5 {
		margin-top: 20px;
		margin-bottom: 30px;
		font-weight: 600;
		font-size: 20px;
	}

	.navbar-brand {
		.title {
			font-weight: 600;
			font-size: 22px;
			line-height: 1.2;
		}
		.sub {
			font-size: 14px;
		}
	}
	.input-group {
		input {
			width: 60%;
			border-radius: 5px 0px 0px 5px;
			padding: 5px;
			outline: none !important;
		}
		button {
			transform: 0.3s all;
			background: #004aad;
			width: 40%;
			border-radius: 0px 5px 5px 0px;
			color: #fff;
			padding: 5px;
			border: 2px solid #004aad;
			&:hover {
				background: transparent;
				color: #004aad;
			}
		}
		.form-control {
			background: transparent;
			border: 2px solid #004aad;
			&:hover {
				background: #fff;
			}
		}
	}

	.input-group-text {
		background: #004aad;
		color: #fff;
		border-color: #004aad;
		cursor: pointer;
		font-weight: 600;
		transition: 0.3s all;
		&:hover {
			color: #004aad;
			background: #ffb64f;
		}
	}
	.social {
		padding-left: 100px;
		a {
			text-decoration: none;
			font-weight: 600;
		}
	}
}
</style>
