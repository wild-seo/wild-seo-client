<script>
	// Icons
	import LinkedInLogo from '~icons/logos/linkedin-icon';
	import CompassIcon from '~icons/line-md/compass-twotone-loop';
	import SvelteIcon from '~icons/devicon/svelte';
	import TailwindIcon from '~icons/devicon/tailwindcss';
	import Icon from '@iconify/svelte';
	// Svelte
	import { fade } from 'svelte/transition';

	let mouseHovering = false;
	let devHovering;

	let devTools = [
		{
			name: 'Cloudflare',
			img: 'https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/0c99424b-f78c-443f-636d-8b09dc3df800/small'
		},
		{ name: 'SvelteKit', icon: 'devicon:svelte', iconClass: 'h-8 w-8' },
		{ name: 'Tailwind CSS', icon: 'devicon:tailwindcss', iconClass: 'h-8 w-8' }
	];

	const randomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
</script>

<div class="grid overflow-clip lg:!grid-cols-6">
	<section class="md:col-span-4 md:border-r md:border-black">
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
		<section class="">
			<div class="flex justify-between p-6">
				<div
					class="group relative flex h-24 w-36 flex-col items-center justify-center rounded-lg border border-wild-brown bg-white/50 shadow-sm transition-all duration-[350ms] hover:border-[2px] hover:bg-white/40 lg:!h-32 lg:!w-48"
					on:mouseover={() => {
						mouseHovering = true;
					}}
					on:mouseleave={() => {
						mouseHovering = false;
					}}
					class:insideShadow={mouseHovering}
				>
					<span class="text-center font-platNomor text-sm tracking-widest">About Us</span>
					<h1
						class="group-hover:animate-wind group-hover:opacity-9 anchor relative flex flex-col font-bebas text-3xl tracking-wide no-underline transition-all duration-1000 before:absolute before:-bottom-[0.3rem] before:left-0 before:h-[3px] before:w-full before:origin-right before:scale-x-0 before:bg-wild-brown before:transition-transform before:duration-300 group-hover:before:origin-left group-hover:before:scale-x-100 lg:!text-4xl"
					>
						Wild SEO
					</h1>

					<LinkedInLogo
						class="absolute right-0 top-3 h-10 w-10 translate-x-10 rounded-sm bg-white shadow-sm"
					/>
				</div>
				<div class="flex flex-col items-end text-end text-sm">
					<p class="font-courier">Established 2024</p>
					<p class="font-courier">Kuala Lumpur</p>
					<div class="my-2 w-1/2 border-b border-wild-brown"></div>
					<p class="font-courier">Team of 2</p>
					<p class="font-courier">Chinese</p>
				</div>
			</div>
			<section class="p-8">
				<p>Hello</p>
			</section>
			<div class="h-[50vh] bg-wild-darkgreen p-6 text-white">
				<p class="mb-4 mt-2 text-center text-xs font-semibold uppercase tracking-widest">
					Happily made with
				</p>
				<div
					class="grid grid-cols-1 gap-[0.4rem] text-center font-courier tracking-wide md:grid-cols-3"
				>
					{#each devTools as { name, icon, iconClass, img }}
						{#if img}
							<div
								class="group"
								on:mouseleave={() => {
									devHovering = null;
								}}
								on:mouseover={() => {
									devHovering = name;
								}}
							>
								<a
									class="devLogoTile mb-1 bg-white/90 hover:bg-white"
									href="https://www.cloudflare.com/"
									target="_blank"
								>
									<div>
										<img src={img} class="mx-auto h-8" />
									</div>
								</a>
								{#if devHovering === name}
									<span class="tracking-wider" transition:fade={{ delay: 100, duration: 200 }}
										>{name}</span
									>
								{/if}
							</div>
						{:else}
							<div
								class="group"
								on:mouseleave={() => {
									devHovering = null;
								}}
								on:mouseover={() => {
									devHovering = name;
								}}
							>
								<a
									class="devLogoTile mb-1 bg-white/90 hover:bg-white"
									href="https://kit.svelte.dev/"
									target="_blank"
								>
									<Icon {icon} class={iconClass} />
								</a>
								{#if devHovering === name}
									<span class="tracking-wider" transition:fade={{ delay: 100, duration: 200 }}
										>{name}</span
									>
								{/if}
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</section>
	</section>
	<!-- ILLUSTRATION SECTION -->
	<section class="h-fit w-fit overflow-clip md:sticky md:top-0 md:col-span-2">
		<div class="relative h-full w-full p-6">
			<!-- Green Circle -->
			<div
				class="randomSoftLightRight animateOnce absolute left-32 top-16 h-[100px] w-[80px] rounded-full bg-wild-green/80"
			></div>
			<!-- Blue Circle -->
			<div
				class="randomSoftLightLeft animateOnce absolute right-14 top-32 h-[70px] w-[70px] rounded-full bg-wild-funblue/70"
			></div>
			<!-- Yellow Circle -->
			<div
				class="randomSoftLightTopRight animateOnce absolute bottom-16 left-16 h-[60px] w-[120px] rounded-full bg-yellow-500/60"
			></div>
			<img
				src="https://cdn.shopify.com/s/files/1/0518/4241/6818/files/Equipment_Illustration_NEW.png?v=1726375762"
				alt=""
				class="animate-wind relative w-full"
			/>
		</div>
		<div class="p-6 pt-0">
			<p class="font-bebas text-3xl font-bold">Only the essentials.</p>
			<p class="font-platNomor text-xl">
				Get your website prepped and ready when going to the Wild
			</p>
		</div>
		<div class="grid grid-cols-3">
			<!-- Heron -->
			<div class="">
				<img
					src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/6c2016ec-842c-4cd7-1878-92900cf98500/public"
					class="h-full w-full object-cover transition-all duration-200 hover:-translate-y-2 hover:shadow-lg"
				/>
			</div>
			<!-- Bear -->
			<div>
				<img
					src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/9b741710-cfe9-4b37-555e-72d52f731f00/public"
					class="h-full w-full object-cover transition-all duration-200 hover:-translate-y-2 hover:shadow-lg"
				/>
			</div>
			<!-- Marmoset -->
			<div>
				<img
					src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/78f7ac0f-f7a4-43fd-638e-a01c19254400/public"
					class="h-full w-full object-cover transition-all duration-200 hover:-translate-y-2 hover:shadow-lg"
				/>
			</div>
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
		font-size: 12px;
	}
	.randomSoftLightRight {
		animation: insertRandomlyRight 3s ease-out forwards;
	}
	.randomSoftLightLeft {
		animation: insertRandomlyLeft 4s ease-out forwards;
	}
	.randomSoftLightTopRight {
		animation: insertRandomlyTopRight 3s ease-in-out forwards;
	}
	.devLogoTile {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border-radius: 0.375rem;
		border: 1px solid black;
		padding: 1rem;
		align-items: center;
		justify-content: center;
		transition-duration: 200ms;
		transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
	}
	.devLogoTile:hover {
		--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width)
			var(--tw-ring-offset-color);
		--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1.5px + var(--tw-ring-offset-width))
			var(--tw-ring-color);
		--tw-ring-opacity: 1;
		--tw-ring-color: rgb(33 146 255 / var(--tw-ring-opacity));
		transform: translateY(-3px);
		--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
			0 2px 4px -2px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
	}
	@keyframes insertRandomlyRight {
		from {
			transform: translate(20vw, 20vh) scale(0.5);
		}
		to {
			transform: scale(1);
		}
	}
	@keyframes insertRandomlyLeft {
		from {
			transform: translate(-20vw, -20vh) scale(0.5);
		}
		to {
			transform: scale(1);
		}
	}
	@keyframes insertRandomlyTopRight {
		from {
			transform: translate(-25vw, 10vh) scale(0.5);
		}
		to {
			transform: scale(1);
		}
	}
</style>
