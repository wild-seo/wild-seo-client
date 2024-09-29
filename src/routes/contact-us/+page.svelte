<script>
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';
	import BirdIcon from '~icons/fa6-solid/dove';
	import CampingTentIcon from '~icons/lucide/tent-tree';
	import CertificationMarquee from '../CertificationMarquee.svelte';
	import InquireContactForm from './InquireContactForm.svelte';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { countries } from 'countries-list';
	import getUnicodeFlagIcon from 'country-flag-icons/unicode';
	import ServiceNavigation from './ServiceNavigation.svelte';

	export let form;

	const countryCodes = Object.keys(countries);

	let myCountryDictionary = countryCodes.map((code) => {
		const countryObject = {};
		countryObject.code = code;
		countryObject.country = countries[code].name;
		return countryObject;
	});
	myCountryDictionary.sort((a, b) => {
		if (a.country < b.country) {
			return -1;
		}
		if (a.country > b.country) {
			return 1;
		}
		return 0;
	});

	let sending = false;
	let businessSendHover = false;
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

	let seoServices = [
		{ formName: 'keyword', serviceName: 'Keyword Forage' },
		{ formName: 'competitor-analysis', serviceName: 'Competitor Analysis' },
		{ formName: 'site-audit', serviceName: 'Site Audit Sweep' }
	];
	let selectedServices = [];
</script>

<section class="no-scrollbar grid h-screen overflow-scroll lg:!grid-cols-2">
	<div class="sticky top-0 grid h-screen w-full grid-flow-row grid-rows-2">
		<div class="border-b-2 border-r-2 border-black bg-[#1b7ede] shadow-md">
			<p class="p-8 font-bebas text-3xl text-white"></p>
			<div class="p-8">
				<p class="font-bebas text-3xl text-white">Checklist:</p>
				<ul>
					<li>Your own website</li>
				</ul>
				<p>
					Wild SEO will help you reach your target audience. We are all about the missing people
					that would love to hear about you and we just want you to get discovered.
				</p>
				<p>We are embarking on a project now, us and you. Let's get wild!</p>
				<p>
					For every service we do, we provide a free backlink disavow service. Websites that you do
					not want linking to yours will be unindexed from Google
				</p>
				<p>If nothing is found on your website, no charge !</p>
			</div>
		</div>
		<img
			src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/8d9c9216-9a04-4ed5-d3e7-b3b173f7a900/public"
			class="h-full w-full border-r-2 border-black object-cover"
		/>
	</div>
	<!-- Right SECTION -->
	<div class="z-0 bg-wild-natural">
		<section class="h-full">
			<ServiceNavigation />
			<!-- Business CONTACT -->
			<div
				class="group z-0 mx-auto my-10 max-w-lg overflow-clip border-[0.5px] bg-white/60 shadow-md backdrop-blur-md transition-all duration-1000 hover:max-w-xl hover:border-[1] lg:!rounded-lg lg:!border-wild-brown"
				class:pinkShadow={businessSendHover}
			>
				<div class="h-2 w-full border-b border-wild-brown/20 bg-wild-green"></div>
				<section class="p-6">
					<div class="flex justify-between">
						<h1 class="font-bebas text-3xl font-bold tracking-wider">
							Contact <span class="font-courier text-sm font-normal tracking-wide">BUSINESS</span>
						</h1>
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
							<!-- NAME FIELD -->
							<div>
								<label class="contactFormLabel">Name</label>
								<input
									name="name"
									class="contactFormInput rounded-lg"
									autocomplete="name"
									value={form?.name ?? ''}
									required
									disabled={sending}
								/>
							</div>

							<!-- EMAIL FIELD -->
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

							<!-- BUSINESS NAME FIELD -->
							<div>
								<label class="contactFormLabel"
									>Business Name <span class="text-xs opacity-70">- optional</span></label
								>
								<input
									name="organization"
									class="contactFormInput rounded-lg"
									autocomplete="organization"
									value={form?.organization ?? ''}
									required
									disabled={sending}
								/>
							</div>

							<!-- LOCATION FIELD -->
							<div>
								<label class="contactFormLabel"
									>Business Locale <span class="text-xs opacity-70"></span></label
								>

								<select class="w-full rounded-lg" name="country" id="country">
									{#each myCountryDictionary as { code, country }}
										<option value={country} selected={country === 'Malaysia'} class="!font-courier">
											{getUnicodeFlagIcon(code)}
											{country}
										</option>
									{/each}
								</select>
							</div>

							<!-- SERVICE FIELD -->
							<div class="col-span-2">
								<label class="contactFormLabel">SEO Service to perform</label>

								<div
									class="no-scrollbar mt-2 flex w-full items-end gap-2 overflow-x-scroll rounded-lg bg-wild-green/40 p-2"
								>
									<div class="no-scrollbar flex gap-3 overflow-x-scroll">
										{#each seoServices as { formName, serviceName }}
											<label
												class="cursor-pointer whitespace-nowrap rounded-md bg-wild-darkgreen px-2 py-1 font-bebas tracking-wide text-white transition-all hover:bg-[#356736] hover:shadow-md"
											>
												<input
													type="checkbox"
													name={formName}
													id={formName}
													value={formName}
													checked={formName === 'keyword'}
													class="mr-2 rounded-full text-wild-green ring ring-[#4b774b]"
												/>
												<span> {serviceName}</span>
											</label>
										{/each}
									</div>
								</div>
							</div>
						</div>
						<!-- WEBSITE FIELD -->
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

						<!-- INTRO FIELD -->
						<div>
							<label class="contactFormLabel">Your vision of what your website should achieve</label
							>

							<textarea
								name="websiteVision"
								class="contactFormInput"
								placeholder="My site should bring in more visitors..."
								value={form?.websiteVision ?? ''}
								required
								disabled={sending}
							/>
						</div>

						<button
							type="submit"
							class="max-w-fit rounded-md bg-wild-darkgreen/80 px-4 py-2 text-start font-bebas text-xl tracking-wider text-white shadow-sm transition-all duration-75 ease-out hover:border-r-4 hover:border-wild-green hover:bg-wild-darkgreen hover:shadow-md"
							on:mouseover={() => {
								businessSendHover = true;
							}}
							on:mouseleave={() => {
								businessSendHover = false;
							}}>Send</button
						>
					</form>
				</section>
			</div>

			<!-- Inquire CONTACT -->
			<InquireContactForm {form} {sending} {sendButtonHover} />

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
