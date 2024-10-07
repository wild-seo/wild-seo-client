<script>
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { countries } from 'countries-list';
	import getUnicodeFlagIcon from 'country-flag-icons/unicode';
	import MovingCloudIcon from '~icons/raphael/cloud';
	import CircleCloudIcon from '~icons/streamline/sun-cloud-solid';
	import HerbIcon from '~icons/noto/herb';
	import BabyIcon from '~icons/noto/baby-chick';
	import CloseIcon from '~icons/mingcute/close-square-fill';

	const modalStore = getModalStore();

	function nicelyFormatDays(totalDays) {
		var years = Math.floor(totalDays / 365);
		var months = Math.floor((totalDays % 365) / 30);
		var days = Math.floor((totalDays % 365) % 30);

		return { years, months, days };
	}
</script>

{#if $modalStore[0]}
	<section
		class="w-modal relative rounded-lg border-4 border-wild-seriousblue/40 bg-white/50 backdrop-blur-sm"
	>
		<button
			on:click={() => {
				modalStore.close();
			}}
			class="absolute -right-3 -top-3 z-20"
		>
			<CloseIcon class="h-7 w-7 bg-white text-red-500" />
		</button>
		<div class="p-4 shadow-md">
			<div
				class="relative flex flex-col items-center justify-between gap-4 rounded-lg bg-wild-funblue p-3 shadow-md backdrop-blur-md md:flex-row md:gap-0 md:p-4"
			>
				<MovingCloudIcon class="absolute -left-5 -top-7 h-12 w-12 text-white" />
				<CircleCloudIcon class="absolute -bottom-2 -right-3 h-14 w-14 text-white" />
				<div class="flex-shrink-0">
					<p class="font-bebas text-2xl text-white/90 md:text-3xl">We found a website!</p>
					<p class="font-platNomor text-sm tracking-wide text-white">
						This is how it appears in search results.
					</p>
				</div>
				{#if $modalStore[0].meta.registarName != ''}
					<div class="rounded-md bg-white/80 px-4 py-2">
						<p class="font-platNomor text-sm uppercase tracking-wider">Domain Registrar</p>
						<p class="font-bebas text-xl tracking-wide">{$modalStore[0].meta.registarName ?? ''}</p>
					</div>
				{/if}
			</div>
			<div class="my-2"></div>
			<div class="grid grid-cols-3 items-center gap-1 rounded-md border-wild-green">
				<div class="col-span-3 h-full md:col-span-1">
					{#if $modalStore[0].meta.image}
						<div class="py-4 md:p-4">
							<img src={$modalStore[0].meta.image ?? ''} class="rounded-lg object-contain" />
						</div>
					{/if}
				</div>
				<div class="col-span-3 overflow-clip rounded-lg shadow-md md:col-span-2">
					<p class="bg-wild-brown px-2 py-1 font-courier text-sm text-white">
						{$modalStore[0].meta.url ?? ''}
					</p>
					<div class="bg-white px-4 py-2">
						<a href={$modalStore[0].meta.url} target="_blank">
							<p
								class="mb-1 font-bebas text-xl font-semibold text-wild-funblue underline underline-offset-2"
							>
								{$modalStore[0].meta.title ?? ''}
							</p>
						</a>
						<p
							class="overflow-hidden font-courier text-sm tracking-wide text-zinc-500"
							style="display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;"
						>
							{$modalStore[0].meta.description ?? ''}
						</p>
					</div>
				</div>
			</div>
			<div class="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-0">
				<div class="mt-2 p-2 md:p-4">
					<div
						class="w-full rounded-md bg-wild-mossgreen/20 px-4 py-3 font-folks tracking-wide text-wild-darkgreen shadow-md backdrop-blur-md md:w-fit"
					>
						<div class="flex items-end justify-between">
							<p class="font-platNomor">Feel free to use this tool to:</p>
							<HerbIcon />
						</div>
						<ul class="my-1 list-inside list-disc text-sm leading-loose">
							<li>view <b>other sites</b></li>
							<li>see how subpages look in search results</li>
							<li>
								tweak your keywords & <span
									class="underline decoration-wild-darkgreen/50 decoration-double underline-offset-[3px]"
									>re-check</span
								>
							</li>
						</ul>
						<p class="mt-4 font-courier text-xs lowercase text-black/90">
							Wild SEO in-house search result preview tool
						</p>
					</div>
				</div>
				<div
					class="my-2 mt-1 flex max-h-fit w-auto flex-shrink-0 flex-col rounded-md bg-wild-natural/60 shadow-md backdrop-blur-md md:mt-3 md:w-fit"
				>
					{#if $modalStore[0].meta.domainAge != 0}
						<div class="p-4 font-bebas text-lg tracking-wider">
							<div class="mb-1 flex justify-between">
								<p class="font-platNomor text-sm uppercase">Website Age</p>
								<BabyIcon class="text-wild-brown" />
							</div>
							{#if nicelyFormatDays($modalStore[0].meta.domainAge).years >= 1}
								<p class="inline">
									<b>{nicelyFormatDays($modalStore[0].meta.domainAge).years ?? ''}</b>
									<span class="font-platNomor text-sm"> year(s),</span>
								</p>
							{/if}
							{#if nicelyFormatDays($modalStore[0].meta.domainAge).months >= 1}
								<p class="inline">
									<b>{nicelyFormatDays($modalStore[0].meta.domainAge).months ?? ''}</b>
									<span class="font-platNomor text-sm">months,</span>
								</p>
							{/if}
							<p class="inline">
								<b>{nicelyFormatDays($modalStore[0].meta.domainAge).days ?? ''}</b>
								<span class="font-platNomor text-sm">days</span>
							</p>
						</div>
					{/if}
					{#if $modalStore[0].meta.registrantCountry != '' && $modalStore[0].meta.registrantRegion != ''}
						<div class="m-2 mt-0 rounded-sm bg-wild-beige/60 p-2">
							<p class="mb-1 font-platNomor text-sm uppercase tracking-wider">location</p>
							<div class="flex justify-between font-bebas text-lg tracking-wider">
								<p>
									<span class="font-platNomor text-base"
										>{countries[`${$modalStore[0].meta.registrantCountry}`].name ?? ''}</span
									>,
									<span class="tracking-widest">
										{$modalStore[0].meta.registrantRegion ?? ''}
									</span>
								</p>
								{#if getUnicodeFlagIcon($modalStore[0].meta.registrantCountry)}
									<span class="mr-1">
										{getUnicodeFlagIcon($modalStore[0].meta.registrantCountry)}
									</span>
								{/if}
							</div>
						</div>
					{/if}
				</div>
			</div>
			<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
				<a href="/services">
					<button
						class="w-full bg-[#6C8C21] px-4 py-2 font-akira tracking-wide text-white opacity-90 transition-all ease-in hover:opacity-100 hover:shadow-lg"
						on:click={() => {
							modalStore.close();
						}}>View Packages</button
					>
				</a>
				<a href="/contact-us">
					<button
						class="w-full bg-wild-darkgreen px-4 py-2 font-akira tracking-wide text-white opacity-90 transition-all ease-in hover:opacity-100 hover:shadow-lg"
						on:click={() => {
							modalStore.close();
						}}>Contact Sales</button
					>
				</a>
			</div>
		</div>
	</section>
{/if}
