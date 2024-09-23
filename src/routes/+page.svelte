<script>
	import '../app.css';
	// Icons
	import WebLogo from '~icons/iconoir/internet';
	import OctopusLogo from '~icons/unjs/ungh';
	import BugLogo from '~icons/gravity-ui/bug';
	import UpArrowIcon from '~icons/pixelarticons/arrow-up';
	import PlusIcon from '~icons/bx/plus';
	import StarIcon from '~icons/meteocons/star-fill';
	import LeafIcon from '~icons/ph/leaf-light';
	import FlowerIcon from '~icons/streamline/flower';
	// Skeleton
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import { enhance } from '$app/forms';
	import { ConicGradient } from '@skeletonlabs/skeleton';
	import { fade, blur } from 'svelte/transition';
	// Data
	import services from './serviceData.js';
	// Components
	import ServiceFactCard from './ServiceFactCard.svelte';
	import CertificationMarquee from './CertificationMarquee.svelte';

	export let form;

	let mouseHovering = false;
	let colorDotsMouseHover = false;
	let colorDotsMouseHoverSale = false;

	let connecting = false;

	const modalStore = getModalStore();

	function getModal(formData) {
		const data = formData;

		const modal = {
			type: 'confirm',
			title: data,
			body: '<div><p>hello</p></div>',
			response: (r) => console.log('response:', r)
		};

		modalStore.trigger(modal);
	}

	const conicStops = [
		{ color: 'transparent', start: 0, end: 10 },
		{ color: 'rgb(var(--color-success-50))', start: 10, end: 20 },
		{ color: 'transparent', start: 20, end: 30 },
		{ color: 'rgb(var(--color-success-100))', start: 30, end: 40 },
		{ color: 'transparent', start: 40, end: 50 },
		{ color: 'rgb(var(--color-success-200))', start: 50, end: 60 },
		{ color: 'transparent', start: 60, end: 70 },
		{ color: 'rgb(var(--color-success-300))', start: 70, end: 80 },
		{ color: 'transparent', start: 80, end: 85 },
		{ color: 'rgb(var(--color-success-400))', start: 85, end: 90 },
		{ color: 'transparent', start: 90, end: 95 },
		{ color: 'rgb(var(--color-success-500))', start: 95, end: 100 }
	];
</script>

