<script lang="ts">
  import NavBar from "./NavBar.svelte";
  import TaskSelector from "./TaskSelector.svelte";
  import WeekBoard from "./WeekBoard.svelte";
</script>

<style>
  div {
    border: 0px solid red;
  }

  .margin-top {
    margin-top: 1rem;
  }

  .padding-tb {
    padding: 1rem 0 1rem 0;
  }
</style>

<NavBar />
<div class="container-fluid">
  <div class="row padding-tb">
    <div class="col-3" />
    <div class="col-6">
      <TaskSelector />
    </div>
    <div class="col-3" />
  </div>
  <div class="row margin-top">
    <WeekBoard />
  </div>
</div>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
</svelte:head>
