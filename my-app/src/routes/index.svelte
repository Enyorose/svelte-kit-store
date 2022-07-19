<script lang="ts">
	import { vehicles } from '$lib/stores/store';
	import TextDisplay from '$lib/ui/TextDisplay.svelte';
	import UpdateVehicle from '$lib/modules/UpdateVehicle.svelte';

	let updateVehicle: boolean = false;

	const closeModal = (): void => {
		updateVehicle = false;
	};
</script>

{#if updateVehicle}
	<UpdateVehicle on:close={closeModal} />
{/if}
{#each $vehicles as vehicle, index}
	<div>
		<div class="field-items-container">
			<div class="field-item">
				<TextDisplay placeholder="Make" displayText={vehicle.vehicle_make} />
			</div>
			<div class="field-item">
				<TextDisplay placeholder="Model" displayText={vehicle.vehicle_model} />
			</div>
			<div class="field-item">
				<TextDisplay placeholder="Year" displayText={vehicle.vehicle_year} />
			</div>
			<div class="field-item">
				<TextDisplay placeholder="Color" displayText={vehicle.vehicle_colour} />
			</div>
			<div class="field-item">
				<TextDisplay placeholder="Plate" displayText={vehicle.vehicle_plate} />
			</div>
			<div class="field-item">
				<TextDisplay
					placeholder="Plate Registered Provice"
					displayText={vehicle.vehicle_plate_province}
				/>
			</div>
		</div>
		<div class="action-buttons">
			<span
				class="cursor-pointer primary-hover mx-2"
				on:click={() => {
					updateVehicle = true;
				}}>Update</span
			>
		</div>
	</div>
{/each}

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
</style>
