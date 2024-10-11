<script>
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';
	import BirdIcon from '~icons/fa6-solid/dove';
	import TurtleIcon from '~icons/noto/turtle';
	import QuestionMarkIcon from '~icons/octicon/question-16';
	import CheckMarkIcon from '~icons/octicon/check-circle-16';
	import CampingTentIcon from '~icons/lucide/tent-tree';
	import CertificationMarquee from '../CertificationMarquee.svelte';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { countries } from 'countries-list';
	import getUnicodeFlagIcon from 'country-flag-icons/unicode';
	import ServiceNavigation from './ServiceNavigation.svelte';
	import { checkSEO, checkMetric, checkSitePurpose } from './checked.js';

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

	let sitePurposes = [
		'Generate Leads',
		'Community Building',
		'E-Commerce',
		'Brand Awareness',
		'Portfolio',
		'Customer Support'
	];

	let keyMetrics = [
		'Traffic Growth',
		'Google Page Rankings',
		'Conversion Rate',
		'Bounce Rate',
		'On-site Dwell Time',
		'Local Search Visibility',
		'Page Load Speed'
	];

	let selectedSitePurpose = '';
	let selectedServices = [];
</script>

<svelte:head>
	<link rel="“canonical”" href="“https://www.wild-seo.com/contact-us" />
	<title>Page 1 on Google Starts Here | Contact Wild SEO</title>
	<meta
		name="description"
		content="Contact us with your business details to get started ranking your website higher on Google. Guidelines on how an SEO project with Wild SEO will function."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Page 1 on Google Starts Here | Contact Wild SEO" />
	<meta property="og:url" content="https://wild-seo.com/contact-us" />
	<meta
		property="og:image"
		content="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/b0d10f4e-7c6c-46f1-f7d3-6c213cc34f00/small"
	/>
	<meta
		property="og:description"
		content="Contact us with your business details to get started ranking your website higher on Google. Guidelines on how an SEO project with Wild SEO will function."
	/>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org/",
			"@type": "BreadcrumbList",
			"itemListElement": [
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Home",
					"item": "https://wild-seo.com"
				},
				{
					"@type": "ListItem",
					"position": 2,
					"name": "Contact Us",
					"item": "https://wild-seo.com/contact-us"
				}
			]
		}
	</script>
</svelte:head>

