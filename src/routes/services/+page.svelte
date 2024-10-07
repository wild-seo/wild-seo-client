<script>
	import CompassIcon from '~icons/line-md/compass-twotone-loop';
	import GoogleMeetIcon from '~icons/logos/google-meet';
	import LightningIcon from '~icons/ph/lightning-fill';
	import YarnIcon from '~icons/ph/yarn-duotone';
	import SunriseIcon from '~icons/mdi/sunrise';
	import Toolbox from '~icons/clarity/tools-line';
	import Wrench from '~icons/dashicons/admin-tools';
	import SemrushIcon from '~icons/simple-icons/semrush';
	import detailServices from './detailServices.js';
	import RotatingService from './RotatingService.svelte';
	import MiniContactUs from '../MiniContactUs.svelte';

	export let form;
</script>

<svelte:head></svelte:head>

<div class="w-full">
	<section class="grid shadow-lg lg:!grid-cols-2">
		<div
			class="order-last border-r-0 border-t border-black bg-wild-darkgreen text-white lg:!order-first lg:!border-r lg:!border-t-0"
		>
			<div>
				<div>
					<div class="flex items-center justify-between px-6 pt-6">
						<p class="font-bebas text-3xl tracking-wide lg:!text-4xl">SEO SERVICES</p>

						<div class="flex gap-2">
							<Toolbox class="text-xl lg:!text-3xl" />
							<Wrench class="text-xl lg:!text-3xl" />
						</div>
					</div>
					<div class="mt-2 w-full border-t border-dashed border-white/40"></div>
					<div class="h-[0.5rem] w-full bg-[#133e16]"></div>
					<div
						class="animate-gradient bg-gradient-to-r from-wild-green/30 to-wild-green/60 px-6 py-3 font-folks tracking-wider"
					>
						<p class="leading-relaxed text-white/85">
							Every package guarantees a <b>full-scale project</b> with code and UI/UX enhancements tailored
							to your website.
						</p>
						<p class="mt-3 leading-relaxed tracking-wide text-white/85">
							<b>No paid advertising involved</b> - 100% code-driven solutions for organic SEO growth.
						</p>
						<p class="mt-4 max-w-fit bg-black/80 px-2 py-1 text-sm">
							Project basis. We do not accept monthly retainers.
						</p>
					</div>
					<div class="h-4 w-full"></div>
				</div>
			</div>
		</div>
		<div>
			<div
				class="border-b border-wild-brown bg-white/60 shadow-sm transition-all duration-500 hover:shadow-md"
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
					<li class="text-black">Services</li>
				</ol>
			</div>
			<section>
				<div class="my-3 lg:!m-4">
					<div class="grid grid-cols-3 divide-x-2 divide-wild-brown/30">
						<a href="#gray-heron">
							<RotatingService
								text="Heron"
								secondaryText="Competitor Analysis"
								imgSrc="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/grey_heron_package.png?v=1725853925"
								imgAlt="Grey Heron"
							/>
						</a>
						<a href="#andean-bear">
							<RotatingService
								text="Bear"
								secondaryText="Keyword Forage"
								imgSrc="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/spectacled_bear_package.png?v=1725853925"
								imgAlt="Andean (Spectacled) Bear"
							/>
						</a>
						<a href="#pygmy-marmoset">
							<RotatingService
								text="Marmoset"
								secondaryText="Site Sweep"
								imgSrc="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/pygmy_marmoset_package.png?v=1725853925"
								imgAlt="Pygmy Marmoset on a banana"
							/>
						</a>
					</div>
				</div>
				<div class="bg-wild-brown/90">
					<p class="px-4 py-2 text-end font-courier text-sm text-white/90">
						Post-SEO, guaranteed results within <span class="underline underline-offset-4"
							>14 days</span
						>*
					</p>
				</div>
			</section>
		</div>
	</section>

	<div class="mb-4 grid grid-cols-1 gap-2 bg-black/90 py-4 lg:!gap-4">
		{#each detailServices as { name, titleType, roadmapItems, finishedProductItems, animalId, animal, packageHighlight, imgUrl, imgAlt, imgSrc, price, hours, credit }}
			<div
				class="group grid scale-95 rounded-md border border-black shadow-md transition-all duration-[380ms] ease-in hover:rounded-lg hover:border-2 hover:shadow-xl md:grid-cols-2 lg:!scale-100 lg:!rounded-none hover:lg:!scale-[.965]"
				id={animalId}
			>
				<div class="relative border-r-2 border-black">
					<img src={imgUrl} alt={imgAlt} class="relative h-full w-full object-cover" />
					<div class="absolute bottom-3 right-2 lg:!right-8 lg:!top-8">
						<div class="flex flex-col items-end gap-2 text-end">
							{#each packageHighlight as highlight}
								<p
									class="max-w-fit cursor-cell border-2 border-black bg-white px-2 py-1 font-courier text-xs tracking-wide text-black transition-all hover:-translate-y-[0.2rem] lg:!text-base"
									style="filter: drop-shadow(2px 3px 0px black);"
								>
									{highlight}
								</p>
							{/each}
						</div>
					</div>
					<p class="absolute bottom-2 left-2 font-platNomor text-sm text-white lg:!top-2">
						© {credit}
					</p>
					<div
						class="absolute left-0 top-0 max-w-fit bg-wild-darkgreen/20 px-4 py-1.5 text-end tracking-widest text-white backdrop-blur-md lg:!bottom-0 lg:!top-auto lg:!w-full lg:!max-w-none"
					>
						<div class="flex gap-4 lg:!justify-between">
							<div
								class="flex-shrink-0 self-center p-0 transition-all hover:scale-90 hover:bg-black lg:!p-2"
							>
								<a href={imgSrc} target="_blank">
									<img
										class="h-5 flex-none lg:!h-10"
										src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Natgeo_logo.png?v=1726478046"
									/>
								</a>
							</div>
							<div class="flex items-center gap-2">
								<p class="max-w-fit font-akira text-sm lg:!text-2xl">{animal}</p>

								<p class="hidden lg:!block">•</p>
								<p
									class="hidden max-w-fit text-start font-scratchy text-lg tracking-wider lg:!block lg:!text-end lg:!text-2xl"
								>
									{name}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="card flex h-full w-full flex-col justify-between border-b bg-white">
					<header class="card-header">
						<div>
							<div class="flex items-center justify-between">
								<p class="font-platNomor text-2xl md:text-4xl">
									{name}
									<span class="text-sm tracking-widest text-wild-darkgreen opacity-90">PACKAGE</span
									>
								</p>
								<p class="font-courier text-xs lg:!text-sm">
									<span class="text-lg lg:!text-xl">RM{price}</span>/hour
								</p>
							</div>
							<div class="my-2 border-t border-dashed border-wild-brown"></div>
							<div class="flex flex-col justify-between gap-6 lg:!flex-row lg:!gap-1">
								<section>
									{#if titleType.keywordForageTitle}
										<p class="font-akira text-base">
											SEO Boost <LightningIcon
												class="inline text-amber-500 transition-all hover:-skew-y-12 hover:scale-110"
											/> Roadmap
										</p>
									{/if}
									{#if titleType.siteAuditTitle}
										<p class="font-akira text-base">
											Untangled Site <YarnIcon class="inline text-pink-500" /> Roadmap
										</p>
									{/if}
									{#if titleType.heronAnalysisTitle}
										<p class="font-akira text-base">
											Find New Horizons <SunriseIcon class="inline text-amber-500" /> Roadmap
										</p>
									{/if}
									<div class="my-2"></div>
									<ul class="rightArrowList list-inside">
										{#each roadmapItems as { item, hours, hour, minutes, showGoogleMeetIcon, showSemrushIcon }}
											<li>
												<div class="ml-2 inline-block max-h-fit gap-2 text-sm">
													{#if hours}
														<span class="font-semibold">{hours} hours+</span>
													{/if}
													{#if hour}
														<span class="font-semibold">{hour} hour</span>
													{/if}
													{#if minutes}
														<span class="font-semibold">{minutes} mins</span>
													{/if}
													<p class="inline leading-[2]">{item}</p>
													{#if showGoogleMeetIcon}
														<GoogleMeetIcon
															class="mb-[3px] ml-1 inline h-3 transition-all hover:-rotate-12 hover:scale-125"
														/>
													{/if}
													{#if showSemrushIcon}
														<SemrushIcon
															class="mb-[3px] ml-1 inline h-5 text-[#ff642d] transition-all hover:rotate-12 hover:scale-125"
														/>
													{/if}
												</div>
											</li>
										{/each}
									</ul>
								</section>
								<section class="mb-6 text-end lg:!mb-0">
									<p
										class="relative font-akira text-base before:absolute before:-bottom-1 before:right-0 before:h-[0.15rem] before:w-full before:origin-left before:scale-x-0 before:rounded-full before:bg-wild-funblue before:transition-transform before:duration-500 before:ease-in-out group-hover:before:origin-right group-hover:before:scale-x-100"
									>
										What's Included
									</p>
									<div class="my-2"></div>
									<div class="text-sm leading-8 lg:!leading-10">
										{#each finishedProductItems as { item, number }}
											<p class="capitalize">
												<span class="font-semibold lowercase">{number}x </span>
												{item}
											</p>
										{/each}
									</div>
								</section>
							</div>
						</div>
					</header>
					<footer class="card-footer flex items-center justify-between">
						<button
							class="w-1/2 border-2 border-wild-funblue p-2 font-bebas text-2xl tracking-wider text-wild-funblue transition-all duration-150 ease-in hover:border-l-4 hover:border-r-4 hover:border-blue-300 hover:border-b-blue-400 hover:border-t-blue-400 hover:bg-blue-600 hover:text-white hover:shadow-md"
						>
							REQUEST SEO
						</button>
						<div class="text-end">
							<p class="mb-1">approx. <span class="font-semibold">{hours}</span> hours</p>
							<p
								class="font-platNomor text-4xl font-bold underline decoration-wild-green underline-offset-[5px]"
							>
								{price * hours} MYR
							</p>
						</div>
					</footer>
				</div>
			</div>
		{/each}
	</div>

	<section>
		<div class="mx-auto p-4">
			<div id="pricing">
				<script async src="https://js.stripe.com/v3/pricing-table.js"></script>
				<stripe-pricing-table
					style="width:100%!important"
					pricing-table-id="prctbl_1Q4QSaJAkIp2pqyTXCKOHM9i"
					publishable-key="pk_live_51PtWWMJAkIp2pqyT6pPUoneJCH4Y7WB9WbfKEBJc8oXvnzgXv5rGsYIuOx3Iqdy62I3liN0IwM1XR8bvcUb0UIoR00Pv0KwhTx"
				>
				</stripe-pricing-table>
			</div>
		</div>
	</section>

	<section>
		<MiniContactUs {form} />
	</section>
</div>

<style>
	.rightArrowList {
		list-style-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1.2em' viewBox='0 0 48 48'%3E%3Cpath fill='%2398dd00' d='M44 29L30 17.3v23.4z'/%3E%3Cpath fill='%2398dd00' d='M6 21V8h8v13c0 2.2 1.8 4 4 4h17v8H18c-6.6 0-12-5.4-12-12'/%3E%3C/svg%3E");
	}
</style>