<div class="overflow-clip">
	<section class="p-4 lg:!p-8">
		<section class="mx-auto grid max-w-5xl items-center gap-8 p-0 lg:!grid-cols-2 lg:!p-4">
			<img
				src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Camping_Illustration.png?v=1726236736"
				alt="Wild SEO Campsite with Tree Illustration with Google, Amazon, Youtube, Bing, and Yahoo! logos hanging out together"
				class="animate-wind transform-gpu transition-all duration-300"
			/>
			<div class="text-center lg:!text-start">
				<h1 class="text-3xl font-bold leading-tight lg:!text-5xl">
					<span class="font-['Scratchy'] tracking-wider">
						Get
						<span
							class="bg-gradient-to-br from-green-400 to-cyan-700 box-decoration-clone bg-clip-text text-transparent"
						>
							discovered
						</span>
						on the<br />
					</span>
					<div class="mx-auto flex w-fit items-center gap-2 tracking-wide lg:!w-auto">
						<span class="font-bebas">
							<span
								class="relative before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:origin-right before:scale-x-0 before:bg-wild-green before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
							>
								World
							</span>
							<span
								class="relative underline transition-all before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:origin-right before:scale-x-0 before:bg-wild-green before:transition-transform before:duration-300 hover:decoration-wild-seriousblue hover:before:origin-left hover:before:scale-x-100"
							>
								Wild</span
							>
							<span
								class="relative before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:origin-right before:scale-x-0 before:bg-wild-green before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
								>Web</span
							></span
						>
						<WebLogo
							class="h-8 w-8 rounded-full from-wild-green via-wild-seriousblue to-wild-darkgreen transition-all duration-100 hover:scale-[1.15] hover:bg-gradient-to-tr hover:p-1 hover:text-white"
						/>
					</div>
				</h1>
				<p class="mt-2 font-platNomor text-sm uppercase tracking-widest text-black/70 lg:!text-xl">
					Rank your website higher on Google
				</p>
				<div class="mb-3 mt-2 border-t border-wild-beige"></div>
				<div class="grid grid-cols-1">
					{#if form?.warning}
						<p
							class="mb-2 flex max-w-fit items-center bg-rose-600 pl-2 font-courier text-xs text-white"
							transition:fade
						>
							{form?.message ?? 'Please do not leave the field empty'}
							<span class="mr-2"></span>
							<OctopusLogo class="h-7 w-7 bg-white p-0.5" />
						</p>
					{/if}
					<form
						action="?/enquire"
						method="POST"
						use:enhance={() => {
							connecting = true;
							return async ({ result, update }) => {
								console.log(result);
								connecting = false;
								update();
							};
						}}
					>
						<p class="mb-2 font-folks text-xs font-semibold uppercase tracking-widest">Your Site</p>
						<div
							class="input-group input-group-divider mb-1 flex rounded-lg border border-wild-brown bg-white focus-within:border-wild-funblue"
						>
							<div
								class="pointer-events-none max-w-fit bg-stone-100 p-2 font-courier text-sm text-black/80 shadow-lg"
							>
								https://
							</div>
							<input
								name="website"
								class="w-full font-courier text-sm"
								placeholder="www.example.com"
							/>
						</div>

						<button
							type="submit"
							class="mt-2 flex w-1/3 items-center justify-center rounded-md bg-emerald-700 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-75 ease-out hover:border-l-4 hover:border-r-4 hover:border-wild-green hover:bg-emerald-800"
						>
							{#if connecting}
								<div in:blur>
									<ConicGradient stops={conicStops} spin width="w-6" class="mr-2" />
								</div>
							{/if}
							{#if !connecting}
								<span class="font-folks" in:blur>Connect</span>
							{/if}
						</button>
					</form>
					<!-- <div class="m-2 grid grid-cols-3 gap-1 rounded-md border-wild-green shadow-md">
						<div class="col-span-1 h-full border-r border-wild-seriousblue">
							<img src={form?.image ?? ''} class="h-full object-cover" />
						</div>
						<div class="col-span-2">
							<p class="font-courier bg-wild-brown px-2 py-1 text-sm text-white">
								{form?.url ?? ''}
							</p>
							<div class="bg-white px-4 py-2">
								<p
									class="font-bebas mb-1 text-xl font-semibold text-wild-funblue underline underline-offset-2"
								>
									{form?.title ?? ''}
								</p>
								<p class="font-courier text-sm tracking-wide text-zinc-500">
									{form?.description ?? ''}
								</p>
							</div>
						</div>
					</div> -->
				</div>
			</div>
		</section>
	</section>
	<ServiceFactCard />

	<!-- Sustainability Image section -->
	<section class="mt-8 grid lg:!grid-cols-2">
		<div class="relative">
			<img
				src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/siargao-wild-seo.jpg?v=1725720499"
				alt="Stunning beach from drone view"
				class="relative h-full object-cover"
			/>
			<p
				class="absolute bottom-0 left-0 m-2 bg-black/40 p-2 font-courier text-sm text-white shadow-md"
			>
				<span class="font-bold">*SEO</span> = Search Engine Optimisation
			</p>
		</div>
		<div
			class="group relative content-center overflow-clip bg-black"
			on:mouseleave={() => {
				mouseHovering = false;
			}}
			on:mouseover={() => {
				mouseHovering = true;
			}}
		>
			<!-- COLOR DOT ANIMATIONS -->
			<div
				class="animate-blurify absolute -right-14 -top-16 h-[12rem] w-[12rem] rounded-full bg-wild-green/60 blur-sm"
				class:stopAnimation={mouseHovering}
			></div>
			<div
				class="absolute -right-14 -top-16 z-0 h-44 w-44 animate-[ping_3s_ease-out_infinite] rounded-full bg-wild-lightgreen/70 blur-md duration-200"
				class:stopAnimation={mouseHovering}
			></div>
			<div
				class="animate-pulseScale absolute -right-2 -top-6 h-20 w-20 rounded-bl-full bg-white/10 shadow-lg backdrop-blur-md"
			></div>
			<div
				class="absolute -bottom-2 -left-6 h-16 w-28 animate-[bounce_3s_ease-in_infinite] rounded-t-full bg-white/15 shadow-md backdrop-blur-md"
			></div>
			<div
				class="absolute -bottom-36 -left-16 z-0 h-52 w-52 animate-[bounce_5s_ease-in-out_infinite] rounded-full bg-wild-funblue/80 blur-lg"
				class:stopAnimation={mouseHovering}
			></div>

			<!-- END -->
			<div class="mx-auto grid max-w-fit grid-flow-row gap-4 p-6">
				<section>
					<p class="mb-1 font-courier text-sm tracking-wider text-white">
						HOW CAN SEO HELP YOUR BUSINESS ?
					</p>
					<div class="h-1 w-full border-b border-white/70"></div>
				</section>
				<p class="z-10 flex gap-1 text-3xl font-bold text-white">
					<span class="cursor-cell transition-all hover:scale-105">e-commerce</span>
					<span class="font-normal">=</span>
					<UpArrowIcon />
					<span class="cursor-cell transition-all hover:scale-110">conversions</span>
				</p>
				<p class="z-10 flex gap-1 text-3xl font-bold text-white">
					<span class="cursor-cell transition-all hover:scale-105">blogger</span>

					<span class="font-normal">=</span>
					<span class="flex"><PlusIcon class="h-6 w-6" /><PlusIcon /></span>
					<span class="cursor-cell transition-all hover:scale-110">traffic</span>
					<PlusIcon class="h-5 w-5" />
				</p>
				<p class="z-10 flex gap-1 text-3xl font-bold text-white">
					<span class="cursor-cell transition-all hover:scale-105">new brand</span>

					<span class="font-normal">=</span>
					<StarIcon />
					<span class="cursor-cell transition-all hover:scale-110">visibility</span>
				</p>
			</div>
		</div>
	</section>
	<CertificationMarquee minified={false} />
	<section class="border-b border-black">
		<div class="h-6 w-full border-b border-black bg-wild-brown shadow-md"></div>
		<div class="mx-auto max-w-6xl pb-6">
			<div class="grid items-center gap-8 py-20 lg:!grid-cols-2">
				<div class=" font-folks tracking-wide">
					<div class="mb-2 flex gap-3">
						<p class="font-bebas text-3xl font-bold leading-tight tracking-wide lg:!text-5xl">
							What We Do
						</p>
						<LeafIcon class="animate-wind h-10 w-10 text-wild-darkgreen" />
					</div>
					<div class="mb-4 w-3/4 border border-dashed border-wild-brown"></div>
					<div class="leading-[1.6] tracking-wider">
						<div class="max-w-lg">
							<p class="my-2">
								At <span class="font-scratchy text-3xl text-wild-darkgreen">Wild SEO</span>, we
								believe your website
								<span class="font-courier"> [+ how accessible it is to your customers]</span>
								is a crucial representation of your business.
							</p>
							<p class="my-2">
								Instead of including paid metrics in <span class="underline underline-offset-2"
									>our pricing</span
								>, we focus on:
							</p>
						</div>
						<div class="my-6 grid grid-cols-3 gap-1 font-semibold">
							<div class="flex items-center gap-2 capitalize">
								<FlowerIcon class="text-pink-500" />
								<p>organic growth</p>
							</div>
							<div class="flex items-center gap-2 capitalize">
								<FlowerIcon class="text-pink-500" />
								<p>long-term traffic</p>
							</div>
							<div class="flex items-center gap-2 capitalize">
								<FlowerIcon class="text-pink-500" />
								<p>SEO accessibility</p>
							</div>
						</div>
						<div class="max-w-lg">
							<p class="my-3">
								Rooted in a
								<span class="font-semibold underline decoration-double underline-offset-[3px]">
									100% confidence
								</span>
								of your unique business bringing results. Our pricing is one-time with
								<b>no maintanence costs.</b>
							</p>
							<p>We operate with a love for niche, unconventional keywords.</p>
						</div>
						<section class="mt-4 flex gap-6">
							<a
								href="/services"
								class="whiteMinimalButton border-2 border-wild-brown bg-transparent tracking-wider text-wild-brown duration-150 ease-in hover:-translate-y-1 hover:bg-white hover:text-black"
								class:amberShadow={colorDotsMouseHover}
								on:mouseleave={() => {
									colorDotsMouseHover = false;
								}}
								on:mouseover={() => {
									colorDotsMouseHover = true;
								}}
							>
								View Services
							</a>
							<a
								href="/contact-us"
								class="whiteMinimalButton border-2 border-wild-brown bg-transparent tracking-wider text-wild-brown duration-150 ease-in hover:-translate-y-1 hover:bg-white hover:text-black"
								class:pinkShadow={colorDotsMouseHoverSale}
								on:mouseleave={() => {
									colorDotsMouseHoverSale = false;
								}}
								on:mouseover={() => {
									colorDotsMouseHoverSale = true;
								}}
							>
								Contact Sales
							</a>
						</section>
					</div>
				</div>
				<div>
					<div
						class="relative flex flex-col rounded-lg border border-wild-brown bg-white shadow-lg transition-all duration-150 hover:shadow-xl md:flex-row"
					>
						<div class="relative flex-shrink-0 border-r border-black p-6">
							<p class="font-platNomor text-2xl tracking-wider">Wild SEO's Core Strategy:</p>
							<div class="mb-4 mt-2 border-t border-wild-brown"></div>
							<ul class="list-inside list-disc font-courier leading-loose tracking-wider">
								<li>Local SEO</li>
								<li>Rising trends</li>
								<li>No paid backlinks</li>
							</ul>
						</div>
						<div>
							<img
								src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/531533df-4ff8-478f-89ac-7a10440baf00/public"
								class="h-full object-cover"
							/>
						</div>
					</div>
					<div class="mt-8">
						<p class="my-2 font-courier">How to we get your site to appear in the wild ?</p>
						<div class="my-2 w-full border-t border-wild-brown"></div>
						<p class="mt-4 font-folks text-3xl font-semibold">loooooooooong tail words</p>
					</div>
				</div>
			</div>
			<p class="font-courier">
				*Your brand / business is one-of-a-kind. Your SEO efforts should reflect that a <span
					class="font-semibold underline decoration-double underline-offset-4"
				>
					100%</span
				>
			</p>
		</div>
	</section>
	<!-- SEO Example -->
	<section class="">
		<section class="grid lg:!grid-cols-2">
			<div class="flex items-center justify-center bg-white/50 shadow-lg">
				<div class="text-center">
					<p class="font-courier">How does your site look on Google ?</p>
					<div class="mx-auto mb-3 mt-1 w-4/6 border-b border-wild-brown"></div>
					<p class="font-akira text-2xl text-black">Suki owns a wet market.</p>
					<p
						class="mx-auto mb-2 mt-1 max-w-xl text-center font-scratchy text-3xl italic tracking-wider text-wild-funblue"
					>
						Her links compete with every type of market ever (!)
					</p>
				</div>
			</div>
			<div class="grid grid-cols-2 items-stretch">
				<img
					src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/a7c331b4-bbc6-482e-7caf-572339916700/public"
					class="object-cover transition-all duration-200 hover:z-10 hover:scale-110 hover:shadow-lg"
				/>
				<img
					src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/309e112a-144e-4539-796a-599857a70100/public"
					class="object-cover transition-all duration-200 hover:z-10 hover:scale-110 hover:shadow-lg"
				/>
			</div>
		</section>
		<div
			class=""
			style="background-image: url('https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/e294ecc5-3e3b-4553-a168-23516c88dd00/public');"
		>
			<section class="text-white">
				<div class="grid h-[80vh] items-center lg:!h-[55vh] lg:!grid-cols-2">
					<div class="grid h-full w-full items-center justify-center bg-black/40 backdrop-blur-sm">
						<div class="relative p-5 lg:!p-10">
							<p
								class="text-center font-folks text-xl font-bold tracking-widest underline underline-offset-4"
							>
								BEFORE
							</p>
							<img
								src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Old_Market_SEO_Designed.png?v=1726388025"
								alt=""
								class=""
							/>
						</div>
					</div>
					<div class="relative grid h-full w-full items-center justify-center bg-black/40">
						<div class="relative p-5 lg:!p-10">
							<p
								class="z-20 text-center font-folks text-xl font-bold tracking-widest underline underline-offset-4"
							>
								AFTER
							</p>
							<p
								class="relative z-10 text-center font-scratchy text-xl tracking-wider lg:!text-3xl"
							>
								+ Schemas, Alt Tags, OGs, and more !
							</p>
							<img
								src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Suki_Wet_Market_Designed.png?v=1726388025"
								alt=""
								class="relative z-10"
							/>
							<img
								src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/7d7617a9-471a-4bc4-eee9-e9721d002900/public"
								alt=""
								class="absolute -bottom-[3rem] -left-[1rem] z-0 w-32 -rotate-6 lg:!-bottom-[5rem] lg:!w-64"
							/>
							<img
								src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/382024eb-60e6-47f4-833c-5325cbba5f00/public"
								alt=""
								class="absolute -right-5 top-2 z-0 w-32 rotate-6 lg:!-right-0 lg:!-top-10 lg:!w-60"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
		<div class="border-b border-t border-black bg-white px-4 py-2 font-courier">
			<p>
				<b>70%</b> of marketers say SEO provides more consistent results than paid advertising.
			</p>
			<!-- <p>
				SEO leads have a 14.6% higher closing rate compared to 1.7% of outbound leads (direct mail
				or cold calls)
			</p> -->
		</div>
		<section class="grid grid-cols-2">
			<p>Drop us your email</p>
			<input type="submit" />
		</section>
	</section>
</div>

<style>
	h2 {
		font-family: 'Scratchy', 'sans-serif';
	}
	.stopAnimation {
		animation-play-state: paused;
	}
	.whiteMinimalButton {
		z-index: 10;
		padding: 16px;
		margin-top: 10px;
		font-size: 1.3rem;
		border-radius: 8px;
		font-family: 'Bebas Neue', 'sans';
	}
	.amberShadow {
		box-shadow:
			rgba(245, 158, 11, 0.4) 5px 5px,
			rgba(245, 158, 11, 0.3) 10px 10px,
			rgba(245, 158, 11, 0.2) 15px 15px,
			rgba(245, 158, 11, 0.1) 20px 20px,
			rgba(245, 158, 11, 0.05) 25px 25px;
	}
	.pinkShadow {
		box-shadow:
			rgba(240, 46, 170, 0.4) 5px 5px,
			rgba(240, 46, 170, 0.3) 10px 10px,
			rgba(240, 46, 170, 0.2) 15px 15px,
			rgba(240, 46, 170, 0.1) 20px 20px,
			rgba(240, 46, 170, 0.05) 25px 25px;
	}
</style>
