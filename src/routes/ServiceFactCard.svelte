<script>
	import services from './serviceData.js';
	import FlipIcon from '~icons/mdi/rotate-360';
	import OpenBookIcon from '~icons/gis/map-book';
	import ClosedBookIcon from '~icons/game-icons/secret-book';

	let serviceSelected;
	let factShowing = false;

	function toggleCard(id) {
		if (serviceSelected === id) {
			serviceSelected = null;
			factShowing = !factShowing;
		} else {
			factShowing = !factShowing;
			serviceSelected = id;
		}
	}
</script>

<div>
	<section class="mx-auto my-10 grid max-w-6xl grid-cols-1 gap-3 p-4 lg:!grid-cols-3">
		{#each services as { id, name, actionWord, heroPoints, iconSrc, iconAlt, bullets, description, animalFact }}
			<div class="relative self-start rounded-lg bg-wild-darkgreen shadow-md">
				<div class="gap-4">
					<img
						src={iconSrc}
						alt={iconAlt}
						class="absolute -left-2 -top-2 h-24 w-24 rounded-full shadow-md transition ease-in-out hover:scale-110 hover:shadow-lg lg:!-left-3 lg:!-top-5 lg:!h-32 lg:!w-32"
					/>
					<div class="flex shadow-md">
						<!-- Placeholder for image -->
						<div class="h-24 w-24 rounded-md bg-wild-darkgreen lg:!h-28 lg:!w-28"></div>
						<div class="rounded-lg bg-wild-darkgreen p-5 text-white">
							<h2 class="font-scratchy text-3xl tracking-wider">{name}</h2>
							<p class="mt-1 font-platNomor text-sm uppercase tracking-widest opacity-80">
								{heroPoints}
							</p>
						</div>
					</div>
					<div
						class="rounded-b-lg border border-wild-darkgreen bg-wild-mossgreen p-5 font-courier text-white"
					>
						<p class="text-base text-wild-darkgreen">
							<span class="font-bold">{actionWord} </span>{description}
						</p>

						<div class="my-2 border-t border-dashed border-white/70"></div>
						<!-- FLIP CARD -->
						<section class="perspective flip-box h-40 w-full bg-transparent">
							<!-- FLIP CARD INNER -->
							<div
								class="flip-card-inner preserveTransformStyle relative flex h-full w-full transform-gpu items-center transition-all"
								class:show-back={serviceSelected === id}
							>
								<!-- Flip Card FRONT -->
								<div
									class="flip-card-front absolute h-full w-full rounded-lg bg-wild-natural/50 p-3"
								>
									<div class="relative">
										{#if bullets}
											<div class="mb-1 flex justify-between">
												<p class="text-sm text-wild-darkgreen/70">to:</p>
												<ClosedBookIcon
													class="text-wild-darkgreen/70 transition-all duration-100 ease-in hover:-rotate-[16deg]"
												/>
											</div>
											{#each bullets as bullet}
												<ol class="list-none text-base">
													<li>
														<span class="tracking-wider text-wild-darkgreen">{bullet}</span>
													</li>
												</ol>
											{/each}
										{/if}
									</div>
								</div>
								<!-- Flip card BACK -->
								<div
									class="flip-card-back absolute grid h-full w-full items-center rounded-lg bg-white/50 p-3 pt-1 font-folks text-black"
								>
									<OpenBookIcon
										class="absolute left-0 top-0 m-3 -rotate-6 text-wild-darkgreen/70 transition-all duration-150 ease-in hover:-rotate-[16deg]"
									/>
									<div class="relative">
										<div class="mx-auto flex w-fit items-center">
											<p class="w-[7rem] text-end text-sm text-wild-darkgreen">
												{animalFact.primaryFact}
											</p>
											<div class="mx-3 h-10 border-r border-dashed border-wild-darkgreen"></div>
											<p
												class="w-28 text-xl font-bold underline decoration-wild-green underline-offset-4"
											>
												{animalFact.primaryStar}
											</p>
										</div>
										<div class="mx-auto flex w-fit items-end gap-2">
											<p class="text-3xl font-bold">
												{animalFact.number}<span class="text-xl">{animalFact.identifier}</span>
											</p>
											<p class="text-sm tracking-wider text-wild-darkgreen">
												{animalFact.secondaryFact}
											</p>
										</div>
									</div>
								</div>
							</div>

							<button
								on:click={() => {
									toggleCard(id);
								}}
								class="group flex rotate-3 items-center gap-2 rounded-md border-b-2 border-l-2 border-wild-green bg-wild-darkgreen/80 px-6 py-1 font-courier tracking-widest shadow-md backdrop-blur-md transition-all duration-150 ease-out hover:-rotate-[5deg] hover:scale-x-[.95] hover:bg-wild-darkgreen hover:shadow-md"
							>
								flip
								<FlipIcon class="z-20 transition-all group-hover:skew-y-6" />
							</button>
						</section>
					</div>
				</div>
			</div>
		{/each}
	</section>
</div>

<style>
	.perspective {
		perspective: 500px;
	}

	.preserveTransformStyle {
		transform-style: preserve-3d;
	}

	.flip-card:hover .flip-card-inner {
		transform: rotateY(180deg);
	}

	.show-back {
		transform: rotateY(180deg);
	}

	.flip-card-front,
	.flip-card-back {
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.flip-card-back {
		transform: rotateY(180deg) translateX(6px);
	}
</style>
