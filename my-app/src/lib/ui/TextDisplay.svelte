<script lang="ts">
	export let placeholder: string = 'text';
	export let displayText = null;

</script>

<div class="input-box" aria-label={placeholder}>
	<div class="form-input"><span>{displayText}</span></div>
	<span class="input-text">{placeholder}</span>
</div>

<style>
	.input-box {
		position: relative;
		width: 90%;
		max-width: 16em;
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
		top: 1.5em;
		left: -0.5em;
	}
	.input-text {
		position: absolute;
		top: 1em;
		font-size: 14px;
		display: block;
		background-color: #121212;
		color: #ccc;
		padding: 0;
	}
	.form-input span {
		display: block;
		padding: 0.5em;
		font-size: 14px;
		color: white;
		pointer-events: none;
	}
</style>
