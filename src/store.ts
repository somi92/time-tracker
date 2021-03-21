import { writable } from "svelte/store";
import startOfISOWeek from "date-fns/startOfISOWeek";

export const showOnlyStandardWorkingHours = writable(true);
export const showWeekend = writable(true);
export const selectedWeekStart = startOfISOWeek(new Date());
