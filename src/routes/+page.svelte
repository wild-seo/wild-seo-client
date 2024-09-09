<script>
	import '../app.css';

	let name = 'Coward';

	let services = [
		{
			name: "Heron Eye's",
			heroPoints: 'Competitor Analysis',
			iconSrc:
				'https://cdn.shopify.com/s/files/1/0518/4241/6818/files/grey_heron_package.png?v=1725853925',
			iconAlt: '',
			description: 'Conduct'
		},
		{
			name: "Spectacled Bear's",
			heroPoints: 'Keyword Forage',
			iconSrc:
				'https://cdn.shopify.com/s/files/1/0518/4241/6818/files/spectacled_bear_package.png?v=1725853925',
			iconAlt: '',
			description: 'Utilize SEMRush, manual'
		},
		{
			name: "Pygmy Marmoset's",
			heroPoints: 'Site Sweep',
			iconSrc:
				'https://cdn.shopify.com/s/files/1/0518/4241/6818/files/pygmy_marmoset_package.png?v=1725853925',
			iconAlt: '',
			description: 'cross check, take out your bugs'
		}
	];
</script>

<div>
	<section class="p-4 md:p-8">
		<section class="mx-auto grid max-w-6xl items-center gap-8 p-4 md:grid-cols-2">
			<div class="">
				<h1 class="pb-2 text-5xl font-bold leading-tight">
					Get
					<span
						class="bg-gradient-to-br from-blue-500 to-cyan-300 box-decoration-clone bg-clip-text text-transparent"
					>
						noticed
					</span>
					on the<br />
					World <span class="underline"> Wild</span> Web
				</h1>
				<p class="mt-2 text-xl uppercase tracking-widest text-gray-400">
					Organic, niche, cluster SEO
				</p>
			</div>
			<img
				src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Camp_with_Tree_Illustration.png?v=1725854183"
				alt=""
			/>
		</section>
	</section>
	<section class="mx-auto my-10 grid max-w-6xl gap-4 md:grid-cols-3">
		{#each services as { name, heroPoints, iconSrc, iconAlt, description }}
			<div class="relative rounded-lg bg-wild-darkgreen shadow-md">
				<div class="gap-4">
					<img
						src={iconSrc}
						alt={iconAlt}
						class="absolute -left-3 -top-5 h-32 w-32 rounded-full shadow-md transition ease-in-out hover:scale-110 hover:shadow-lg"
					/>
					<div class="flex shadow-md">
						<div class="h-28 w-28 rounded-md bg-wild-darkgreen"></div>
						<div class="bg-wild-darkgreen p-5 text-white">
							<h2 class="font-scratchy text-3xl tracking-wider">{name}</h2>
							<p class="mt-1 text-sm uppercase tracking-widest">{heroPoints}</p>
						</div>
					</div>
					<div class="bg-wild-mossgreen p-5 text-white">
						<p>{description}</p>
					</div>
				</div>
			</div>
		{/each}
	</section>

	<!-- Sustainability Image section -->
	<section class="my-8 grid md:grid-cols-2">
		<img
			src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/siargao-wild-seo.jpg?v=1725720499"
			alt="Stunning beach from drone view"
		/>
		<div class="content-center">
			<div class="mx-auto max-w-md">
				<p class="text-5xl font-bold">Find a new ocean.</p>
			</div>
		</div>
	</section>
	<!-- Certificates section -->
	<section>
		<div class="mx-auto grid max-w-6xl p-4 md:grid-cols-2">
			<img
				src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Equipment_Illustration.png?v=1725854183"
				alt=""
			/>
		</div>
	</section>
</div>

<style>
	h2 {
		font-family: 'Scratchy';
	}
</style>
