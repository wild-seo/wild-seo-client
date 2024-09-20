<script>
	export const services = [
		{
			name: 'Keyword Forage',
			animal: 'Andean Bear',
			packageHighlight: ['20+ Keywords', ''],
			price: 800,
			imgUrl:
				'https://cdn.shopify.com/s/files/1/0518/4241/6818/files/andean-bear-services.png?v=1726475196',
			imgSrc:
				'https://www.nationalgeographic.com/animals/article/andean-paddington-bears-poached-in-peru',
			credit: 'Kevin Schafer'
		},
		{
			name: 'Site Audit Sweep',
			animal: 'Pygmy Marmoset',
			packageHighlight: 'FREE',
			price: 300,
			imgUrl:
				'https://cdn.shopify.com/s/files/1/0518/4241/6818/files/pygmy-marmoset-services.png?v=1726475196',
			imgSrc: 'https://www.bbc.com/news/articles/cl7l1vk5exeo',
			credit: 'Lee Bottomley'
		},
		{
			name: 'Competitor Analysis',
			animal: 'Gray Heron',
			packageHighlight: '5 Competitors Included',
			price: 500,
			imgUrl:
				'https://cdn.shopify.com/s/files/1/0518/4241/6818/files/gray-heron-services.png?v=1726475196',
			imgSrc:
				'https://www.nationalgeographic.com/animals/article/gray-heron-sighting-united-states-expanding-range',
			credit: 'Skyler Kardell'
		}
	];
</script>

<div class="mb-4 grid grid-cols-1 gap-4">
	{#each services as { name, animal, packageHighlight, imgUrl, imgSrc, price, credit }}
		<div
			class="grid grid-cols-2 overflow-clip shadow-md transition-all duration-[420ms] ease-out hover:scale-[.985] hover:rounded-lg hover:shadow-xl"
		>
			<div class="relative">
				<img src={imgUrl} class="relative" />
				<p class="absolute left-2 top-2 font-platNomor text-sm text-white">© {credit}</p>
				<div
					class="absolute bottom-0 left-0 w-full bg-wild-darkgreen/20 px-4 py-1.5 text-end tracking-widest text-white backdrop-blur-md"
				>
					<div class="flex justify-between">
						<div class="self-center p-2 transition-all hover:scale-90 hover:bg-black">
							<a href={imgSrc} target="_blank">
								<img
									class="h-10 flex-none"
									src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Natgeo_logo.png?v=1726478046"
								/>
							</a>
						</div>
						<div class="flex items-center gap-2">
							<p class="font-akira text-2xl">{animal}</p>
							<p>•</p>
							<p class="font-scratchy text-2xl tracking-wider">{name}</p>
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
