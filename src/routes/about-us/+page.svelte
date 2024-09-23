<script>
	import LinkedInLogo from '~icons/logos/linkedin-icon';
	import CompassIcon from '~icons/line-md/compass-twotone-loop';
	import SvelteIcon from '~icons/devicon/svelte';
	import TailwindIcon from '~icons/devicon/tailwindcss';
	let mouseHovering = false;
</script>

<div class="grid overflow-clip lg:!grid-cols-2">
	<section class="border-r border-black">
		<div
			class=" border-b border-wild-brown bg-white/60 shadow-sm transition-all duration-500 hover:shadow-md"
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
				<li>About Us</li>
			</ol>
		</div>
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
					class="group-hover:animate-wind group-hover:opacity-9 anchor relative font-bebas text-4xl tracking-wide no-underline transition-all duration-1000 before:absolute before:-bottom-[0.3rem] before:left-0 before:h-[3px] before:w-full before:origin-right before:scale-x-0 before:bg-wild-brown before:transition-transform before:duration-300 group-hover:before:origin-left group-hover:before:scale-x-100"
				>
					About <br />
					Wild SEO
				</h1>

				<LinkedInLogo
					class="absolute right-0 top-3 h-10 w-10 translate-x-10 rounded-sm bg-white shadow-sm"
				/>
			</div>
			<p class="mb-3 mt-2 text-center">Happily made with:</p>
			<div class="logo-cloud grid-cols-1 gap-1 lg:!grid-cols-3">
				<a class="logo-item variant-soft-tertiary flex flex-col gap-2" href="/">
					<div>
						<img
							src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/0c99424b-f78c-443f-636d-8b09dc3df800/small"
							class="mx-auto w-1/2"
						/>
					</div>
					<span>Cloudfare</span>
				</a>
				<a class="logo-item variant-soft-tertiary flex flex-col gap-2" href="/">
					<SvelteIcon />
					<span>SvelteKit</span>
				</a>
				<a class="logo-item variant-soft-tertiary flex flex-col gap-2" href="/">
					<TailwindIcon />
					<span>Tailwind CSS</span>
				</a>
			</div>
		</section>
	</section>
	<section class="p-6">
		<div class="relative h-full w-full">
			<div
				class="animate-randomSoftLightOne animateOnce absolute -left-5 -top-9 h-24 w-24 rounded-full bg-wild-green/80 lg:!-top-14 lg:!left-10 lg:!h-44 lg:!w-44"
			></div>
			<div
				class="animate-randomSoftLightTwo animateOnce absolute right-11 top-[36%] h-10 w-10 rounded-full bg-wild-funblue/70 lg:!right-20 lg:!top-[28%] lg:!h-20 lg:!w-20"
			></div>
			<div
				class="animate-randomSoftLightThree animateOnce absolute -bottom-5 left-0 h-16 w-16 rounded-full bg-yellow-500/60 lg:!bottom-20 lg:!h-32 lg:!w-32"
			></div>
			<img
				src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Equipment_Illustration_NEW.png?v=1726375762"
				alt=""
				class="animate-wind relative"
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
	span {
		font-size: 10px;
	}
</style>
