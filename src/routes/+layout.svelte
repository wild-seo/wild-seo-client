<script>
	import '../app.css';
	import mascot from '$assets/mascot.png';
	import coloredLogo from '$assets/logo_colored_shadow.png';
	import whiteLogo from '$assets/logo_white.png';
</script>

<nav class="bg-wild-beige border-wild-brown sticky top-0 text-white shadow-md">
	<div class="mx-auto flex max-w-6xl gap-4">
		<div class="bg-wild-brown content-center p-2">
			<a href="/">Home</a>
		</div>
		<div class="flex-grow">
			<img class=" bg-wild-natural mx-auto w-44 px-3 py-1" src={coloredLogo} alt="" />
		</div>
		<section class="grid grid-cols-2">
			<div class="bg-wild-brown mr-2 content-center p-2">
				<a href="/services">Services</a>
			</div>
			<div class="bg-wild-brown content-center p-2">
				<a href="/services">Services</a>
			</div>
		</section>
	</div>
</nav>

<slot></slot>

<div class="bg-wild-seriousblue bottom-0 left-0 w-full">
	<div class="grid grid-cols-4">
		<div>
			<div class="mx-auto w-fit">
				<div class="py-4">
					<img src={whiteLogo} alt="Wild SEO Beetle logo" class="mb-2 w-32 flex-none" />
					<p class="text-white">Wild SEO</p>
				</div>
			</div>
		</div>
		<div>
			<div class="card variant-ghost">
				<header class="card-header">(header)</header>
				<section class="p-4">(content)</section>
				<footer class="card-footer">(footer)</footer>
			</div>
		</div>
		<div></div>
		<div></div>
	</div>
</div>
