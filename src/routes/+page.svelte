<script>
	let name = 'Coward';

	let services = [
		{
			name: 'On-page SEO',
			heroPoints: ['Technical'],
			iconSrc: '',
			iconAlt: '',
			description: ''
		},
		{
			name: 'SEO with A.I Training',
			heroPoints: ['Technical'],
			iconSrc: '',
			iconAlt: '',
			description: ''
		},
		{
			name: 'Competitor Analysis',
			heroPoints: ['Technical'],
			iconSrc: '',
			iconAlt: '',
			description: ''
		},
		{
			name: 'Backlink Disavow Services',
			heroPoints: ['Technical'],
			iconSrc: '',
			iconAlt: '',
			description: ''
		}
	];
</script>

<div>
	<section class="bg-green-100 p-8">
		<div class="mx-auto max-w-6xl">
			<h1 class="pb-2 text-4xl font-bold">Boost your Google search ranking</h1>
			<p class="text-sm uppercase tracking-widest text-gray-600">Organic, niche, cluster SEO</p>

			<section class="grid grid-cols-3 gap-4 py-10">
				{#each services as { name, heroPoints, iconSrc, iconAlt, description }, index (id)}
					<div class="bg-wild-lightgreen rounded-md p-4 shadow-md">
						<div class="flex gap-4">
							<img src={iconSrc} alt={iconAlt} />
							<p class="text-xl font-bold">{name}</p>
						</div>
					</div>
				{/each}
			</section>
		</div>
	</section>
	<section class="p-5 md:p-10">
		<h2 class="text-xl font-extrabold">I'm crazy</h2>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	</section>
</div>

<div class="ml-4 mt-4 h-20 w-20 rounded-md bg-black"></div>
