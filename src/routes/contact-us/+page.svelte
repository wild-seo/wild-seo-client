<script>
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';
	export let form;

	let sending = false;
</script>

<h1>Contact Us</h1>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}
{#if sending}
	<p class="text-gray-500">Sending email...</p>
{/if}
<form
	method="POST"
	action="?/create"
	use:enhance={() => {
		sending = true;

		return async ({ update }) => {
			await update();
			sending = false;
		};
	}}
>
	<label>
		Email:
		<input
			name="email"
			autocomplete="email"
			value={form?.email ?? ''}
			required
			disabled={sending}
		/>
	</label>
	<label>
		Business Name:
		<input
			name="organization"
			autocomplete="organization"
			value={form?.organization ?? ''}
			required
			disabled={sending}
		/>
	</label>
	<label>
		Website:
		<input
			name="website"
			autocomplete="url"
			value={form?.website ?? ''}
			required
			disabled={sending}
		/>
	</label>
</form>
