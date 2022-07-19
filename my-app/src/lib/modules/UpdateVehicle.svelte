<script lang="ts">
import { createEventDispatcher } from 'svelte';
import {vehicles, fadeDelay, fadeDuration} from '$lib/stores/store';
import { fade } from 'svelte/transition';
import TextInputV from '$lib/ui/TextInputV.svelte';
import ProvinceSelect from '$lib/ui/ProvinceSelect.svelte';
import Button from '$lib/ui/Button.svelte';
let firstLoad: boolean = true;
const dispatch = createEventDispatcher();

const closeModal = (): void => {
		if (!firstLoad) dispatch('close');
		if (firstLoad) firstLoad = !firstLoad;
	};
</script>

<div class="glassmorphism modal" transition:fade={{ delay: $fadeDelay, duration: $fadeDuration }}>
	<div class="close-icon">
		<a href={'#'} on:click={closeModal}>X</a>
	</div>
	<div class="modal-title">
		<h3>Update Vehicle</h3>
	</div>
		<div class="modal-main-area p-1">
			<div class="form-group">
				<form on:submit|preventDefault>
					<div class="field-items-container">
						<div class="field-item">
							<TextInputV
								type="text"
								id="make"
								placeholder="Vehicle Make"
								bind:value={$vehicles[0].vehicle_make}
							/>
						</div>
						<div class="field-item">
							<TextInputV
								type="text"
								id="model"
								placeholder="Vehicle Model"
								bind:value={$vehicles[0].vehicle_model}
							/>
						</div>
						<div class="field-item">
							<TextInputV
								type="text"
								id="year"
								placeholder="Vehicle Year"
								bind:value={$vehicles[0].vehicle_year}
							/>
						</div>
						<div class="field-item">
							<TextInputV
								type="text"
								id="colour"
								placeholder="Vehicle Colour"
								bind:value={$vehicles[0].vehicle_colour}
							/>
						</div>
						<div class="field-item">
							<TextInputV
								type="text"
								id="plate"
								placeholder="Vehicle Plate"
								bind:value={$vehicles[0].vehicle_plate}
							/>
						</div>
						<div class="field-item">
							<ProvinceSelect id="province" bind:value={$vehicles[0].vehicle_plate_province} />
						</div>
						<Button disabled={false}>Update</Button>
					</div>
				</form>
			</div>
		</div>
</div>

<style>
	.field-items-container {
		display: grid;
		grid-template-columns: 1fr;
		padding-bottom: 3em;
		margin-left: 1em;
	}
	.field-item {
		margin-top: 1em;
	}
.glassmorphism {
	backdrop-filter: blur(4px) saturate(7%);
	-webkit-backdrop-filter: blur(4px) saturate(7%);
	background-color: rgba(0, 0, 0, 0.75);
	border-radius: 5px;
	/* border: 1px solid rgba(255, 255, 255, 0.125); */
}
.modal {
		width: 500px;
		height: 100vh;
		left: calc(940px / 2 - 500px / 2);
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.7) );
	}
	.modal {
		height: min-content;
	}
	.modal-main-area {
		display: grid;
		grid-auto-rows: 1fr 1fr 1fr min-content;
		position: relative;
	}
	.modal-title {
		padding: 1rem 1rem 0 1rem;
	}

	.modal-title > h3 {
		color: white;
		margin-top: 0;
	}
	.close-icon {
		position: fixed;
		top: 0;
		right: 0;
		font-size: 1.2rem;
		padding: 1rem 1rem 0 0;
		color: white;
	}
</style>