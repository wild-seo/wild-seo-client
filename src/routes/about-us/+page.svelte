<script>
	import LinkedInLogo from '~icons/logos/linkedin-icon';
	let mouseHovering = false;
</script>

<div class="grid overflow-clip md:grid-cols-2">
	<section class="p-6">
		<div
			class="group relative flex h-48 w-48 items-center justify-center rounded-lg border border-wild-brown bg-white/50 transition-all duration-[350ms] hover:border-[0.5px] hover:bg-white/40"
			on:mouseover={() => {
				mouseHovering = true;
			}}
			on:mouseleave={() => {
				mouseHovering = false;
			}}
			class:insideShadow={mouseHovering}
		>
			<h1
				class="group-hover:animate-wind font-bebas text-4xl tracking-wide duration-300 group-hover:opacity-80"
			>
				About Us
			</h1>

			<LinkedInLogo class="absolute right-0 top-3 h-10 w-10 translate-x-10 bg-white" />
		</div>
	</section>
	<section class="p-6">
		<div class="relative h-full w-full">
			<div
				class="animate-randomSoftLightOne animateOnce absolute left-0 top-0 h-44 w-44 rounded-full bg-wild-green/80"
			></div>
			<div
				class="animate-randomSoftLightTwo animateOnce absolute right-0 top-1/3 h-20 w-20 rounded-full bg-wild-funblue/70"
			></div>
			<div
				class="animate-randomSoftLightThree animateOnce absolute bottom-12 left-0 h-32 w-32 rounded-full bg-yellow-500/60"
			></div>
			<img
				src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Equipment_Illustration_NEW.png?v=1726375762"
				alt=""
				class="animate-wind relative z-10"
			/>
		</div>
	</section>
</div>

<style>
	.insideShadow {
		box-shadow:
			rgba(145, 79, 30, 0.25) 0px 30px 60px -12px inset,
			rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
	}
	.animateOnce {
		animation-iteration-count: 1;
	}
</style>
