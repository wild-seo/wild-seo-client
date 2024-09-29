<script>
	import SearchIcon from '~icons/majesticons/search-line';
	import GoogleIcon from '~icons/devicon/google';
	import YoutubeIcon from '~icons/logos/youtube-icon';
	import TikTokIcon from '~icons/ion/logo-tiktok';
	import YahooIcon from '~icons/mdi/yahoo';
	import AirBnb from '~icons/fa-brands/airbnb';
	import Bing from '~icons/logos/bing';
	import Brave from '~icons/logos/brave';
	import DuckDuckGo from '~icons/logos/duckduckgo';
	import Netflix from '~icons/logos/netflix-icon';
	import TripAdvisor from '~icons/fontisto/tripadvisor';

	const randomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
</script>

<section class="patternedBackground relative select-none bg-wild-darkgreen/80 py-4 text-black">
	<div class="grid w-full grid-cols-3 text-xs">
		<section
			class="cloudDisperseLeft group flex items-center justify-center gap-2 place-self-end p-2 md:p-4"
			style="--randomTime: {randomInt(3, 4)}s;--randomDelay: {randomInt(0, 1000)}ms;"
		>
			<!-- TikTok -->
			<TikTokIcon
				class="h-10 w-10 flex-shrink-0 rounded-full bg-black p-2 text-white drop-shadow-md"
				style="filter: drop-shadow(3px 2px 0px #ff0050);"
			/>
			<div
				class="hidden items-center justify-between gap-6 rounded-full border border-black bg-white px-3 py-2 drop-shadow-lg duration-200 group-hover:ring md:flex"
			>
				<p class="text-sm font-medium">"wet market lady meltdown"</p>
				<SearchIcon class="text-slate-500" />
			</div>
		</section>

		<!-- Yahoo -->
		<section
			class="cloudDisperseCenter group hidden items-center justify-center gap-2 p-2 md:flex md:place-self-start md:p-4"
			style="--randomTime: {randomInt(2, 3)}s;--randomDelay: {randomInt(0, 1000)}ms"
		>
			<YahooIcon
				class="h-10 w-10 flex-shrink-0 rounded-full bg-[#410093] p-1 text-white drop-shadow-md"
				style="filter: drop-shadow(3px 2px 0px black);"
			/>
			<div
				class="flex items-center justify-between gap-6 rounded-full border border-black bg-white px-3 py-1 drop-shadow-lg duration-200 group-hover:ring"
			>
				<p class="text-sm">"most fresh chicken organic"</p>
				<SearchIcon class="text-slate-500" />
			</div>
		</section>

		<!-- AirBnb -->
		<section
			class=" cloudDisperseRight group flex scale-125 items-center justify-center gap-3 p-2 md:place-self-start md:p-4"
			style="--randomTime: {randomInt(4, 5)}s;--randomDelay: {randomInt(0, 1000)}ms"
		>
			<AirBnb
				class="h-10 w-10 flex-shrink-0 rounded-full bg-[#FF5A5F] p-1.5 text-white drop-shadow-md"
				style="filter: drop-shadow(3px 2px 0px black);"
			/>
			<div
				class="justify-betweenfya hidden items-center gap-2 rounded-lg border border-black/50 bg-white p-2 drop-shadow-lg duration-200 group-hover:ring md:flex"
			>
				<p class="text-sm font-bold">"rooms near marketplace"</p>
				<SearchIcon class="text-slate-500" />
			</div>
		</section>

		<!-- Brave -->
		<section
			class="cloudDisperseLeft group flex items-center justify-center gap-3 place-self-start p-2 md:place-self-auto md:p-4"
			style="--randomTime: {randomInt(2, 5)}s;--randomDelay: {randomInt(0, 1000)}ms"
		>
			<Brave
				class="h-10 w-10 flex-shrink-0 rounded-full bg-white p-1 drop-shadow-md"
				style="filter: drop-shadow(3px 2px 0px black);"
			/>

			<div
				class="hidden items-center justify-between gap-6 rounded-full border border-black bg-white p-2 px-4 drop-shadow-lg duration-200 group-hover:ring md:flex"
			>
				<p class="text-sm font-semibold">"TTDI wet market opening times"</p>
				<SearchIcon class="text-slate-500" />
			</div>
		</section>

		<!-- Google -->
		<section
			class="onlyMobileCloudDisperse group col-span-3 my-2 flex scale-110 items-center justify-center gap-2 p-2 md:col-span-1 md:my-0 md:p-4"
			style="--randomTime: {randomInt(3, 4)}s;--randomDelay: {randomInt(0, 1000)}ms"
		>
			<GoogleIcon
				class="h-10 w-10 flex-shrink-0 -rotate-6 rounded-full bg-white p-1.5 drop-shadow-md"
				style="filter: drop-shadow(3px 2px 0px black);"
			/>
			<div
				class="mx-6 flex w-full items-center justify-between gap-8 rounded-full border border-black/20 bg-white px-3 py-1 drop-shadow-lg duration-200 group-hover:ring md:mx-0 md:w-fit"
			>
				<p class="text-sm font-medium">"buy fresh barramundi cheap"</p>
				<SearchIcon class="text-slate-500" />
			</div>
		</section>

		<!-- Bing -->
		<section
			class="cloudDisperseRight group hidden items-center justify-center gap-2 p-2 md:flex md:p-4"
			style="--randomTime: {randomInt(1.5, 4)}s;--randomDelay: {randomInt(0, 1000)}ms"
		>
			<Bing
				class="hidden h-10 w-10 flex-shrink-0 rounded-full bg-white p-1.5 drop-shadow-md md:block"
				style="filter: drop-shadow(3px 2px 0px black);"
			/>

			<div
				class="hidden items-center justify-between gap-2 border border-black/80 bg-white px-3 py-1 drop-shadow-lg duration-200 group-hover:ring md:flex"
			>
				<p class="text-sm">"produce market supplier office hours"</p>
				<SearchIcon class="text-slate-500" />
			</div>
		</section>

		<!-- Youtube -->
		<section
			class="cloudDisperseLeft group flex scale-125 items-center justify-center gap-4 place-self-end p-2 md:p-4"
			style="--randomTime: {randomInt(4, 5)}s;--randomDelay: {randomInt(0, 1000)}ms"
		>
			<YoutubeIcon
				class="h-10 w-10 flex-shrink-0 rounded-full bg-white p-1.5 drop-shadow-md"
				style="filter: drop-shadow(3px 2px 0px black);"
			/>
			<div
				class="hidden items-center justify-between gap-6 rounded-sm border border-black bg-white px-3 py-1 drop-shadow-lg duration-200 group-hover:ring md:flex"
			>
				<p class="text-sm">"best wet markets in asia"</p>
				<SearchIcon class="text-slate-500" />
			</div>
		</section>

		<!-- Netflix -->
		<section
			class="cloudDisperseCenter group flex items-center justify-center gap-2 p-2 md:p-4"
			style="--randomTime: {randomInt(2, 3)}s;--randomDelay: {randomInt(0, 1000)}ms"
		>
			<Netflix
				class="h-10 w-10 flex-shrink-0 rounded-full bg-black p-1  drop-shadow-md"
				style="filter: drop-shadow(4px 1px 0px #E50914);"
			/>
			<div
				class="hidden items-center justify-between gap-2 rounded-full border-2 border-black bg-white px-3 py-1 drop-shadow-lg duration-200 group-hover:ring md:flex"
			>
				<p class="text-sm">"meat horror movie"</p>
				<SearchIcon class="text-slate-500" />
			</div>
		</section>

		<!-- TripAdvisor -->
		<section
			class="cloudDisperseRight group flex items-center justify-center gap-4 place-self-start p-2 md:p-4"
			style="--randomTime: {randomInt(3, 4)}s;--randomDelay: {randomInt(0, 1000)}ms"
		>
			<TripAdvisor
				class="h-10 w-10 flex-shrink-0 rounded-full bg-[#00af87] p-1.5 text-white drop-shadow-md"
				style="filter: drop-shadow(3px 2px 0px black);"
			/>
			<div
				class="hidden items-center justify-between gap-2 rounded-full border border-black/30 bg-white px-3 py-1 drop-shadow-lg duration-200 group-hover:ring md:flex"
			>
				<p class="text-sm">"hotels near restaurants and <b>markets</b>"</p>
				<SearchIcon class="flex-shrink-0 text-slate-500" />
			</div>
		</section>
	</div>
