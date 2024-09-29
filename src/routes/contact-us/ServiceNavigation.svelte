<script>
	import CompassIcon from '~icons/line-md/compass-twotone-loop';
</script>

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
		<li class="text-black">Contact Us</li>
	</ol>
</div>
