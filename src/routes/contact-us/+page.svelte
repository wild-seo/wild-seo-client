<script>
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';
	import CompassIcon from '~icons/line-md/compass-twotone-loop';
	import BirdIcon from '~icons/fa6-solid/dove';
	import CampingTentIcon from '~icons/lucide/tent-tree';
	import CertificationMarquee from '../CertificationMarquee.svelte';
	export let form;

	let sending = false;
	let sendButtonHover = false;

	const customerChecklist = [
		'Your own website',
		'Clear business direction',
		'Clear target audience',
		'Do you get sales or leads from your website ?',
		'How often do you visit your website',
		'Which part of the customer journey are you interested in ?',
		'What is the most important metric for you'
	];
</script>

<section class="no-scrollbar grid h-screen overflow-scroll lg:!grid-cols-2">
	<div class="sticky top-0 grid h-screen w-full grid-flow-row grid-rows-2">
		<div class="border-b-2 border-r-2 border-black bg-wild-funblue shadow-md">
			<p class="p-8 font-bebas text-3xl text-white"></p>
			<p class="p-8 font-bebas text-3xl text-white">Checklist:</p>
			<ul>
				<li>Your own website</li>
			</ul>
			<p>
				Wild SEO will help you reach your target audience. We are all about the missing people that
				would love to hear about you and we just want you to get discovered.
			</p>
			<p>We are embarking on a project now, us and you. Let's get wild!</p>
			<p>
				For every service we do, we provide a free backlink disavow service. Websites that you do
				not want linking to yours will be unindexed from Google
			</p>
			<p>If nothing is found on your website, no charge !</p>
		</div>
		<img
			src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/8d9c9216-9a04-4ed5-d3e7-b3b173f7a900/public"
			class="h-full w-full border-r-2 border-black object-cover"
		/>
	</div>
	<!-- Right SECTION -->
	<div class="z-0 bg-wild-natural">
		<section class="h-full">
			<div
				class=" border-b border-wild-brown bg-white/60 shadow-sm transition-all duration-500 hover:shadow-md"
			>
				<div class="flex items-center gap-1 bg-wild-brown px-4">
					<p class="text-[0.6rem] font-bold tracking-[0.3em] text-white">NAVIGATION</p>
					<CompassIcon class="h-4 w-4 text-white" />
				</div>

				<ol class="breadcrumb items-center px-4 py-[0.3rem] font-akira text-xs">
					<li class="crumb">
						<a
							class="anchor relative text-wild-funblue no-underline before:absolute before:-bottom-[0.3rem] before:left-0 before:h-[3px] before:w-full before:origin-right before:scale-x-0 before:bg-wild-funblue before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
							href="/">Home</a
						>
					</li>
					<li class="crumb-separator text-base font-bold text-emerald-700" aria-hidden="true">
						&rsaquo;
					</li>
					<li class="text-black">Contact Us</li>
				</ol>
			</div>
			<div
				class="group z-0 mx-auto my-10 max-w-lg rounded-lg border-[0.5px] border-wild-brown bg-white/60 p-6 shadow-md backdrop-blur-md transition-all duration-1000 hover:max-w-xl hover:border-[1]"
				class:pinkShadow={sendButtonHover}
			>
				<div class="flex justify-between">
					<h1 class="font-bebas text-3xl font-bold tracking-wider">Contact Us</h1>
					<BirdIcon
						class="h-7 w-7 text-wild-brown/80 duration-[1200ms] group-hover:translate-x-[0.3rem] group-hover:rotate-6"
					/>
				</div>

				<div class="mb-4 mt-2 w-full border-b border-wild-brown/80"></div>
				{#if form?.error}
					<p class="error">{form.error}</p>
				{/if}
				{#if sending}
					<p class="text-gray-500">Sending email...</p>
				{/if}
				<form
					method="POST"
					action="?/contact"
					use:enhance={() => {
						sending = true;

						return async ({ update }) => {
							await update();
							sending = false;
						};
					}}
					class="flex flex-col gap-3"
				>
					<div class="grid grid-cols-2 gap-4">
						<div>
							<label class="contactFormLabel">Email</label>
							<input
								name="email"
								class="contactFormInput rounded-lg"
								autocomplete="email"
								value={form?.email ?? ''}
								required
								disabled={sending}
							/>
						</div>
						<div>
							<label class="contactFormLabel">Business Name</label>
							<input
								name="organization"
								class="contactFormInput rounded-lg"
								autocomplete="organization"
								value={form?.organization ?? ''}
								required
								disabled={sending}
							/>
						</div>
					</div>
					<div>
						<label class="contactFormLabel">Website</label>
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
								class="contactFormInput"
								placeholder="www.example.com"
								autocomplete="url"
								value={form?.website ?? ''}
								required
								disabled={sending}
							/>
						</div>
					</div>
					<button
						type="submit"
						class="max-w-fit rounded-md bg-wild-darkgreen/80 px-4 py-2 text-start font-bebas text-xl tracking-wider text-white shadow-sm transition-all duration-75 ease-out hover:border-r-4 hover:border-wild-green hover:bg-wild-darkgreen hover:shadow-md"
						on:mouseover={() => {
							sendButtonHover = true;
						}}
						on:mouseleave={() => {
							sendButtonHover = false;
						}}>Send</button
					>
				</form>
			</div>

			<CertificationMarquee minified={true} />
			<!-- Location CARD -->
			<div
				class="group mx-auto my-8 max-w-lg rounded-lg border-[0.5px] border-wild-brown bg-white/80 p-6 font-courier shadow-md backdrop-blur-md transition-all duration-500 hover:max-w-xl hover:border-[1]"
			>
				<div class="flex justify-between">
					<p class="font-bebas text-5xl font-bold tracking-widest">MY</p>
					<CampingTentIcon
						class="h-10 w-10  text-wild-brown/60 transition-all duration-700 group-hover:-translate-x-1 group-hover:scale-[1.15]"
					/>
				</div>
				<p class="">Kuala Lumpur</p>
				<p class="">50480</p>
				<p class="">Malaysia</p>
				<div class="my-3 w-full border-t border-wild-brown"></div>
				<p class="tracking-wider">
					<span class="font-bold uppercase">Tel</span> | +6012 342 9663
				</p>
				<p class="tracking-wider">
					<span class="font-bold uppercase">Mail</span> | hello@wild-seo.com
				</p>
			</div>
		</section>
	</div>
</section>

<style>
	.contactFormLabel {
		margin-bottom: 4px;
		font-family: 'Courier', 'sans';
		letter-spacing: 1px;
		font-size: 0.875rem;
		line-height: 1.25rem;
		text-transform: lowercase;
	}
	.contactFormInput {
		font-family: 'Courier', 'sans';
		opacity: 0.85;
		width: 100%;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		font-size: 0.875rem /* 14px */;
		line-height: 1.25rem;
	}
	.contactFormInput:focus {
		opacity: 1;
	}
	.pinkShadow {
		box-shadow:
			rgba(240, 46, 170, 0.4) 5px 5px,
			rgba(240, 46, 170, 0.3) 10px 10px,
			rgba(240, 46, 170, 0.2) 15px 15px,
			rgba(240, 46, 170, 0.1) 20px 20px,
			rgba(240, 46, 170, 0.05) 25px 25px;
	}
	/* Hide scrollbar for Chrome, Safari and Opera */
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
