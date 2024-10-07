<script>
	import Icon from '@iconify/svelte';
	import SealIcon from '~icons/noto/seal';
	import BeetleIcon from '~icons/noto/beetle';
	import MailIcon from '~icons/fluent/mail-32-regular';
	import PenIcon from '~icons/fluent/pen-sparkle-16-filled';
	import { enhance } from '$app/forms';
	import { ConicGradient } from '@skeletonlabs/skeleton';
	import { fade, blur } from 'svelte/transition';

	let mouseHovering = false;
	let sendingMiniMessage = false;
	export let form;

	const randomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const conicStops = [
		{ color: 'transparent', start: 0, end: 10 },
		{ color: 'rgb(var(--color-warning-50))', start: 10, end: 20 },
		{ color: 'transparent', start: 20, end: 30 },
		{ color: 'rgb(var(--color-warning-100))', start: 30, end: 40 },
		{ color: 'transparent', start: 40, end: 50 },
		{ color: 'rgb(var(--color-warning-200))', start: 50, end: 60 },
		{ color: 'transparent', start: 60, end: 70 },
		{ color: 'rgb(var(--color-warning-300))', start: 70, end: 80 },
		{ color: 'transparent', start: 80, end: 85 },
		{ color: 'rgb(var(--color-warning-400))', start: 85, end: 90 },
		{ color: 'transparent', start: 90, end: 95 },
		{ color: 'rgb(var(--color-warning-500))', start: 95, end: 100 }
	];
</script>

<section
	class="grid md:animate-gradient lg:!grid-cols-2"
	style="background-image: url('https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/51c6c5c1-3323-42ce-c425-a4adf9f49900/public')"
