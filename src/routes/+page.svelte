<script>
	import '../app.css';
	import WebLogo from '~icons/iconoir/internet';

	export let form;

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
				<div class="paper-bg mt-3 grid grid-cols-1 rounded-lg p-4 shadow-md">
					{#if form?.missing}
						<p class="error">The email field is required</p>
					{/if}
					<form action="?/enquire">
						<p class="mb-2 text-xs font-semibold uppercase tracking-widest">Your Site</p>
						<div
							class="input-group input-group-divider flex rounded-lg border-2 border-wild-brown bg-white"
						>
							<div
								class="input-group-shim max-w-fit bg-slate-50 p-2 text-sm text-black/80 shadow-lg"
							>
								https://
							</div>
							<input
								name="website"
								type="url"
								class="w-full text-sm"
								placeholder="www.example.com"
							/>
						</div>

						<button
							class="mx-auto mt-2 w-1/3 rounded-md bg-emerald-700 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-md"
						>
							Connect
						</button>
					</form>
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
			<div class="mx-auto grid max-w-lg grid-cols-3 items-center justify-between gap-6 p-6">
				<div>
					<img
						src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/uc-davis-seo-capstone-project-logo.png?v=1726391178"
					/>
				</div>
				<div>
					<img
						src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/mda-cert.png?v=1726416453"
					/>
				</div>
				<div>
					<img
						src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/SEMRush-Cert.png?v=1726416643"
					/>
				</div>
			</div>
		</div>
	</section>
	<section>
		<p class="font-bebas mx-auto max-w-md text-center text-5xl font-bold">
			Transform your current search to something better
		</p>
		<p class="font-scratchy mx-auto max-w-xl text-center text-3xl tracking-wider">
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
	<!-- Certificates section -->
	<section>
		<div class="mx-auto mb-8 grid max-w-4xl p-4 md:grid-cols-2">
			<img
				src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Equipment_Illustration_NEW.png?v=1726375762"
				alt=""
			/>
			<div></div>
		</div>
	</section>
</div>

<style>
	h2 {
		font-family: 'Scratchy', 'sans-serif';
	}
	.paper-bg {
		background-image: url('https://cdn.shopify.com/s/files/1/0518/4241/6818/files/paper-texture-bg.png?v=1726473014');
	}
</style>
