<script lang="ts">
  import { showOnlyStandardWorkingHours } from "./store";

  let width;
  let timePoints = Array.from(Array(24).keys());

  $: selectedTimePoints = $showOnlyStandardWorkingHours
    ? timePoints.slice(7, 19)
    : timePoints;

  $: unitWidth = width / selectedTimePoints.length - 10;
</script>

<style>
  .pdiv {
    margin: auto;
    width: 100%;
    height: 22px;
    display: flex;
    flex-flow: row;
    padding: 0 0px 0 5px;
    border: 2px solid green;
  }

  .point {
    position: relative;
    width: 10px;
    font-size: small;
    border: 1px solid red;
  }

  .hidden {
    visibility: hidden;
  }
</style>

<div class="pdiv" bind:clientWidth={width}>
  {#each selectedTimePoints as point, i}
    <div
      class="point"
      class:hidden={i % 1 != 0}
      style="left: {i * unitWidth}px">
      {point}h
    </div>
  {/each}
</div>
