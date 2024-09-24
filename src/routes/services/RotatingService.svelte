<script>
	import { onMount } from 'svelte';

	let innerWidth;
	let speed = 50;
	let size = 8;
	export let text = '';
	export let secondaryText = '';
	export let imgSrc;
	let repeat = 1;
	let separator = ' • ';

	onMount(async () => {
		if (innerWidth < 500) {
			size = 6.5;
		}
	});

	if (innerWidth < 500) {
		size = 2;
	}

	let charactersArray = [];
	charactersArray = [...Array(repeat)]
		.map((_) => [...text].concat([...separator]).concat([...secondaryText]))
		.concat([...separator])
		.flat();
</script>

<svelte:window bind:innerWidth />

<section>
	<div class="relative w-full">
		<div style="--size: {size}rem;" class="sealBackground group relative mx-auto">
			<img src={imgSrc} class="absolute p-[15%] transition-all group-hover:p-[13%]" />
			<div
				class="seal font-courier text-xs transition-all duration-200 ease-out group-hover:opacity-90 lg:!text-sm"
				style="--size: {size}rem; --speed: {speed * 1000}ms;"
			>
				{#each charactersArray as char, index}
					<div class="char" style="--angle:{`${(1 / charactersArray.length) * index}turn`}">
						{#if index < charactersArray.findIndex((char) => char === '•')}
							<b>{char}</b>
						{:else}
							{char}
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes rotation {
		0% {
			transform: rotate(0turn);
		}
		100% {
			transform: rotate(1turn);
		}
	}
	.seal {
		position: relative;
		width: var(--size);
		height: var(--size);
		border-radius: 100%;
		animation: rotation var(--speed) linear infinite;
	}
	.sealBackground {
		width: var(--size);
		height: var(--size);
	}
	.char {
		width: 1em;
		height: 100%;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) rotate(var(--angle, 0deg));
		text-align: center;
		text-transform: uppercase;
	}
</style>
