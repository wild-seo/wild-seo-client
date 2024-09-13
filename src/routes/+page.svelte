<script>
	import '../app.css';
	import WebLogo from '~icons/iconoir/internet';

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
		<section class="mx-auto grid max-w-5xl items-center gap-8 p-0 md:grid-cols-2 md:p-4">
			<img
				src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Camping_Illustration.png?v=1726236736"
				alt=""
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
					<div class="mx-auto flex w-fit items-center gap-2 md:w-auto">
						<span class="font-bebas">World <span class="underline"> Wild</span> Web</span>
						<WebLogo class="h-10 w-10" />
					</div>
				</h1>
				<p class="font-platNomor mt-2 text-sm uppercase tracking-widest text-black/70 md:text-xl">
					Rank your website higher on Google
				</p>
				<div class="grid grid-cols-1 rounded-full p-4 shadow-md">
					<span>Email:</span>
					<input />
					<button>Contact</button>
				</div>
			</div>
		</section>
	</section>
	<section class="mx-auto my-10 grid max-w-5xl gap-3 p-4 md:grid-cols-3">
		{#each services as { name, heroPoints, iconSrc, iconAlt, description }}
			<div class="relative rounded-lg bg-wild-darkgreen shadow-md">
				<div class="gap-4">
					<img
						src={iconSrc}
						alt={iconAlt}
						class="absolute -left-2 -top-2 h-24 w-24 rounded-full shadow-md transition ease-in-out hover:scale-110 hover:shadow-lg md:-left-3 md:-top-5 md:h-32 md:w-32"
					/>
					<div class="flex shadow-md">
						<div class="h-24 w-24 rounded-md bg-wild-darkgreen md:h-28 md:w-28"></div>
						<div class="bg-wild-darkgreen p-5 text-white">
							<h2 class="font-scratchy text-3xl tracking-wider">{name}</h2>
							<p class="font-platNomor mt-1 text-sm uppercase tracking-widest opacity-80">
								{heroPoints}
							</p>
						</div>
					</div>
					<div class="rounded-b-lg bg-wild-mossgreen p-5 text-white">
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
				<p class="font-bebas text-5xl font-bold">Find a new ocean.</p>
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
		font-family: 'Scratchy', 'sans-serif';
	}
</style>
