<script>
	import hero from '$assets/hero_pic.png';
	import greyHeron from '$assets/grey_heron_package.png';
	import spectacledBear from '$assets/spectacled_bear_package.png';
	import pygmyMarmoset from '$assets/pygmy_marmoset_package.png';
	import '../app.css';

	let name = 'Coward';

	let services = [
		{
			name: "Heron Eye's",
			heroPoints: 'Competitor Analysis',
			iconSrc: greyHeron,
			iconAlt: '',
			description: 'Conduct'
		},
		{
			name: "Spectacled Bear's",
			heroPoints: ' Keyword Forage',
			iconSrc: spectacledBear,
			iconAlt: '',
			description: 'Utilize SEMRush, manual'
		},
		{
			name: "Pygmy Marmoset's",
			heroPoints: 'Site Sweep',
			iconSrc: pygmyMarmoset,
			iconAlt: '',
			description: 'cross check, take out your bugs'
		}
	];
</script>

<div>
	<section class="p-8">
		<section class="mx-auto grid max-w-6xl grid-cols-2 items-center gap-8 p-4">
			<div class="">
				<h1 class="pb-2 text-4xl font-bold">Boost your Google search ranking</h1>
				<p class="text-sm uppercase tracking-widest text-gray-600">Organic, niche, cluster SEO</p>
			</div>
			<img src={hero} alt="" />
		</section>
	</section>
	<section class="mx-auto my-10 grid max-w-6xl grid-cols-3 gap-4">
		{#each services as { name, heroPoints, iconSrc, iconAlt, description }}
			<div class="bg-wild-darkgreen relative rounded-lg shadow-md">
				<div class="gap-4">
					<img
						src={iconSrc}
						alt={iconAlt}
						class="absolute -left-3 -top-5 h-32 w-32 rounded-full shadow-md transition ease-in-out hover:scale-110 hover:shadow-lg"
					/>
					<div class="flex shadow-md">
						<div class="bg-wild-darkgreen h-28 w-28 rounded-md"></div>
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
	<section>
		<img
			src="https://s3.ap-southeast-1.wasabisys.com/wild-seo/siargao-wild-seo.jpg"
			alt="Stunning beach from drone view"
		/>
	</section>
	<!-- Certificates section -->
	<section></section>
</div>

<style>
	h2 {
		font-family: 'Scratchy';
	}
</style>
