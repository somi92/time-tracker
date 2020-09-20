<script lang="ts">
  import Timeline from "./Timeline.svelte";

  let showWeekend = true;

  let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  $: if (showWeekend) {
    weekdays = [...weekdays, "Saturday", "Sunday"];
  } else {
    weekdays = weekdays.slice(0, 5);
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

<label style="margin-left: 0.5rem;">
  <input type="checkbox" bind:checked={showWeekend} /> Show weekend
</label>
<div class="row wrapper" style="border-bottom: 1px solid black;">
  <div class="col-1" />
  <div class="col-10">
    <Timeline />
  </div>
  <div class="col-1">Total</div>
</div>

{#each weekdays as day}
  <div class="row wrapper weekday">
    <div class="col-1 day-name font-italic">{day} <span>20.9.2020.</span></div>
    <div class="col-10 day-graph" />
  </div>
{/each}
