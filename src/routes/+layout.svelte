<script>
	import '../app.css';
	import logo from '$assets/logo.png';
</script>

<nav class="grid grid-cols-2 bg-black p-4 text-white">
	<a href="/">Home</a>
	<a href="/services">Services</a>
</nav>

<slot></slot>

<div class="bottom-0 left-0 w-full bg-black">
	<div class="grid grid-cols-4">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	<div class="mx-auto w-fit">
		<div class="py-4">
			<img src={logo} alt="Wild SEO Beetle logo" class="mb-2 h-10 w-10 flex-none" />
			<p class="text-white">Wild SEO</p>
		</div>
	</div>
</div>
