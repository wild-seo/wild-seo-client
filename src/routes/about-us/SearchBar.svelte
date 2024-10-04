<script>
	import SearchIcon from '~icons/majesticons/search-line';

	export let searchText;
</script>

<div
	class="my-3 flex items-center justify-between rounded-full bg-white px-4 py-2 text-black"
	style="filter: drop-shadow(3px 3px 0px #9BDD00);"
>
	<p class="text-sm">{searchText}</p>
	<SearchIcon />
</div>
