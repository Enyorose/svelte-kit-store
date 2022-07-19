<script lang="ts">
	export let type: string = 'submit';
	export let disabled: boolean = true;
	export let styleClasses: string = '';
</script>

<button {type} class={styleClasses} on:click {disabled}>
	<slot />
</button>

<style>
	button {
		border: none;
		padding: 10px 40px;
		background-color: var(--dark-grey-color);
		color: var(--medium-light-grey-color);
		font-size: 1.2rem;
		border-radius: 0;
		appearance: none;
		text-decoration: none;
		cursor: pointer;
	}

	button:hover {
		color: var(--primary-color);
		box-shadow: var(--shadow-outer-dark-grey);
	}

	button:disabled {
		background-color: var(--black-color-transparant-3);
		color: var(--medium-dark-grey-color);
		box-shadow: none;
	}
</style>