</section>

<style>
	.cloudDisperseCenter {
		animation: liftOffSpeedOne var(--randomTime) ease-in-out alternate infinite;
		transform-origin: 50% 50%;
		animation-delay: var(--randomDelay);
	}
	@media only screen and (min-width: 768px) {
		.onlyMobileCloudDisperse {
			animation: liftOffSpeedOne var(--randomTime) ease-in-out alternate infinite;
			transform-origin: 50% 50%;
			animation-delay: var(--randomDelay);
		}
	}
	.cloudDisperseLeft {
		animation: liftOffSpeedOne var(--randomTime) ease-in-out alternate infinite;
		transform-origin: 100% 50%;
		animation-delay: var(--randomDelay);
	}
	.cloudDisperseRight {
		animation: liftOffSpeedOne var(--randomTime) ease-in-out alternate infinite;
		transform-origin: 0% 50%;
		animation-delay: var(--randomDelay);
	}
	.patternedBackground::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4em' height='3em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='rgba(155, 221, 0, 0.2)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.1'%3E%3Cpath d='m8 2l1.88 1.88m4.24 0L16 2M9 7V6a3 3 0 1 1 6 0v1M5 7a3 3 0 1 0 2.2 5.1C9.1 10 12 7 12 7s2.9 3 4.8 5.1A3 3 0 1 0 19 7Zm2.56 5h8.87M7.5 17h9'/%3E%3Cpath d='M15.5 10.7c.9.9 1.4 2.1 1.5 3.3c0 5.8-5 8-5 8s-5-2.2-5-8c.1-1.2.6-2.4 1.5-3.3'/%3E%3C/g%3E%3C/svg%3E");
		background-repeat: space;
	}
	@keyframes liftOffSpeedOne {
		to {
			transform: translateY(10px);
			opacity: 0.05;
		}
	}
</style>
