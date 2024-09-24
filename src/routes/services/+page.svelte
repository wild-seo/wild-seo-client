<script>
	import CompassIcon from '~icons/line-md/compass-twotone-loop';
	import RotatingService from './RotatingService.svelte';
	import { onMount } from 'svelte';
	let innerWidth;

	export const detailServices = [
		{
			name: 'Keyword Forage',
			animalId: 'andean-bear',
			animal: 'Andean Bear',
			packageHighlight: [
				'20+ Optimised Keywords',
				'FREE Site-wide application',
				'Lock-in goal rankings'
			],
			price: 800,
			imgUrl:
				'https://cdn.shopify.com/s/files/1/0518/4241/6818/files/andean-bear-services.png?v=1726475196',
			imgSrc:
				'https://www.nationalgeographic.com/animals/article/andean-paddington-bears-poached-in-peru',
			credit: 'Kevin Schafer'
		},
		{
			name: 'Site Audit Sweep',
			animalId: 'pygmy-marmoset',
			animal: 'Pygmy Marmoset',
			packageHighlight: ['Catch 100% error links', '1-on-1 debrief', 'Faster website speeds'],
			price: 300,
			imgUrl:
				'https://cdn.shopify.com/s/files/1/0518/4241/6818/files/pygmy-marmoset-services.png?v=1726475196',
			imgSrc: 'https://www.bbc.com/news/articles/cl7l1vk5exeo',
			credit: 'Lee Bottomley'
		},
		{
			name: 'Competitor Analysis',
			animalId: 'gray-heron',
			animal: 'Gray Heron',
			packageHighlight: [
				'Full-sweep identical keywords',
				'Identify mutuals',
				'Rank ahead of your peers'
			],
			price: 500,
			imgUrl:
				'https://cdn.shopify.com/s/files/1/0518/4241/6818/files/gray-heron-services.png?v=1726475196',
			imgSrc:
				'https://www.nationalgeographic.com/animals/article/gray-heron-sighting-united-states-expanding-range',
			credit: 'Skyler Kardell'
		}
	];

	onMount(async () => {});
</script>

<svelte:window bind:innerWidth />

<section>
	<section class="mb-4 grid border-b border-wild-brown shadow-lg lg:!grid-cols-2">
		<div
			class="order-last border-r-0 border-t border-black bg-white p-4 lg:!order-first lg:!border-r lg:!border-t-0"
		>
			<div class="mx-auto flex h-full max-w-lg items-center py-3">
				<div>
					<p class="font-bebas text-5xl tracking-wider">SEO SERVICES</p>
					<p>Our pricing is one and done</p>
					<p>No retainers</p>
					<p>{innerWidth}</p>
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
			<div class="my-3 lg:!m-4">
				<div class="grid grid-cols-3 divide-x-2 divide-wild-brown/30">
					<a href="#gray-heron">
						<RotatingService
							text="Heron"
							secondaryText="Competitor Analysis"
							imgSrc="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/grey_heron_package.png?v=1725853925"
						/>
					</a>
					<a href="#andean-bear">
						<RotatingService
							text="Bear"
							secondaryText="Keyword Forage"
							imgSrc="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/spectacled_bear_package.png?v=1725853925"
						/>
					</a>
					<a href="#pygmy-marmoset">
						<RotatingService
							text="Marmoset"
							secondaryText="Site Sweep"
							imgSrc="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/pygmy_marmoset_package.png?v=1725853925"
						/>
					</a>
				</div>
			</div>
		</div>
	</section>

	<div class="mb-4 grid grid-cols-1 gap-2 lg:!gap-4">
		{#each detailServices as { name, animalId, animal, packageHighlight, imgUrl, imgSrc, price, credit }}
			<div
				class="grid scale-95 overflow-clip rounded-md border border-black shadow-md transition-all duration-[380ms] ease-in hover:rounded-lg hover:border-2 hover:shadow-xl md:grid-cols-2 lg:!scale-100 lg:!rounded-none hover:lg:!scale-[.965]"
				id={animalId}
			>
				<div class="relative border-r-2 border-black">
					<img src={imgUrl} class="relative h-full w-full object-cover" />
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
							<p class="font-platNomor text-4xl">{name}</p>
							<div class="my-2 border-t border-dashed border-wild-brown"></div>
							<p class="font-courier text-xl">{packageHighlight}</p>
						</div>
					</header>
					<section class="p-4">okay..!</section>
					<footer class="card-footer flex items-center justify-between">
						<button
							class="w-1/4 border-2 border-wild-funblue p-2 font-bebas text-2xl tracking-wider text-wild-funblue transition-all duration-150 ease-in hover:border-l-4 hover:border-r-4 hover:border-blue-300 hover:border-b-blue-400 hover:border-t-blue-400 hover:bg-blue-600 hover:text-white hover:shadow-md"
						>
							ORDER
						</button>
						<p
							class="font-platNomor text-4xl font-bold underline decoration-wild-green underline-offset-[5px]"
						>
							RM{price}
						</p>
					</footer>
				</div>
			</div>
		{/each}
	</div>
</section>