<section class="no-scrollbar grid h-screen overflow-scroll lg:!grid-cols-2">
	<div
		class="order-last grid w-full grid-flow-row grid-rows-6 md:sticky md:top-0 md:order-first md:h-screen"
	>
		<div
			class="row-span-4 h-full overflow-y-scroll border-b-2 border-r-2 border-black bg-[#1b7ede] shadow-md"
		>
			<div>
				<div class="h-3 w-full bg-blue-800 bg-gradient-to-tr from-blue-950"></div>
				<section class="px-8 pb-4 pt-6">
					<div class="flex items-center justify-between">
						<h1 class="font-bebas text-3xl tracking-wide text-white/90">
							How A Wild SEO Project Works:
						</h1>
						<QuestionMarkIcon class="h-6 w-6 text-white/90" />
					</div>
					<div class="font-folks tracking-wider text-white">
						<ul class="workList my-2 ml-5 list-outside leading-loose">
							<li>
								<h4>
									You may purchase a <a
										href="/services"
										class="text-wild-green underline underline-offset-[1px]">package</a
									>
									to guarantee a project.
								</h4>
							</li>
							<li>
								<h4>
									Packages are ideal for <b>returning clients.</b>
								</h4>
							</li>
							<li>
								<h4>
									For <b>first-timers</b>, please share details of your business with us!
									<span class="opacity-95"
										>This gives us a head start on your current website SEO, estimate hours, and
										plan the <span class="italic">14-day</span> timeline.</span
									>
								</h4>
							</li>
							<li>
								<h4>
									You may also email <a
										href="mailto:hello@wild-seo.com"
										class="text-wild-green underline underline-offset-[1px]">hello@wild-seo.com</a
									>
									for <b>custom pricing.</b>
								</h4>
							</li>
						</ul>
						<div class="my-3 w-2/3 border-t border-dashed border-white/70"></div>
						<h2 class="my-2 font-courier text-sm tracking-wide">
							Our packages are priced based on the minimum research & implementation hours required
							for search engine optimization.
						</h2>
					</div>
					<div class="mt-6 flex items-center justify-between">
						<p class="font-bebas text-3xl tracking-wide text-white/90">Checklist:</p>
						<CheckMarkIcon class="h-6 w-6 text-white/90" />
					</div>
					<div class="font-folks tracking-wider text-white">
						<ul class="checkList my-2 list-inside list-disc leading-loose">
							<li><h3 class="inline">Your own live website</h3></li>
							<li>
								<h3 class="inline">Access to your website's backend</h3>
							</li>
							<li>
								<h3 class="inline">
									Availability for video calls <div class="inline p-2"></div>
								</h3>
							</li>
						</ul>
						<div class="my-3 w-2/3 border-t border-dashed border-white/70"></div>
						<p class="my-2 font-courier text-sm tracking-wide">
							We welcome all businesses seeking impactful organic growth.
						</p>
					</div>
				</section>
				<div class="mb-1 mt-4 flex items-center justify-between px-8">
					<h3 class="font-bebas text-2xl tracking-wider text-white">Free SEO stuff to note :</h3>
					<TurtleIcon
						class="h-8 w-8 transition-all duration-500 hover:-translate-x-1 hover:-translate-y-2 hover:-rotate-3 hover:scale-110"
					/>
				</div>
				<div class="w-full border-t border-white"></div>
				<section class="bg-blue-800 px-8 pb-8 pt-5 font-platNomor tracking-wide text-white/90">
					<ul class="coralList list-inside">
						<li class="mb-2">
							We offer a <span class="mx-[1px] font-bebas text-xl tracking-widest">FREE</span>
							backlink disavow service that removes any
							<span class="mx-[1px] font-bebas text-xl tracking-wider">UNWANTED</span> sites that link
							to yours.
						</li>
						<li>For site audits that result in zero issues, you will not be charged.</li>
					</ul>
				</section>
			</div>
		</div>
		<div class="relative row-span-2 bg-indigo-800">
			<img
				src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/8d9c9216-9a04-4ed5-d3e7-b3b173f7a900/public"
				alt="A coral patch in the sea close to the beach"
				class="relative h-full w-full border-r-2 border-black object-cover md:object-contain"
			/>
			<p
				class="absolute right-3 top-3 max-w-md rounded-md bg-black/50 px-3 py-1 text-end font-bebas text-base tracking-wide text-white/95 backdrop-blur-md md:text-lg"
			>
				Response are typically between 1 - 2 days. Thank you!
			</p>
		</div>
	</div>
	<!-- Right SECTION -->
	<div class="z-0 bg-wild-natural">
		<section class="h-full">
			<ServiceNavigation />
			<!-- Business CONTACT -->
			<div
				class="group z-0 mx-auto my-10 max-w-xl overflow-clip border-[0.5px] bg-white/60 shadow-md backdrop-blur-md transition-all duration-1000 hover:max-w-[37rem] hover:border-[1] lg:!rounded-lg lg:!border-wild-brown"
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
							<div class="col-span-2 md:col-span-1">
								<label class="contactFormLabel"
									>Name
									<input
										name="name"
										class="contactFormInput mt-2 rounded-lg"
										autocomplete="name"
										value={form?.name ?? ''}
										required
										disabled={sending}
									/>
								</label>
							</div>

							<!-- EMAIL FIELD -->
							<div class="col-span-2 md:col-span-1">
								<label class="contactFormLabel"
									>Email
									<input
										name="email"
										class="contactFormInput mt-2 rounded-lg"
										autocomplete="email"
										value={form?.email ?? ''}
										required
										placeholder="example@email.com"
										disabled={sending}
									/>
								</label>
							</div>

							<!-- BUSINESS NAME FIELD -->
							<div class="col-span-2 md:col-span-1">
								<label class="contactFormLabel"
									>Business Name <span class="text-xs opacity-70">- optional</span>
									<input
										name="organization"
										class="contactFormInput mt-2 rounded-lg"
										autocomplete="organization"
										value={form?.organization ?? ''}
										disabled={sending}
									/>
								</label>
							</div>

							<!-- LOCATION FIELD -->
							<div class="col-span-2 md:col-span-1">
								<label class="contactFormLabel">
									Business Locale
									<select class="mt-2 w-full rounded-lg" name="country" id="country">
										{#each myCountryDictionary as { code, country }}
											<option
												value={country}
												selected={country === 'Malaysia'}
												class="!font-courier"
											>
												{getUnicodeFlagIcon(code)}
												{country}
											</option>
										{/each}
									</select>
								</label>
							</div>

							<!-- SERVICE FIELD -->
							<div class="col-span-2">
								<p class="contactFormLabel">SEO Service of interest</p>
								<div
									class="mt-2 flex w-full items-end gap-2 rounded-lg border border-[#1E3163] bg-[#F8F8F8] p-3"
								>
									<div class="no-scrollbar flex gap-3 overflow-x-scroll">
										{#each seoServices as { formName, serviceName }}
											<label
												class="standardBg cursor-pointer whitespace-nowrap rounded-sm px-2 py-1 font-bebas text-lg tracking-wide text-[#F8F8F8] transition-all hover:bg-green-500 hover:shadow-md"
												style="filter: drop-shadow(4px 3px 0px #F037A5)"
											>
												<input
													type="checkbox"
													use:checkSEO
													name="seoService"
													id={formName}
													disabled={sending}
													value={formName}
													checked={formName === 'keyword'}
													class="mr-2 rounded-full text-wild-green ring ring-[#495E57]/60"
												/>
												<span> {serviceName}</span>
											</label>
										{/each}
									</div>
								</div>
							</div>

							<!-- METRIC FIELD -->
							<div class="col-span-2">
								<p class="contactFormLabel">Key Metric of interest</p>

								<div
									class="mt-2 flex w-full gap-2 rounded-lg border border-[#1E3163] bg-[#F8F8F8] p-2"
								>
									<div class="flex flex-wrap gap-3">
										{#each keyMetrics as metric}
											<label
												class="standardBg -rotate-1 cursor-pointer whitespace-nowrap rounded-sm px-2 py-1 font-bebas text-lg tracking-wide text-[#F8F8F8] transition-all hover:bg-orange-500 hover:shadow-md"
												style="filter: drop-shadow(4px 3px 0px #F037A5);"
											>
												<input
													use:checkMetric
													type="checkbox"
													name="metric"
													id={metric}
													disabled={sending}
													value={metric}
													checked={metric === 'Traffic Growth'}
													class="mr-2 rounded-full text-green-500 ring ring-white/60"
												/>
												<span> {metric}</span>
											</label>
										{/each}
									</div>
								</div>
							</div>
						</div>

						<!-- SEO INFO FIELD -->
						<div>
							<label class="contactFormLabel"
								>What industry is your business in ?
								<div
									class="input-group input-group-divider mb-1 mt-2 flex rounded-lg border border-wild-brown bg-white focus-within:border-wild-funblue"
								>
									<input
										name="industry"
										class="contactFormInput"
										placeholder="Real Estate, Non-Profit, Automotive..."
										value={form?.industry ?? ''}
										required
										disabled={sending}
									/>
								</div>
							</label>
						</div>

						<!-- WEBSITE FIELD -->
						<div>
							<label class="contactFormLabel"
								>Your Website
								<div
									class="input-group input-group-divider mb-1 mt-2 flex rounded-lg border border-wild-brown bg-white focus-within:border-wild-funblue"
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
							</label>
						</div>

						<!-- SITE PURPOSE FIELD -->
						<div>
							<p class="contactFormLabel">Primary purpose of your site</p>
							<div
								class="mt-3 flex w-full gap-2 rounded-lg border border-[#1E3163] bg-[#F8F8F8] p-2"
							>
								<div class="flex flex-wrap gap-3">
									{#each sitePurposes as sitePurpose}
										<label
											class="-rotate-1 cursor-pointer whitespace-nowrap rounded-sm bg-[#2D46B9] px-2 py-1 font-bebas text-lg tracking-wider text-[#F8F8F8] transition-all hover:bg-wild-funblue hover:shadow-md"
											style="filter: drop-shadow(4px 3px 0px #F037A5)"
											for={sitePurpose}
										>
											<input
												use:checkSitePurpose
												type="radio"
												name="sitePurpose"
												id={sitePurpose}
												disabled={sending}
												value={sitePurpose}
												checked={sitePurpose === 'Generate Leads'}
												class="mr-2 rounded-full text-wild-green ring ring-white/60"
											/>
											<span> {sitePurpose}</span>
										</label>
									{/each}
								</div>
							</div>
						</div>

						<button
							type="submit"
							class="mb-1 mt-2 w-full rounded-md bg-wild-darkgreen/80 px-4 py-2 text-center font-bebas text-2xl tracking-wide text-white shadow-sm transition-all duration-75 ease-out hover:border-r-4 hover:border-wild-green hover:bg-wild-darkgreen hover:shadow-md md:max-w-fit md:text-start"
							on:mouseover={() => {
								businessSendHover = true;
							}}
							on:focus
							on:mouseleave={() => {
								businessSendHover = false;
							}}>Send Message</button
						>
						{#if form?.error}
							<p class="error">{form.error}</p>
						{/if}
						{#if sending}
							<p class="text-gray-500">Sending email...</p>
						{/if}
					</form>
				</section>
			</div>

			<CertificationMarquee minified={true} />
			<!-- Location CARD -->
			<div
				class="group m-4 my-8 max-w-lg rounded-lg border-[0.5px] border-wild-brown bg-white/80 p-6 font-courier shadow-md backdrop-blur-md transition-all duration-500 hover:max-w-xl hover:border-[1] md:mx-auto"
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
	:global(label.standardBg) {
		background: #2d46b9;
	}
	:global(label.checkedBgSEO) {
		background: #22c55e;
	}
	:global(label.checkedBgMetric) {
		background: #f97316;
	}
	:global(label.checkedBgSitePurpose) {
		background: #2192ff;
	}
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
	.workList {
		list-style-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='none'%3E%3Cpath d='m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z'/%3E%3Cpath fill='white' d='M18.223 6.239a11.1 11.1 0 0 0-5.508.558l-.344.132a13.1 13.1 0 0 1-6.898.81c-1.002-.155-2.007-.39-2.92-.844a1 1 0 0 1 .784-1.836l.107.045c.721.351 1.547.537 2.333.658a11.1 11.1 0 0 0 5.508-.56l.344-.13a13.1 13.1 0 0 1 6.898-.81c.987.152 2.018.395 2.92.843a1 1 0 0 1 .448 1.342a1.01 1.01 0 0 1-1.34.448c-.728-.342-1.542-.535-2.332-.656m0 6a11.1 11.1 0 0 0-5.508.558l-.344.132a13.1 13.1 0 0 1-6.898.81c-1.002-.155-2.007-.39-2.92-.844a1 1 0 0 1 .784-1.836l.107.045c.721.351 1.547.537 2.333.658a11.1 11.1 0 0 0 5.508-.56l.344-.13a13.1 13.1 0 0 1 6.898-.81c.987.152 2.018.395 2.92.843a1 1 0 0 1 .448 1.342a1.01 1.01 0 0 1-1.34.448c-.728-.342-1.542-.535-2.332-.656m-6.218 6.83l.366-.14c2.301-.92 4.365-.92 5.852-.69c.79.121 1.604.314 2.331.656a1.01 1.01 0 0 0 1.34-.448a1 1 0 0 0-.448-1.342c-.901-.448-1.932-.691-2.919-.843a13.1 13.1 0 0 0-6.532.67l-.366.14a11.1 11.1 0 0 1-5.852.69c-.674-.104-1.376-.255-2.018-.517l-.315-.14a1 1 0 0 0-.89 1.79c.912.455 1.917.69 2.919.843c1.683.26 3.98.27 6.532-.669'/%3E%3C/g%3E%3C/svg%3E");
	}
	.checkList {
		list-style-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M18 6h2v2h-2zm-2 4V8h2v2zm-2 2v-2h2v2zm-2 2h2v-2h-2zm-2 2h2v-2h-2zm-2 0v2h2v-2zm-2-2h2v2H6zm0 0H4v-2h2z'/%3E%3C/svg%3E");
	}
	.coralList {
		list-style-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1em' viewBox='0 0 128 128'%3E%3Cpath fill='%23da4d32' d='M6.47 39.53c2.94-1.73 4.49-.67 5.27.97s.6 9.39 1.38 11.65c.78 2.25 2 5.36 3.15 7.29c1.39 2.34 3.76 5.76 6.79 4.72c1.87-.64 2.98-3.09 3.07-4.47c.09-1.39-2.37-6.18-1.74-11.77c.5-4.39 2.07-5.72 3.31-6.63c1.48-1.09 3.61-1.25 4.99-1.1c1.45.16 2.18.62 2.18 2.79s-.89 5.97-.71 9.08s1.59 5.76 1.24 8.53s-1.74 7.29-1.74 7.29s2.07 3.18 3.98 4.31c2.73 1.62 4.47 1.57 4.47 1.57s2.03-9.29 3.26-13.75C46.76 55 48.91 50.56 48.99 49c.09-1.56-2.46-12.82-3.65-15.41c-1.91-4.14-5.81-10.31-6.79-12.93c-1.66-4.39-.25-7.71 3.62-8.94c2.53-.81 4.34 1.52 6.16 4.64c1.27 2.18 3.09 5.67 4.39 8.62s4.33 11.94 7.71 11.68s5.8-4.19 5.88-6.88c.09-2.68-2.25-12.36-1.91-17.9c.24-3.8 3.22-4.71 4.61-5.22c.95-.35 2.93.91 4.09 2.57s1.78 3.36 2.24 8.62c.45 5.21-.34 12.15 1.83 12.67c1.7.41 1.56-2.36 3.73-1.41c2.35 1.03 2.57 4.78 1.47 6.39c-2.69 3.94-6.41 4.26-7.19 5.21s-3.93 4.91-5.05 6.38s-2.45 2.96-5.22 5.47s-4.3 4.36-5.3 6.3c-1.16 2.24-2.7 7.56-3.48 10.85s-1.04 5.12 0 7.37s2.57 3.56 2.57 3.56s2.49-5.55 7.04-4.56c2.41.53 3.45 2.08 4.14 3.81s.12 5.07-.75 6.63s-1.76 3.36-.17 4.56c1.33.99 3.81.33 6.21-2.32c3.31-3.66 5.11-6.2 5.88-9.45c.75-3.15.7-6.64.17-12.1c-.66-6.71-2.81-11.08-2.02-15.48c.54-2.99 3.01-4.16 3.01-4.16s1.27-.78 4.47 0s3.22 4.81 3.56 8.62c.35 3.81-.58 10.44 2.4 10.52c2.25.06 7.14-.42 10.77-4.14s6.87-12.44 7.04-16.07c.17-3.64-.73-8.61.75-10.69s3.12-3.02 5.63-2.24s2.53 4.18 2.82 5.8c.52 2.94-.17 11.93-.17 11.93s1.96-1.75 3.27-1.51c1.87.35 2.62 1.5 2.62 3.33c0 5.14-5.26 11.89-12.18 18.64c-6.96 6.79-14.57 8.37-15.73 9.94c-1.39 1.88-2.32 5.44-6.64 11.19c-3.6 4.78-8.23 9.65-10.15 11.33c-.66.58 3.77 4.5 3.77 4.5s.7-2.89 3.73-3.23c1.69-.19 2.99.23 3.91 1.16c.74.74 1.26 1.9 1.33 2.71c.17 1.82-.5 4.31-3.09 6.9s-6.09 5.21-24.62 4.87s-24.54.1-25.42-5.03c-.91-5.3 3.33-7.01 3.89-7.29c1.51-.77 2.82-1.24 3.07-1.74c.41-.83-7.54-2.82-12.76-5.88c-4.38-2.57-3.88-4.33-3.65-5.55c.41-2.15 3.19-4.28 5.7-3.76s6.06 2.86 6.06 2.86s5.53 4.34 6.22 3.47c1-1.25.94-4.6-5.22-8.04c-4.34-2.42-9.95-4.06-20.38-10.61c-9.76-6.12-17.55-15.9-19.37-24.85c-1.73-8.47-.43-13.38 2.63-15.18'/%3E%3Cpath fill='%23ee6f5d' d='M9.36 38.64s3.2.17 3.98 1.82s-.17 8.83.61 11.08s2.23 6.03 3.38 7.96c1.39 2.34 5.89 6.49 8.92 5.45c1.87-.64 2.6-1.99 2.68-3.38c.09-1.39-1.64-10.39-1.47-13.42s.67-5.13 1.99-6.41c.86-.83 1.82-1.64 3.2-1.56c1.39.09 2.6.69 2.6 2.86c0 2.16-.43 5.54-.26 8.66s1.42 6.04 1.39 8.83c-.05 4.19-1.21 6.67-1.21 6.67s1.04 2.42 2.94 3.55c2.73 1.62 4.24 2.16 4.24 2.16s1.8-8.44 3.03-12.9c1.39-5.02 5.2-14.71 5.19-16.28c-.01-3.45-1.3-7.96-2.25-10.65s-5.36-10.17-6.49-12.73c-1.56-3.51-2.16-7.79.35-8.66s5.19.52 7.01 3.64c1.27 2.18 3.23 5.41 4.42 8.4c1.72 4.34 3.92 11.35 7.3 11.09s4.05-3.29 4.13-5.98s-1.99-11.61-1.65-17.15c.24-3.8 3.16-4.96 4.37-5.17c1-.17 1.98.09 1.98.09s1.61 3.99 2.31 10.36c.57 5.21-.43 12.21 1.73 12.73c1.7.41 4.16-1.99 6.32-1.04c2.35 1.03 2.51 2.08 1.9 2.77s-7.79 6.32-8.57 7.27s-2.92 3.81-4.04 5.28s-2.84 3.16-5.61 5.67s-4.21 3.87-5.42 5.68c-1.21 1.82-3.54 9.25-4.32 12.54s-1.3 7.53-.26 9.78s4.16 4.67 4.16 4.67s1.99-5.37 4.33-6.15s4.76-.26 5.45 1.47s.17 4.67-.69 6.23c-.87 1.56-3.29 6.15-1.56 8.4s3.64 3.64 7.88 1.73c4.24-1.9 7.7-7.62 9.09-10.65s2.08-5.71 2.6-11.17c.52-5.45-2.22-16.81-2.6-19.83c-.38-2.98-.21-4.81-.21-4.81s1.57-1.06 4.37-.51c3.23.64 4.32 4.97 4.67 8.78s-.69 10.3 1.56 10.3s6.58-.69 10.22-4.42s6.41-11.69 6.58-15.32c.17-3.64-.43-9.44 1.04-11.51s3.64-3.03 6.15-2.25s3.52 3.92 3.81 5.54c.52 2.94-.26 12.21-.26 12.21s1.13-.87 2.42-.61c1.3.26 1.13 2.51.52 4.24s-4.85 8.48-12.38 14.54s-13.15 7.11-14.62 8.93s-5.54 10.17-8.15 13.49c-3.32 4.22-8.77 9.29-9.44 9.96c-.78.78 1.3 2.46 2.42 3.81c1.3 1.56 2.77 3.12 2.77 3.12s1.04-2.16 4.07-2.51s4.16 1.3 4.16 1.3s-1.27 4.98-3.72 8.05c-2.29 2.87-4.16 6.75-22.68 6.41s-22.07-.95-23.46-5.97c-1.13-4.07 1.99-6.22 2.51-6.58c1.13-.78 3.98-1.82 3.81-3.38c-.23-2.03-6.84-2.77-11.95-6.15s-4.44-5.72-4.44-5.72s1.79-1.92 4.34-1.67c2.72.27 5.15 2.4 6.42 3.02c2.25 1.08 10.3 3.6 10.99 2.73c1-1.25.77-3.57-5.45-8.57c-4.73-3.81-13.16-6.49-23.81-13.16C14.2 69.13 9.27 59.83 7.72 53.53c-2.08-8.4 1.64-14.89 1.64-14.89'/%3E%3Cpath fill='%23fbebcc' d='M30.41 56.38s.82-2.45 2.38-1.38c1.57 1.07.31 5.71-1.88 6.08c-2.2.38-4.96-4.64-3.7-5.9c1.36-1.35 3.2 1.2 3.2 1.2M18.43 65.1s-.06-3.51-2.45-3.26s-1.44 3.64-1.44 3.64s-2.57.63-1.94 2.45s3.45 1.25 3.45 1.25s.5 2.95 2.51 2.45s1-2.95 1-2.95s3.2.31 2.7-2.13c-.51-2.46-3.83-1.45-3.83-1.45m16.06 8.34s-1.13-3.14-2.95-2.2s-.25 3.7-.25 3.7s-3.45 1.07-2.76 2.82c.69 1.76 3.76 1.07 3.76 1.07s-.94 3.76 1.38 4.2s2.45-3.83 2.45-3.83s3.51 1.88 4.2-.38S37.69 76 37.69 76s2.57-2.32.63-3.7c-1.95-1.37-3.83 1.14-3.83 1.14m13.86-7.47c-1.88.63-1.76 3.39-1.32 4.64s1.69 3.32 3.2 2.89c1.51-.44 1.76-3.07 1.44-4.7c-.31-1.63-1.7-3.37-3.32-2.83m7.78-19.57s.82-3.26 2.63-3.07c1.82.19 1.13 3.89 1.13 3.89s3.39.19 3.14 2.13s-4.27 2.07-4.27 2.07s-.56 5.21-2.89 4.89c-2.1-.28-.75-5.27-.75-5.27s-4.16-.47-4.08-2.57c.06-1.63 2.38-1.19 2.38-1.19s-1.82-2.26-.06-3.01s2.77 2.13 2.77 2.13m10.91-31.98s-1.16-1.52-2.32-.94c-1.85.93 1.26 6.17 2.7 6.21c2.13.06 3.33-5.96 2.16-6.52c-1.82-.89-2.54 1.25-2.54 1.25M48.13 26.46s.44-2.86 2.11-2.55c1.68.31 1.18 3.85 1.18 3.85s2.86.25 2.86 1.86s-1.8 2.24-1.8 2.24s1.12 3.54-.44 4.17s-2.55-2.67-2.55-2.67s-1.68 3.11-3.11 1.55s1.37-4.66 1.37-4.66s-3.93-1.61-2.8-3.67c1.01-1.8 3.18-.12 3.18-.12m27.17 4.23s.44-4.04 2.05-3.92c1.62.12 1.37 3.05 1.37 3.05s2-.75 2.8.75c.99 1.86-2.11 3.54-2.11 3.54s1.8 2.92-.19 4.1c-2.04 1.21-2.8-2.3-2.92-2.11s-1.68 2.8-3.11 1.43s.62-3.73.62-3.73s-3.33-.48-2.49-2.55c.69-1.68 3.98-.56 3.98-.56M58.02 79.68s.25-4.85 2.36-4.54c2.65.39 1.18 5.41 1.18 5.41s3.98-.99 4.41 1.18S62 84.77 62 84.77s.5 4.1-1.49 4.66s-2.49-3.61-2.49-3.61s-3.23 3.67-4.66 1.55c-1.43-2.11 3.23-4.54 3.23-4.54s-3.99-2.81-2.8-4.29c1.55-1.91 4.23 1.14 4.23 1.14m-.06 18.33s.2-4.12 2.11-3.92c2.92.31 2.3 6.59 1.43 7.46s-7.27.81-6.9-1.49c.37-2.29 3.36-2.05 3.36-2.05m24.61-11.93s-.37-3.73 1.12-4.23s1.74 2.74 1.74 2.74s2.11-2.18 3.11-.93c.99 1.24-.68 2.67-.68 2.67s.99.17.99 1.31c0 1.55-2.8 1.62-2.8 1.62s.5 2.36-1.31 2.49s-1.55-2.18-1.55-2.18s-3.36.99-3.54-1.12c-.19-2.12 2.92-2.37 2.92-2.37m3.05-17.41s-.37-3.11 1.43-3.11s1.55 2.86 1.55 2.86s2.36-1.8 3.05-.19c.68 1.62-1.49 2.61-1.49 2.61s2.11 2.11.93 3.17s-2.74-.99-2.74-.99s-.21 2.81-1.68 2.67c-1.99-.19-1.62-3.73-1.62-3.73s-2.8.68-3.11-1.31c-.3-1.98 3.68-1.98 3.68-1.98M83.69 55c1.21 1.21 5.84-.87 5.66-2.74c-.19-1.92-1.93-1.18-1.93-1.18s1.11-2.63-.81-3.05c-2.3-.49-3.66 6.22-2.92 6.97m16.85 14.73c-1.25-.9-3.48-.25-4.54 1.24c-1.32 1.87-1.43 4.04-.19 4.97s3.47-.25 4.48-1.68c1.18-1.67 1.37-3.72.25-4.53m11.56-12.62s1.06-4.56 3.05-4.29c2.3.31.56 4.54.56 4.54s3.15-.89 3.05 1.31c-.12 2.55-4.23 1.99-4.23 1.99s.5 3.98-1.99 4.04c-1.62.04-1.49-2.18-1.49-2.18s-1.6 2.6-2.98 1.12c-1.74-1.86 1.62-4.48 1.62-4.48s-3.16-1.02-2.3-2.74c1.04-2.11 4.71.69 4.71.69'/%3E%3C/svg%3E");
	}
</style>
