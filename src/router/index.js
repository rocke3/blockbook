import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Prijs from "../views/Prijs.vue";
import BookOnline from "../views/BookOnline.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "HomeView",
			component: HomeView,
		},
		{
			path: "/Prijs",
			name: "Prijs",
			component: Prijs,
		},
		{
			path: "/BookOnline",
			name: "BookOnline",
			component: BookOnline,
		},
	],
});

export default router;