>
	<div class="flex flex-col items-center justify-center pb-0 pt-12 text-white md:pb-20 md:pt-20">
		<section class="relative">
			<div
				class:yellowShadow={mouseHovering}
				class="relative bg-black/70 p-8 saturate-150 backdrop-blur-sm transition-all duration-300 ease-out md:rounded-lg md:border-8 md:border-wild-mossgreen/50 md:bg-black/50 hover:md:border-wild-mossgreen/70"
			>
				<p class="font-bebas text-4xl tracking-wide">Got a Question ?</p>
				<p class="my-2 font-bebas text-lg tracking-wide text-wild-green/90">
					Or feedback / complaint / juicy gossip / custom pricing
				</p>
				<div class="mb-4 mt-2 w-full border-b border-wild-brown/50"></div>
				{#if form?.miniWarning}
					<p
						class="mb-3 flex max-w-fit items-center bg-sky-600 pl-2 font-courier text-xs text-white"
						transition:fade
					>
						{form?.miniMessage ?? 'Please do not leave the field(s) empty'}
						<span class="mr-2"></span>
						<SealIcon class="h-7 w-7 bg-white p-0.5" />
					</p>
				{/if}
				{#if form?.success}
					<p
						class="mb-3 flex max-w-fit items-center bg-emerald-600 pl-2 font-courier text-xs text-white"
						transition:fade
					>
						{form?.miniMessage ?? 'Thank you for your message!'}
						<span class="mr-3"></span>
						<BeetleIcon class="h-7 w-7 bg-white p-0.5 transition-all hover:scale-110" />
					</p>
				{/if}

				<form
					method="POST"
					action="?/contact"
					use:enhance={({ submitter }) => {
						submitter.className += 'disabled';
						sendingMiniMessage = true;
						return async ({ result, update }) => {
							sendingMiniMessage = false;
							submitter.classList.remove('disabled');
							update();
						};
					}}
				>
					<label class="mb-4 flex flex-col gap-2 font-platNomor text-white">
						<p class="flex items-center justify-between">
							Drop us a quick message:
							<MailIcon class="text-wild-green" />
						</p>
						<textarea
							required
							name="message"
							rows="3"
							class="rounded-md font-folks tracking-wide text-black/90"
							placeholder="Hi, I'd like to..."
						/>
					</label>
					<label class="flex flex-col gap-2 font-platNomor text-white">
						<p class="flex items-center justify-between">
							How do we get back to you ?
							<PenIcon class="text-wild-green" />
						</p>
						<input
							required
							name="email"
							type="email"
							placeholder="email@example.com"
							class="rounded-lg font-folks tracking-wide text-black/90"
						/>
					</label>
					<button
						on:mouseover={() => {
							mouseHovering = true;
						}}
						on:mouseleave={() => {
							mouseHovering = false;
						}}
						class="mt-4 rounded-md border-4 border-wild-mossgreen bg-wild-darkgreen px-4 py-2 font-bebas text-xl text-white shadow-md saturate-150 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:saturate-200"
						type="submit"
					>
						{#if sendingMiniMessage}
							<div in:fade>
								<ConicGradient stops={conicStops} spin width="w-6" class="mr-2" />
							</div>
						{/if}
						{#if !sendingMiniMessage}
							<span in:blur>Send Message</span>
						{/if}
					</button>
				</form>
			</div>
			<!-- Water Droplets Illustration -->
			<!-- <img
			src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/61ba4524-1cc2-4136-453d-8bd75da2e500/public"
		/> -->
			<img
				src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/ebed91dc-6c78-4461-c267-a9d5345d6f00/public"
				class="absolute -right-4 -top-5 h-20 w-20 -rotate-12 transition-all ease-in hover:-rotate-0 md:-right-10 md:h-24 md:w-24"
			/>
		</section>
	</div>
	<div
		class="m-5 animate-gradient rounded-xl bg-gradient-to-t from-wild-mossgreen/40 via-wild-funblue/90 to-blue-950 py-6 shadow-xl backdrop-blur-sm md:py-0"
	>
		<section class="grid h-full grid-cols-3 gap-3">
			<!-- First ROW -->
			<div
				class="scaleAnimation max-h-fit max-w-fit place-self-end"
				style="transform-origin: 0% 50%;--randomTime:{randomInt(5, 10)}s;--randomDelay:{randomInt(
					1000,
					5000
				)}ms;"
			>
				<Icon
					icon="ion:chatbubble-outline"
					class="h-10 w-10 translate-y-3 text-white md:translate-x-8 md:translate-y-6"
				/>
			</div>
			<div></div>
			<div
				class="scaleAnimationRight max-h-fit max-w-fit self-end"
				style="transform-origin: 0% 0%;--randomTime:{randomInt(5, 10)}s;--randomDelay:{randomInt(
					1000,
					5000
				)}ms;"
			>
				<Icon
					icon="quill:chat"
					class="h-8 w-8 -translate-x-3 text-white md:-translate-x-6 md:translate-y-6"
				/>
			</div>
			<!-- Second ROW -->
			<div
				class="scaleAnimation max-h-fit max-w-fit place-self-end self-center"
				style="transform-origin: 0% 100%;--randomTime:{randomInt(5, 10)}s;--randomDelay:{randomInt(
					1000,
					5000
				)}ms;"
			>
				<Icon
					icon="streamline:chat-bubble-oval-smiley-1"
					class="h-12 w-12 -translate-x-6 text-white md:h-16 md:w-16 md:-translate-x-0"
				/>
			</div>
			<Icon
				icon="ooui:speech-bubbles-ltr"
				class="h-28 w-28 place-self-center text-white transition-all duration-500 ease-in-out hover:scale-110 md:h-36 md:w-36"
			/>
			<div
				class="scaleAnimationRight max-h-fit max-w-fit self-center"
				style="transform-origin: 100% 50%;--randomTime:{randomInt(5, 10)}s;--randomDelay:{randomInt(
					1000,
					5000
				)}ms;"
			>
				<Icon icon="bi:chat-right-quote" class="h-12 w-12 translate-x-6 text-white" />
			</div>
			<!-- Third ROW -->
			<div
				class="scaleAnimation max-h-fit max-w-fit place-self-end self-start"
				style="transform-origin: 100% 100%;--randomTime:{randomInt(
					5,
					10
				)}s;--randomDelay:{randomInt(1000, 5000)}ms;"
			>
				<Icon icon="bi:chat-heart" class="h-8 w-8 -translate-y-6 text-white md:translate-x-8" />
			</div>
			<div></div>
			<div
				class="scaleAnimationRight max-h-fit max-w-fit"
				style="--randomTime:{randomInt(5, 10)}s;--randomDelay:{randomInt(1000, 5000)}ms;"
			>
				<Icon
					icon="clarity:bubble-exclamation-line"
					class="h-10 w-10 text-white md:-translate-x-6 md:-translate-y-6"
				/>
			</div>
		</section>
	</div>
</section>

<style>
	.scaleAnimation {
		animation: scaleAnimation var(--randomTime) alternate ease-in-out infinite;
		animation-delay: var(--randomDelay);
	}
	.scaleAnimationRight {
		animation: scaleAnimationRight var(--randomTime) alternate ease-in-out infinite;
		animation-delay: var(--randomDelay);
	}

	@keyframes scaleAnimation {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2) rotate(10deg);
		}
		100% {
			transform: scale(1) rotate(0deg);
		}
	}
	@keyframes scaleAnimationRight {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2) rotate(-10deg);
		}
		100% {
			transform: scale(1) rotate(0deg);
		}
	}
	.yellowShadow {
		box-shadow:
			rgba(253, 224, 71, 0.4) 5px 5px,
			rgba(253, 224, 71, 0.3) 10px 10px,
			rgba(253, 224, 71, 0.2) 15px 15px,
			rgba(253, 224, 71, 0.1) 20px 20px,
			rgba(253, 224, 71, 0.05) 25px 25px;
	}
</style>
