<script>
	import HummingbirdIcon from '~icons/game-icons/hummingbird';
	import { enhance } from '$app/forms';
	export let sendButtonHover;
	export let form;
	export let sending;
</script>

<div
	class="group z-0 mx-auto my-10 max-w-lg border-[0.5px] bg-white/60 font-courier text-sm lowercase shadow-md backdrop-blur-md transition-all duration-1000 hover:max-w-xl hover:border-[1] lg:!rounded-lg lg:!border-wild-brown"
	class:greenShadow={sendButtonHover}
>
	<div class="h-2 w-full border-b border-wild-brown/20 bg-wild-funblue"></div>
	<section class="p-6">
		<div class="flex justify-between">
			<h1 class="font-bebas text-3xl font-bold tracking-wider">
				Contact <span class="font-courier text-sm font-normal tracking-wide">INQUIRE</span>
			</h1>
			<HummingbirdIcon
				class="h-7 w-7 text-wild-brown/80 duration-[1200ms] group-hover:translate-x-[0.3rem] group-hover:rotate-6"
			/>
		</div>

		<div class="mb-4 mt-2 w-full border-b border-wild-brown/80"></div>
		{#if form?.error}
			<p class="error">{form.error}</p>
		{/if}
		{#if sending}
			<p class="text-gray-500">Sending email...</p>
		{/if}
		<form
			method="POST"
			action="?/contact"
			use:enhance={() => {
				sending = true;

				return async ({ update }) => {
					await update();
					sending = false;
				};
			}}
			class="flex flex-col gap-3"
		>
			<div class="grid grid-cols-2 gap-4">
				<div>
					<label class="contactFormLabel">Email</label>
					<input
						name="email"
						class="contactFormInput rounded-lg"
						autocomplete="email"
						value={form?.email ?? ''}
						required
						disabled={sending}
					/>
				</div>
				<div>
					<label class="contactFormLabel">Business Name</label>
					<input
						name="organization"
						class="contactFormInput rounded-lg"
						autocomplete="organization"
						value={form?.organization ?? ''}
						required
						disabled={sending}
					/>
				</div>
			</div>
			<div>
				<label class="contactFormLabel">Website</label>
				<div
					class="input-group input-group-divider mb-1 flex rounded-lg border border-wild-brown bg-white focus-within:border-wild-funblue"
				>
					<div
						class="pointer-events-none max-w-fit bg-stone-100 p-2 font-courier text-sm text-black/80 shadow-lg"
					>
						https://
					</div>
					<input
						name="website"
						class="contactFormInput"
						placeholder="www.example.com"
						autocomplete="url"
						value={form?.website ?? ''}
						required
						disabled={sending}
					/>
				</div>
			</div>
			<button
				type="submit"
				class="max-w-fit rounded-md bg-wild-darkgreen/80 px-4 py-2 text-start font-bebas text-xl tracking-wider text-white shadow-sm transition-all duration-75 ease-out hover:border-r-4 hover:border-wild-green hover:bg-wild-darkgreen hover:shadow-md"
				on:mouseover={() => {
					sendButtonHover = true;
				}}
				on:mouseleave={() => {
					sendButtonHover = false;
				}}>Send</button
			>
		</form>
		<section></section>
	</section>
</div>

<style>
	.greenShadow {
		box-shadow:
			rgba(155, 221, 0, 0.4) 5px 5px,
			rgba(155, 221, 0, 0.3) 10px 10px,
			rgba(155, 221, 0, 0.2) 15px 15px,
			rgba(155, 221, 0, 0.1) 20px 20px,
			rgba(155, 221, 0, 0.05) 25px 25px;
	}
</style>
