<script>
	import '../app.css';
	import mascot from '$assets/mascot.png';
	import coloredLogo from '$assets/logo_colored_shadow.png';
	import whiteLogo from '$assets/logo_white.png';
	import { AppRail, AppRailTile, AppRailAnchor, AppBar } from '@skeletonlabs/skeleton';
	import HomeIcon from '~icons/pixelarticons/home';
	import SEOIcon from '~icons/icon-park-solid/seo';
	import SunIcon from '~icons/fluent-emoji-high-contrast/sun-with-face';
	import MoonIcon from '~icons/ri/moon-clear-fill';
	import DuckIcon from '~icons/noto/duck';
	import LadybirdIcon from '~icons/noto/lady-beetle';

	let currentTile = 0;

	const popupHover = {
		event: 'hover',
		target: 'popupHover',
		placement: 'top'
	};
</script>

<div class="bg-wild-natural">
	<div
		class="fixed right-5 top-5 flex h-12 w-12 cursor-pointer items-center rounded-full border-2 border-yellow-500 bg-white shadow-md transition hover:shadow-lg md:h-16 md:w-16"
	>
		<SunIcon class="mx-auto h-8 w-8 text-yellow-500 md:h-10 md:w-10" />
	</div>

	<section class="block md:flex">
		<!-- For desktop -->
		<AppRail
			background="bg-wild-beige"
			class="sticky top-0 hidden h-screen w-fit px-2 md:block"
			regionLead="mt-4"
		>
			<svelte:fragment slot="lead">
				<div class="mb-4">
					<img src={coloredLogo} alt="" class="w-48" />
				</div>
			</svelte:fragment>

			<AppRailTile
				bind:group={currentTile}
				name="tile-1"
				value={0}
				title="tile-1"
				class="md rounded text-wild-natural transition-all hover:bg-wild-brown/20 hover:text-white"
			>
				<HomeIcon class="mx-auto mb-1 h-8 w-8" />
				<span class="font-bebas text-sm">Home</span>
			</AppRailTile>

			<AppRailTile
				bind:group={currentTile}
				name="tile-2"
				value={1}
				title="tile-2"
				class="md rounded text-wild-natural transition-all hover:bg-wild-brown/20 hover:text-white"
			>
				<svelte:fragment slot="lead">
					<SEOIcon class="mx-auto mb-1 h-8 w-8" />
				</svelte:fragment>
				<span class="font-bebas text-sm">Services</span>
			</AppRailTile>

			<svelte:fragment slot="trail">
				<AppRailTile
					bind:group={currentTile}
					name="tile-3"
					value={0}
					title="tile-3"
					class="md rounded text-wild-natural transition-all hover:bg-wild-brown/20 hover:text-white"
				>
					<svelte:fragment slot="lead">
						<DuckIcon class="mx-auto mb-1 h-8 w-8" />
					</svelte:fragment>
					<span class="font-bebas text-sm">About Us</span>
				</AppRailTile>
				<AppRailTile
					bind:group={currentTile}
					name="tile-3"
					value={0}
					title="tile-3"
					class="md rounded text-wild-natural transition-all hover:bg-wild-brown/20 hover:text-white"
				>
					<svelte:fragment slot="lead">
						<LadybirdIcon class="mx-auto mb-1 h-8 w-8" />
					</svelte:fragment>
					<span class="font-bebas text-sm">Contact Us</span>
				</AppRailTile>
			</svelte:fragment>
		</AppRail>

		<!-- <nav class="sticky top-0 z-10 border-wild-brown bg-wild-beige text-white shadow-md">
		<div class="mx-auto flex max-w-6xl gap-4">
			<div class="content-center bg-wild-brown p-2">
				<a href="/">Home</a>
			</div>
			<div class="flex-grow">
				
			</div>
			<section class="grid grid-cols-2">
				<div class="mr-2 content-center bg-wild-brown p-2">
					<a href="/">Services</a>
				</div>
				<div class="content-center bg-wild-brown p-2">
					<a href="/">Services</a>
				</div>
			</section>
		</div>
	</nav> -->

		<slot></slot>
	</section>

	<div class="bottom-0 left-0 w-full bg-wild-seriousblue">
		<div class="grid grid-cols-1 md:grid-cols-4">
			<div>
				<div class="mx-auto w-fit">
					<div class="py-4">
						<img src={whiteLogo} alt="Wild SEO white logo" class="mb-2 w-32 flex-none" />
					</div>
				</div>
			</div>
			<div>
				<div class="card variant-ghost mb-3 text-center font-semibold text-white">
					<header class="card-header">About Us</header>
					<section class="p-4">Contact</section>
					<footer class="card-footer">Terms & Conditions</footer>
					<footer class="card-footer">Privacy Policy</footer>
				</div>
			</div>
			<div></div>
			<div></div>
			<div>
				<div class="mx-auto w-5/6 border-t border-white/60"></div>
				<p class="my-2 text-center text-xs text-white/60">
					Copyright © 2024 Wild SEO. All Rights Reserved.
				</p>
			</div>
		</div>
	</div>

	<!-- For mobile -->
	<AppBar
		background="bg-white/20"
		gridColumns="grid-cols-3"
		class="backdrop-blur-safari sticky bottom-0 left-0 grid h-fit w-screen backdrop-blur-xl md:hidden"
	>
		<svelte:fragment slot="lead">
			<div class="flex flex-col">
				<HomeIcon class="mx-auto h-6 w-6 text-white" />
				<p class="font-bebas mt-2 text-center text-xs font-medium text-white">Home</p>
			</div>
		</svelte:fragment>

		<img src={coloredLogo} alt="" class="mx-auto" />

		<svelte:fragment slot="trail">
			<div class="flex flex-col">
				<SEOIcon class="mx-auto h-6 w-6 text-white" />
				<p class="font-bebas mt-2 text-center text-xs font-medium text-white">Services</p>
			</div>
		</svelte:fragment>
	</AppBar>
</div>

<style>
	span {
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: white;
		font-weight: 400;
	}
	.backdrop-blur-safari {
		-webkit-backdrop-filter: blur(12px);
		backdrop-filter: blur(12px);
	}
</style>
