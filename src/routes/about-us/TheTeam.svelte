<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import RotatingService from '../services/RotatingService.svelte';
</script>

<div class="grid grid-cols-2">
	<!-- <Avatar
		src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/5d4578ec-5a7b-4fcb-0635-81f42232e200/public"
		width="w-28"
		rounded="rounded-full"
		border="border-4 border-wild-natural/70 hover:!border-yellow-500 transition-all duration-500 ease-in-out"
	/>
	<Avatar
		src="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/4147ab26-ee42-4307-2a59-2d439211b500/public"
		width="w-28"
		rounded="rounded-full"
		border="border-4 border-wild-natural/70 hover:!border-pink-500 transition-all duration-[350ms] ease-in-out"
	/> -->
	<RotatingService
		text="Clara"
		secondaryText="Founder"
		size="10"
		separator=" • "
		extraClasses="bg-pink-500/30 text-black/90"
		imgSrc="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/4147ab26-ee42-4307-2a59-2d439211b500/public"
		imgAlt="Clara Tan Founder of Wild SEO"
	/>
	<RotatingService
		text="Gafoo"
		secondaryText="Chief Tech Lead"
		size="10"
		separator=" • "
		extraClasses="bg-amber-500/30 text-wild-brown"
		imgSrc="https://imagedelivery.net/usYhDnhJIpKLEgUtJMbggw/5d4578ec-5a7b-4fcb-0635-81f42232e200/public"
		imgAlt="Gafoo Tan Chief Tech Lead of Wild SEO"
	/>
</div>
