<script lang="ts">
  import { showOnlyStandardWorkingHours } from "./store";

  let width;

  $: timePoints = $showOnlyStandardWorkingHours
    ? timePoints.slice(7, 19)
    : Array.from(Array(24).keys());

  $: unitWidth = width / timePoints.length - 10;
</script>

<style>
  .pdiv {
    margin: auto;
    width: 100%;
    height: 22px;
    display: flex;
    flex-flow: row;
    padding: 0 0px 0 5px;
  }

  .point {
    position: relative;
    width: 10px;
    font-size: small;
  }

  .hidden {
    visibility: hidden;
  }
</style>

<div class="pdiv" bind:clientWidth={width}>
  {#each timePoints as point, i}
    <div
      class="point"
      class:hidden={i % 1 != 0}
      style="left: {i * unitWidth}px">
      {point}h
    </div>
  {/each}
</div>
