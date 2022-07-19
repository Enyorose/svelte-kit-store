<script lang="ts">
	export let type: string = 'text';
	// export let style_class: string = '';
	export let id: string = 'id';
	export let placeholder: string = 'text';
	export let errorMessage: string = '';
	export let value: any;
	export let readOnly: boolean = false;
	export let style: string = '';

	let touched: boolean = false;
	let showPassword: boolean = false;

	const handleInput = (e: Event) => {
		value = (<HTMLInputElement>e.target).value;
	};
</script>


<div>
	<div class="input-box">
		<input
			type={type !== 'password' ? type : showPassword ? 'text' : type}
			class="form-input"
			class:invalid={errorMessage !== '' && touched}
			{id}
			required
			{readOnly}
			{style}
			{value}
			on:input={handleInput}
			on:blur={() => (touched = true)}
		/>
		<span class="input-text">{placeholder}</span>
		{#if type === 'password'}
			<img
				src={!showPassword ? '/icons/eye.svg' : '/icons/eye-slash.svg'}
				id="togglePassword"
				alt="toggle password"
				on:click={() => {
					showPassword = !showPassword;
				}}
			/>
		{/if}
	</div>
</div>

<style>
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		box-shadow: 0 0 0 30px #121212 inset !important;
		-webkit-text-fill-color: #fff !important;
		border-radius: 0.5rem;
		border: 2px solid var(--primary-color);
	}

	.invalid {
		background-color: inherit;
		border-bottom-color: var(--alert-color);
	}

	#togglePassword {
		margin: 12px 5px 0 0;
		width: 20px;
		height: 20px;
		right: 0;
		position: absolute;
		z-index: 1;
		cursor: pointer;
		filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
	}
	.input-box {
		position: relative;
		width: 90%;
		max-width: 20em;
		height: 2.5em;
		margin-left: 0.5em;
	}
	.form-input {
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
	.form-input:hover {
		border: 2px solid white;
	}
	.form-input:focus {
		border: 2px solid var(--primary-color);
	}
	.input-box .input-text {
		position: absolute;
		top: 10px;
		left: 5px;
		font-size: 14px;
		display: block;
		transition: top 350ms ease-in, font-size 350ms ease-in;
		pointer-events: none;
		background-color: #121212;
		color: #ccc;
		padding: 0;
	}
	.input-box [type='email']:focus + .input-text,
	.input-box [type='email']:valid + .input-text {
		top: -1.1em;
		font-size: 0.75em;
		padding: 0 0.125em;
	}
	.input-box [type='password']:focus + .input-text,
	.input-box [type='password']:valid + .input-text {
		top: -1.1em;
		font-size: 0.75em;
		padding: 0 0.125em;
	}
	.input-box [type='text']:focus + .input-text,
	.input-box [type='text']:valid + .input-text {
		top: -1.1em;
		font-size: 0.75em;
		padding: 0 0.125em;
	}
</style>
