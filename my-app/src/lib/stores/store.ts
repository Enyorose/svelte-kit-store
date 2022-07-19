import type { PermitVehicleModel } from "../models/userModel";
import { readable, writable } from "svelte/store";

export let vehicles = writable(<PermitVehicleModel[]>[{
    vehicle_id: "j679hjk",
    user_id: "kjsi879",
    vehicle_make: "Ford",
    vehicle_model: "Escort",
    vehicle_colour: "Blue",
    vehicle_year: "2019",
    vehicle_plate: "ABC123",
    vehicle_plate_province: "AB",
    vehicle_other: "",
  },{
    vehicle_id: "wi8hjk",
    user_id: "kjsi879",
    vehicle_make: "Subaru",
    vehicle_model: "Outback",
    vehicle_colour: "Black",
    vehicle_year: "2016",
    vehicle_plate: "jw8hjk",
    vehicle_plate_province: "AB",
    vehicle_other: "",
  }
],);

export let firstModalLoad = writable(<boolean> false);
export let fadeDelay = readable(<number> 100);
export let fadeDuration = readable(<number> 300);