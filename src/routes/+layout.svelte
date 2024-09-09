<script>
	import '../app.css';
	import mascot from '$assets/mascot.png';
	import coloredLogo from '$assets/logo_colored_shadow.png';
	import whiteLogo from '$assets/logo_white.png';
	import { AppRail, AppRailTile, AppRailAnchor, AppBar } from '@skeletonlabs/skeleton';
	import HomeLogo from '~icons/pixelarticons/home';
	import SEOLogo from '~icons/icon-park-solid/seo';
	import SunLogo from '~icons/fluent-emoji-high-contrast/sun-with-face';
	import MoonLogo from '~icons/ri/moon-clear-fill';

	let currentTile = 0;

	const popupHover = {
		event: 'hover',
		target: 'popupHover',
		placement: 'top'
	};
</script>

<div
	class="fixed right-5 top-5 flex h-12 w-12 cursor-pointer items-center rounded-full border-2 border-yellow-500 bg-white shadow-md transition hover:shadow-lg md:h-16 md:w-16"
>
	<SunLogo class="mx-auto h-8 w-8 text-yellow-500 md:h-10 md:w-10" />
</div>

<section class="block md:flex">
	<!-- For desktop -->
	<AppRail
		background="bg-wild-beige"
		class="sticky top-0 hidden h-screen w-48 md:block"
		regionLead="mt-4"
	>
		<svelte:fragment slot="lead">
			<div class="p-2">
				<img src={coloredLogo} alt="" />
			</div>
		</svelte:fragment>

		<AppRailAnchor href="/">
			<HomeLogo class="mx-auto h-10 w-10 text-white" />
			<span>Home</span>
		</AppRailAnchor>

		<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
			<svelte:fragment slot="lead">
				<SEOLogo class="mx-auto h-10 w-10 text-white" />
			</svelte:fragment>
			<span>Services</span>
		</AppRailTile>

		<svelte:fragment slot="trail">
			<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
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
	<div class="grid grid-cols-4">
		<div>
			<div class="mx-auto w-fit">
				<div class="py-4">
					<img src={whiteLogo} alt="Wild SEO Beetle logo" class="mb-2 w-32 flex-none" />
					<p class="text-white">Wild SEO</p>
				</div>
			</div>
		</div>
		<div>
			<div class="card variant-ghost">
				<header class="card-header">(header)</header>
				<section class="p-4">(content)</section>
				<footer class="card-footer">(footer)</footer>
			</div>
		</div>
		<div></div>
		<div></div>
	</div>
</div>

<!-- For mobile -->
<AppBar
	background="bg-wild-brown"
	gridColumns="grid-cols-3"
	class="sticky bottom-0 left-0 grid h-fit w-screen md:hidden"
>
	<svelte:fragment slot="lead">
		<div class="flex flex-col">
			<HomeLogo class="mx-auto h-8 w-8 text-white" />
			<span class="mt-2 text-center text-xs">Home</span>
		</div>
	</svelte:fragment>

	<img src={coloredLogo} alt="" class="mx-auto" />

	<svelte:fragment slot="trail">
		<div class="flex flex-col">
			<SEOLogo class="mx-auto h-8 w-8 text-white" />
			<span class="mt-2 text-center text-xs">Services</span>
		</div>
	</svelte:fragment>
</AppBar>

<style>
	span {
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: white;
		font-weight: 400;
	}
</style>
