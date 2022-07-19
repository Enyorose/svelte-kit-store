<script lang="ts">
	export let value: string = 'AB';
	export let errorMessage: string = '';
	export let placeholder: string = '';
	export let id: string = 'provicnce-select';
	let touched: boolean = false;

	const handleInput = (e: Event) => {
		value = (e.target as HTMLSelectElement).value;
	};
</script>

{#if errorMessage != '' && touched}
	<p class="error-message">{errorMessage}</p>
{:else}
	<p class="empty-string">test</p>
{/if}
<div class="input-box">
	<select
		class="form-control"
		class:invalid={errorMessage !== '' && touched}
		{id}
		bind:value
		on:blur={() => (touched = true)}
		on:change={handleInput}
	>
		<option value="" selected hidden>Province</option>
		<option value="AB">Alberta</option>
		<option value="BC">British Columbia</option>
		<option value="MB">Manitoba</option>
		<option value="NB">New Brunswick</option>
		<option value="NL">Newfoundland & Labrador</option>
		<option value="NS">Nova Scotia</option>
		<option value="ON">Ontario</option>
		<option value="PE">Prince Edward Island</option>
		<option value="QC">Quebec</option>
		<option value="SK">Saskatchewan</option>
		<option value="NT">Northwest Territories</option>
		<option value="NU">Nunavut</option>
		<option value="YT">Yukon</option>
	</select>
	<span class="input-text">{placeholder}</span>
</div>

<style>
	.input-box {
		position: relative;
		width: 100%;
		max-width: 21em;
		height: 2.9em;
		margin-left: 0.5em;
	}
	.form-control {
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: #121212;
		border: 2px solid rgba(255, 255, 255, 0.5);
		border-radius: 0.5rem;
		outline: none;
		color: white;
		padding-left: 1em;
	}
	.input-box select {
		background-color: #121212;
		border: 2px solid rgba(255, 255, 255, 0.5);
		display: block;
		height: 100%;
		width: 100%;
		font-size: 1em;
		font-weight: 200;
		color: #ccc;
		outline: none;
		border-radius: 0.5rem;
	}
	option {
		background-color: #353232;
	}

	.invalid {
		background-color: inherit;
		border-bottom-color: var(--alert-color);
	}
</style>
