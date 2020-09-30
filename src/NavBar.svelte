<script lang="ts">
  import {
    Navbar,
    NavbarBrand,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
  } from "sveltestrap";
  import { showOnlyStandardWorkingHours, showWeekend } from "./store";

  let areSettingsOpen = false;
</script>

<style>
  .options {
    display: flex;
    flex-flow: column;
    width: 20vw;
  }
</style>

<Navbar color="dark">
  <NavbarBrand class="text-light font-weight-light font-italic">
    <svg
      width="1.3em"
      height="1.3em"
      viewBox="0 0 16 16"
      class="bi bi-calendar2-week"
      fill="white"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
      <path
        d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
    </svg>
    <span style={"margin-left: 0.5rem"}>weekly time tracker</span>
  </NavbarBrand>
  <Dropdown
    isOpen={areSettingsOpen}
    toggle={() => (areSettingsOpen = !areSettingsOpen)}>
    <DropdownToggle nav class="text-light">
      <svg
        width="1.5em"
        height="1.5em"
        viewBox="0 0 16 16"
        class="bi bi-gear-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z" />
      </svg>
    </DropdownToggle>
    <DropdownMenu right>
      <div class="options">
        <label style="margin-left: 0.5rem;">
          <input type="checkbox" bind:checked={$showWeekend} /> Show weekend
        </label>
        <label style="margin-left: 0.5rem;">
          <input type="checkbox" bind:checked={$showOnlyStandardWorkingHours} />
          Show only standard working hours
        </label>
      </div>
    </DropdownMenu>
  </Dropdown>
</Navbar>
