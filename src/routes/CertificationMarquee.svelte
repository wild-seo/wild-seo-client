<script>
	let mouseHovering;
	export let minified;

	const certifications = [
		// CAPSTONE
		{
			src: 'https://cdn.shopify.com/s/files/1/0518/4241/6818/files/uc-davis-seo-capstone-project-logo.png?v=1726391178',
			alt: '',
			title: ''
		},
		// BEAR
		{
			src: 'https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/1febe119-6490-489f-4c0a-b87cee743e00/public',
			alt: '',
			title: ''
		},
		// MDA
		{
			src: 'https://cdn.shopify.com/s/files/1/0518/4241/6818/files/mda-cert.png?v=1726416453',
			alt: '',
			title: ''
		},
		// SEMRUSH
		{
			src: 'https://cdn.shopify.com/s/files/1/0518/4241/6818/files/SEMRush-Cert.png?v=1726416643',
			alt: '',
			title: ''
		},
		// HERON
		{
			src: 'https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/0cf1e3ab-f789-4693-a6b0-0c7c869e0a00/public',
			alt: '',
			title: ''
		},
		// AHREFS
		{
			src: 'https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/713b9c9c-4540-4378-5ba5-2ef899911900/public',
			alt: '',
			title: ''
		},
		// PYGMY 02
		{
			src: 'https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/882fd64e-17be-4bbb-270f-89c3f3aa7800/public',
			alt: '',
			title: ''
		},
		// SEMRUSH
		{
			src: 'https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/b9782345-931e-44b4-c6a0-5193e9afb900/public',
			alt: '',
			title: ''
		}
	];
</script>

<div
	class="relative flex overflow-clip overflow-x-hidden border-b-2 border-t-2 border-black bg-white"
>
	<div
		class="animate-marquee flex w-full items-center gap-8 whitespace-nowrap py-2"
		class:stopAnimation={mouseHovering}
	>
		{#if minified}
			{#each certifications.slice(0, 7) as { src }}
				<img
					{src}
					class="w-1/12 transition-all duration-75 ease-in hover:-rotate-6 hover:scale-110"
				/>
			{/each}
		{:else}
			{#each certifications as { src }}
				<img
					{src}
					class="w-1/12 transition-all duration-75 ease-in hover:-rotate-6 hover:scale-110"
				/>
			{/each}
		{/if}
	</div>

	<div
		class="animate-marquee2 absolute right-0 top-0 flex items-center gap-8 whitespace-nowrap py-2"
		class:stopAnimation={mouseHovering}
	>
		{#each certifications as { src }}
			<img {src} class="w-1/12 transition-all duration-75 ease-in hover:rotate-6 hover:scale-110" />
		{/each}
	</div>
</div>

<style>
	.stopAnimation {
		opacity: 1;
		animation-play-state: paused;
	}
</style>
