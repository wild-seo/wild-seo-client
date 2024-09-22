<script>
	import '../app.css';
	// Assets
	import mascot from '$assets/mascot.png';
	import coloredLogo from '$assets/logo_colored_shadow.png';
	import whiteLogo from '$assets/logo_white.png';
	import blackLogo from '$assets/logo_black.png';
	// Icons
	import HomeIcon from '~icons/pixelarticons/home';
	import SEOIcon from '~icons/icon-park-solid/seo';
	// import SunIcon from '~icons/fluent-emoji-high-contrast/sun-with-face';
	import MoonIcon from '~icons/ri/moon-clear-fill';
	import HeartIcon from '~icons/pixelarticons/heart';
	import PixelBugIcon from '~icons/pixelarticons/bug';
	import PrivacyIcon from '~icons/fluent-mdl2/lifesaver-lock';
	import CodeTreeIcon from '~icons/grommet-icons/tree';
	// Skeleton
	import { initializeStores, Modal } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile, AppRailAnchor, AppBar } from '@skeletonlabs/skeleton';
	// Svelte
	import { page } from '$app/stores';

	initializeStores();

	let currentTile = 0;

	const popupHover = {
		event: 'hover',
		target: 'popupHover',
		placement: 'top'
	};
</script>

<Modal />

<div class="bg-wild-natural">
	<!-- <div
		class="fixed right-5 top-5 flex h-12 w-12 cursor-pointer items-center rounded-full border-2 border-yellow-500 bg-white shadow-md transition hover:shadow-lg md:h-16 md:w-16"
	>
		<SunIcon class="z-50 mx-auto h-8 w-8 text-yellow-500 md:h-10 md:w-10" />
	</div> -->

	<section class="block md:flex">
		<!-- For desktop -->
		<AppRail
			background="bg-wild-beige"
			class="sticky top-0 z-20 hidden h-screen w-fit flex-none border-r border-black px-2 md:block"
			regionLead="mt-4"
		>
			<svelte:fragment slot="lead">
				<div class="mb-4">
					<img src={coloredLogo} alt="" class="w-32 p-2" />
				</div>
			</svelte:fragment>

			<AppRailAnchor
				href="/"
				title="Home"
				selected={$page.url.pathname === '/'}
				active="bg-wild-brown/60 rounded-md transition-all ease-in"
				hover="bg-transparent"
				class="rounded-md text-wild-natural transition-all hover:text-white"
			>
				<HomeIcon class="mx-auto mb-1 h-8 w-8" />
				<span class="font-bebas text-base">Home</span>
			</AppRailAnchor>

			<AppRailAnchor
				href="/services"
				title="Services"
				selected={$page.url.pathname === '/services'}
				active="bg-wild-brown/60 rounded-md transition-all ease-in"
				hover="bg-transparent"
				class="rounded-md text-wild-natural transition-all hover:text-white"
			>
				<svelte:fragment slot="lead">
					<SEOIcon class="mx-auto mb-1 h-8 w-8" />
				</svelte:fragment>
				<span class="font-bebas text-base">Services</span>
			</AppRailAnchor>

			<svelte:fragment slot="trail">
				<AppRailAnchor
					href="/about-us"
					title="About Us"
					selected={$page.url.pathname === '/about-us'}
					active="bg-wild-brown/60 rounded-md transition-all ease-in"
					hover="bg-transparent"
					class="rounded-md text-wild-natural transition-all hover:text-white"
				>
					<svelte:fragment slot="lead">
						<HeartIcon class="mx-auto mb-1 h-8 w-8" />
					</svelte:fragment>
					<span class="font-bebas text-base">About Us</span>
				</AppRailAnchor>

				<AppRailAnchor
					href="/contact-us"
					title="Contact Us"
					selected={$page.url.pathname === '/contact-us'}
					active="bg-wild-brown/60 rounded-md transition-all ease-in"
					hover="bg-transparent"
					class="rounded-md text-wild-natural transition-all hover:text-white"
				>
					<svelte:fragment slot="lead">
						<PixelBugIcon class="mx-auto mb-1 h-8 w-8" />
					</svelte:fragment>
					<span class="font-bebas text-base">Contact Us</span>
				</AppRailAnchor>
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
		<div class="mx-auto grid grid-cols-1 p-6 md:grid-cols-2">
			<div class="col-span-1 flex">
				<a href="https://cassiebrock.com/whale-shark/" target="_blank">
					<img
						class="w-1/2"
						src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/whale-shark-illustration.png?v=1726629625"
					/>
				</a>
				<div class="w-fit">
					<div class="py-4">
						<img src={whiteLogo} alt="Wild SEO white logo" class="mb-2 w-32 flex-none" />
					</div>
				</div>
			</div>
			<div class="flex gap-6">
				<div
					class="card variant-filled-tertiary mb-3 h-fit flex-grow rounded-lg p-4 text-center font-semibold text-white shadow-md"
				>
					<nav class="list-nav">
						<ul class="">
							<li>
								<a href="/about-us">
									<HeartIcon class="text-white" />
									<span class="font-bebas">About Us</span>
								</a>
							</li>
							<li>
								<a href="/contact-us">
									<PixelBugIcon class="text-white" />
									<span class="font-bebas">Contact Us</span>
								</a>
							</li>
							<li>
								<a href="/terms-and-conditions">
									<CodeTreeIcon class="text-white" />
									<span class="font-bebas">Terms & Conditions</span>
								</a>
							</li>
							<li>
								<a href="/privacy-policy">
									<PrivacyIcon class="text-white" />
									<span class="font-bebas">Privacy Policy</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<a href="https://cassiebrock.com/blue-ring-octopus/" target="_blank">
					<img
						src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/blue-ring-octopus-illustration.png?v=1726630393"
						class="h-1/2"
					/>
				</a>
			</div>
			<div></div>
			<div></div>
			<div class="col-span-2">
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
				<p class="mt-2 text-center font-bebas text-xs font-medium text-white">Home</p>
			</div>
		</svelte:fragment>

		<img src={coloredLogo} alt="" class="mx-auto" />

		<svelte:fragment slot="trail">
			<div class="flex flex-col">
				<SEOIcon class="mx-auto h-6 w-6 text-white" />
				<p class="mt-2 text-center font-bebas text-xs font-medium text-white">Services</p>
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
