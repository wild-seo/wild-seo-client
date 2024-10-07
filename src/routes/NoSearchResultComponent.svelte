<script>
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
	<section
		class="w-modal relative rounded-lg border-4 border-wild-seriousblue/40 bg-white/50 backdrop-blur-sm"
	></section>
{/if}
