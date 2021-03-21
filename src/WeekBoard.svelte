<script lang="ts">
  import Timeline from "./Timeline.svelte";
  import addDays from "date-fns/addDays";
  import format from "date-fns/format";
  import isSameDay from "date-fns/isSameDay";
  import { showWeekend, selectedWeekStart } from "./store";

  type Weekday = { day: string; date: string; isToday: boolean };

  let weekdays: Weekday[] = new Array(7);
  for (let i = 0; i < weekdays.length; i++) {
    const temp = addDays(selectedWeekStart, i);
    weekdays[i] = {
      day: format(temp, "iiii"),
      date: format(temp, "dd.MM.yyyy"),
      isToday: isSameDay(temp, new Date()),
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
    width: 100%;
    padding: 0 0 0rem 0;
    margin: auto;
  }

  div {
    padding: 0;
  }

  .weekday {
    border-bottom: 1px solid black;
    height: 48px;
    vertical-align: middle;
    padding-left: 1rem;
  }

  .day-name {
    display: flex;
    align-items: center;
    flex-flow: column;
    border-right: 1px solid black;
    height: 48px;
    font-size: large;
  }

  .day-graph {
    border-right: 1px solid black;
    padding: 0.5rem 0 0.5rem 0;
  }

  span {
    display: block;
    font-size: small;
  }

  .item {
    position: relative;
    border: 1px solid red;
    background-color: red;
    border-radius: 10px;
    left: 95px;
    width: 15%;
    height: 100%;
  }

  .item:hover {
    cursor: pointer;
    border: 2px solid black;
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
    <div
      class={`col-1 day-name font-italic ${weekday.isToday ? 'text-success' : ''}`}>
      {weekday.day}
      <span>{weekday.date}</span>
    </div>
    <div class="col-10 day-graph">
      <div class={`${weekday.isToday ? 'item' : ''}`} />
    </div>
  </div>
{/each}
