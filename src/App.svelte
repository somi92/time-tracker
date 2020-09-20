<script lang="ts">
  import { Navbar, NavbarBrand } from "sveltestrap";
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

<Navbar color="dark">
  <NavbarBrand class="text-light font-weight-light font-italic">
    weekly time tracker
  </NavbarBrand>
</Navbar>
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
