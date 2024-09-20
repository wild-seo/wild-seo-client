<script>
	import '../app.css';
	import WebLogo from '~icons/iconoir/internet';
	import OctopusLogo from '~icons/unjs/ungh';
	import BugLogo from '~icons/gravity-ui/bug';
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import { enhance } from '$app/forms';
	import { ConicGradient } from '@skeletonlabs/skeleton';
	import { fade, blur } from 'svelte/transition';
	import services from './serviceData.js';
	import ServiceFactCard from './ServiceFactCard.svelte';
	import CertificationMarquee from './CertificationMarquee.svelte';

	export let form;

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

<div>
	<section class="p-4 md:p-8">
		<section class="mx-auto grid max-w-5xl items-center gap-8 p-0 md:grid-cols-2 md:p-4">
			<img
				src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Camping_Illustration.png?v=1726236736"
				alt="Wild SEO Campsite with Tree Illustration with Google, Amazon, Youtube, Bing, and Yahoo! logos hanging out together"
				class="animate-wind transform-gpu transition-all duration-300 ease-in"
			/>
			<div class="text-center md:text-start">
				<h1 class="text-3xl font-bold leading-tight md:text-5xl">
					<span class="font-['Scratchy'] tracking-wider">
						Get
						<span
							class="bg-gradient-to-br from-green-400 to-cyan-700 box-decoration-clone bg-clip-text text-transparent"
						>
							noticed
						</span>
						on the<br />
					</span>
					<div class="mx-auto flex w-fit items-center gap-2 tracking-wide md:w-auto">
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
				<p class="mt-2 font-platNomor text-sm uppercase tracking-widest text-black/70 md:text-xl">
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
	<section class="mt-8 grid md:grid-cols-2">
		<img
			src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/siargao-wild-seo.jpg?v=1725720499"
			alt="Stunning beach from drone view"
		/>
		<div class="relative content-center overflow-clip bg-black">
			<!-- COLOR DOT ANIMATIONS -->
			<div
				class="animate-blurify absolute -right-14 -top-16 h-[12rem] w-[12rem] rounded-full bg-wild-green/60 blur-sm"
			></div>
			<div
				class="absolute -right-14 -top-16 z-0 h-44 w-44 animate-[ping_3s_ease-out_infinite] rounded-full bg-wild-lightgreen/70 blur-md duration-200"
			></div>
			<div
				class="absolute -bottom-36 -left-14 z-0 h-52 w-52 animate-[bounce_5s_ease-in-out_infinite] rounded-full bg-wild-funblue/80 blur-2xl"
			></div>
			<!-- END -->
			<div class="mx-auto grid max-w-xl grid-flow-row gap-4 p-6">
				<p class="z-10 text-3xl font-bold text-white">e-commerce = more visibility*</p>
				<p class="z-10 text-3xl font-bold text-white">e-commerce = more visibility*</p>
				<p class="z-10 text-3xl font-bold text-white">e-commerce = more visibility*</p>
			</div>
		</div>
	</section>
	<CertificationMarquee />
	<section>
		<p class="mx-auto max-w-md text-center font-bebas text-5xl font-bold">
			Transform your current search to something better
		</p>
		<p class="mx-auto max-w-xl text-center font-scratchy text-3xl tracking-wider">
			Add schemas, alt tags, all the juicy morsels to level up your search
		</p>
		<div class="mx-auto my-10 grid max-w-6xl gap-6 p-4 md:grid-cols-2">
			<img
				src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Old_Market_SEO_Designed.png?v=1726388025"
				alt=""
			/>
			<div class="relative">
				<img
					src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Suki_Wet_Market_Designed.png?v=1726388025"
					alt=""
					class="relative z-10"
				/>
				<img
					src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/SukiWet_Complementary01.png?v=1726388027"
					alt=""
					class="absolute -bottom-[6.5rem] -left-10 z-0 w-72 transition-all hover:scale-125"
				/>
				<img
					src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/SukiWet_Complementary02.png?v=1726388025"
					alt=""
					class="absolute -right-10 -top-32 z-0 w-60 transition-all hover:scale-125"
				/>
			</div>
		</div>
	</section>
</div>

<style>
	h2 {
		font-family: 'Scratchy', 'sans-serif';
	}
</style>
