<script lang="ts">
  import Timeline from "./Timeline.svelte";
  import addDays from "date-fns/addDays";
  import format from "date-fns/format";
  import { showWeekend, selectedWeekStart } from "./store";

  type Weekday = { day: string; date: string };

  let weekdays: Weekday[] = new Array(7);
  for (let i = 0; i < weekdays.length; i++) {
    const temp = addDays(selectedWeekStart, i);
    weekdays[i] = {
      day: format(temp, "iiii"),
      date: format(temp, "dd.MM.yyyy"),
    };
  }

  let visibleWeekdays = weekdays.slice(0, 5);

  $: if ($showWeekend) {
    visibleWeekdays = weekdays;
  } else {
    visibleWeekdays = weekdays.slice(0, 5);
  }
</script>

<style>
  .wrapper {
    /* border: 1px solid blue; */
    width: 100%;
    padding: 0 0 0rem 0;
    margin: auto;
  }

  div {
    padding: 0;
  }

  .weekday {
    /* border-top: 1px solid red; */
    border-bottom: 1px solid black;
    height: 45px;
    vertical-align: middle;
    padding-left: 1rem;
  }

  .day-name {
    display: flex;
    align-items: center;
    flex-flow: column;
    border-right: 1px solid black;
    height: 45px;
    font-size: large;
  }

  .day-graph {
    border-right: 1px solid black;
  }

  span {
    display: block;
    font-size: x-small;
  }
</style>

<div class="row wrapper" style="border-bottom: 1px solid black;">
  <div class="col-1" />
  <div class="col-10">
    <Timeline />
  </div>
  <div class="col-1">Total</div>
</div>

{#each visibleWeekdays as weekday}
  <div class="row wrapper weekday">
    <div class="col-1 day-name font-italic">
      {weekday.day}
      <span>{weekday.date}</span>
    </div>
    <div class="col-10 day-graph" />
  </div>
{/each}
