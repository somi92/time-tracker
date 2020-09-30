import { writable } from "svelte/store";
import startOfISOWeek from "date-fns/startOfISOWeek";

export const showOnlyStandardWorkingHours = writable(false);
export const showWeekend = writable(true);
export const selectedWeekStart = startOfISOWeek(new Date());
