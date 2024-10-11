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
	import Icon from '@iconify/svelte';
	import EmailIcon from '~icons/mdi/email-edit';
	import PhoneIcon from '~icons/solar/call-chat-bold';
	// Skeleton
	import { initializeStores, Modal } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile, AppRailAnchor, AppBar } from '@skeletonlabs/skeleton';
	// Svelte
	import { page } from '$app/stores';
	import Analytics from '$lib/analytics.svelte';

	initializeStores();

	let currentTile = 0;

	const popupHover = {
		event: 'hover',
		target: 'popupHover',
		placement: 'top'
	};
</script>

<svelte:head>
	<link rel="alternate" href={$page.url} hreflang="x-default" />
	<link rel="alternate" href={$page.url} hreflang="en" />
</svelte:head>

<Analytics />
<Modal />

<div class="bg-wild-natural">
	<!-- <div
		class="fixed right-5 top-5 flex h-12 w-12 cursor-pointer items-center rounded-full border-2 border-yellow-500 bg-white shadow-md transition hover:shadow-lg lg:!h-16 lg:!w-16"
	>
		<SunIcon class="z-50 mx-auto h-8 w-8 text-yellow-500 lg:!h-10 lg:!w-10" />
	</div> -->

	<section class="block lg:!flex">
		<!-- For desktop -->
		<AppRail
			background="bg-wild-beige"
			class="sticky top-0 z-20 hidden h-screen w-fit flex-none border-r border-black px-2 lg:!block"
			regionLead="mt-4"
		>
			<svelte:fragment slot="lead">
				<div class="mb-4">
					<a href="/">
						<img src={coloredLogo} alt="Wild SEO logo colored" class="w-32 p-2" />
					</a>
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
						<Icon icon="pixelarticons:heart" class="mx-auto mb-1 h-8 w-8" />
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
						<Icon icon="pixelarticons:bug" class="mx-auto mb-1 h-8 w-8" />
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

	<!-- FOOTER SECTION -->
	<div
		class="bottom-0 left-0 w-full px-3 py-6 md:px-6"
		style="background-image: url('https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/25435a09-fc2a-4335-4728-c593b36a0900/public');background-size:cover"
	>
		<section
			class="rounded-md border-[6px] border-double border-white/40 bg-gradient-to-br from-wild-funblue/20 via-blue-500/10 to-wild-seriousblue/50 shadow-md backdrop-blur-sm"
		>
			<div class="grid-cols-none grid-rows-2 md:grid md:grid-rows-none lg:!grid-cols-2">
				<div class="flex flex-col gap-6 p-6 md:col-span-1 md:flex-row">
					<a href="https://cassiebrock.com/whale-shark/" target="_blank" class="">
						<img
							class="w-32"
							alt="Whale Shark Illustration by Cassie Brock"
							src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/whale-shark-illustration.png?v=1726629625"
						/>
					</a>
					<div class="w-full rounded-lg p-4">
						<div class="max-w-sm py-4 text-white">
							<img src={whiteLogo} alt="Wild SEO white logo" class="mb-2 w-32 flex-none" />
							<p class="mt-4 text-pretty font-folks tracking-wide">
								Boutique <span class="text-sm uppercase">SEO</span> partner in Malaysia specialising
								in
								<span class="text-sm uppercase"> on-page & technical SEO. </span>
							</p>
							<p class="mt-3 text-xs font-bold uppercase leading-relaxed tracking-wide">
								better Google search rankings with niche keywords
							</p>
						</div>
						<div class="mb-4 w-full border-t border-white"></div>
						<div class="flex flex-col gap-1">
							<p class="font-courier text-sm text-white">Kuala Lumpur</p>
							<p class="font-courier text-sm text-white">
								<EmailIcon class="inline" />
								hello@wild-seo.com
							</p>
							<p class="font-courier text-sm text-white">
								<PhoneIcon class="inline" />
								+6012 342 9663
							</p>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-6 p-6 lg:!flex-row">
					<div
						class="card mb-3 h-fit flex-grow rounded-lg bg-wild-funblue/50 p-4 text-center font-bold shadow-md backdrop-blur-sm"
					>
						<nav class="list-nav">
							<ul class="">
								<li>
									<a href="/">
										<Icon
											icon="ph:tree-fill"
											class="h-5 w-5 rounded-full bg-white/90 p-0.5 text-wild-seriousblue"
										/>
										<span class="font-bebas">Home</span>
									</a>
								</li>
								<li>
									<a href="/about-us">
										<Icon
											icon="pixelarticons:heart"
											class="h-5 w-5 rounded-full bg-white/90 p-0.5 text-wild-seriousblue"
										/>
										<span class="font-bebas">About Wild SEO</span>
									</a>
								</li>
								<li>
									<a href="/contact-us">
										<Icon
											icon="pixelarticons:bug"
											class="h-5 w-5 rounded-full bg-white/90 p-0.5 text-wild-seriousblue"
										/>
										<span class="font-bebas">Contact Us</span>
									</a>
								</li>
								<li>
									<a href="/terms-and-conditions">
										<Icon
											icon="grommet-icons:tree"
											class="h-5 w-5 rounded-full bg-white/90 p-0.5 text-wild-seriousblue"
										/>
										<span class="font-bebas">Terms & Conditions</span>
									</a>
								</li>
								<li>
									<a href="/privacy-policy">
										<Icon
											icon="fluent-mdl2:lifesaver-lock"
											class="h-5 w-5 rounded-full bg-white/90 p-0.5 text-wild-seriousblue"
										/>
										<span class="font-bebas hover:underline">Privacy Policy</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<a href="https://cassiebrock.com/blue-ring-octopus/" target="_blank">
						<img
							alt="Blue Ring Octopus Illustration by Cassie Brock"
							src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/blue-ring-octopus-illustration.png?v=1726630393"
							class="w-32"
						/>
					</a>
				</div>
				<div class="col-span-2 max-h-fit backdrop-blur-md">
					<div class="border-t border-white/90"></div>
					<p class="my-2 py-3 text-center font-folks text-xs tracking-wider text-white/90">
						Copyright © 2024 Wild SEO. All Rights Reserved.
					</p>
				</div>
			</div>
		</section>
	</div>

	<!-- For mobile -->
	<AppBar
		background="bg-wild-darkgreen/90"
		gridColumns="grid-cols-3"
		gap="gap-2"
		padding=""
		slotLead="justify-evenly gap-2 mx-2"
		slotTrail="justify-evenly gap-2 mx-2"
		class="sticky bottom-0 left-0 z-50 grid h-fit w-screen backdrop-blur-md lg:!hidden"
	>
		<svelte:fragment slot="lead">
			<a
				href="/about-us"
				class="flex flex-col bg-black/20 p-2"
				class:selectedMobileMenuItem={$page.url.pathname === '/about-us'}
			>
				<Icon icon="pixelarticons:heart" class="mx-auto h-6 w-6 text-white" />
				<p class="mt-2 text-center font-bebas text-xs font-medium text-white">About Us</p>
			</a>
			<a
				href="/services"
				class="flex flex-col bg-black/20 p-2"
				class:selectedMobileMenuItem={$page.url.pathname === '/services'}
			>
				<Icon icon="icon-park-solid:seo" class="mx-auto h-6 w-6 text-white" />
				<p class="mt-2 text-center font-bebas text-xs font-medium text-white">Services</p>
			</a>
		</svelte:fragment>

		<div class="px-2">
			<a href="/">
				<img src={coloredLogo} alt="Wild SEO logo colored" class="mx-auto max-h-16 p-2" />
			</a>
		</div>

		<svelte:fragment slot="trail">
			<a
				href="/contact-us"
				class="flex flex-col bg-black/20 p-2"
				class:selectedMobileMenuItem={$page.url.pathname === '/contact-us'}
			>
				<Icon icon="pixelarticons:bug" class="mx-auto h-6 w-6 text-white" />
				<p class="mt-2 text-center font-bebas text-xs font-medium text-white">Contact</p>
			</a>
			<a
				href="https://www.linkedin.com/company/wild-seo"
				target="_blank"
				class="flex flex-col bg-black/20 p-2"
			>
				<Icon icon="skill-icons:linkedin" class="mx-auto h-6 w-6 text-white" />
				<p class="mt-2 text-center font-bebas text-xs font-medium text-white">Linkedin</p>
			</a>
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
	.selectedMobileMenuItem {
		background: #6c8c21;
	}
</style>
