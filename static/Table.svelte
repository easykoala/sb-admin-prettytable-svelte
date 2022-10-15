<script>
  import Table from "sveltestrap/src/Table.svelte";
  import Input from "sveltestrap/src/Input.svelte";
  import { onMount, beforeUpdate } from "svelte";

  export let tableRows = [];
  export let tableHeading = [];
  export let columns;
  export let select = false;
  export let rows = true;

  $: {
    console.log("tableRows:", tableRows);
  }
  function ifUndef(v) {
    // console.log('value:', v)
    return v === undefined ? "" : v;
  }

  function ifNull(v) {
    // console.log("value:", v);
    return v ? v : "";
  }

  onMount(async () => {});
</script>

<Table bordered responsive>
  <thead>
    <tr>
      {#if select}
        <th width="1em"><slot name="select" /></th>
      {/if}
      {#each tableHeading as heading}
        <th>{heading}</th>
      {/each}
      <th width="1.5em"><slot name="operate" />操作</th>
    </tr>
  </thead>
  <tbody>
    {#each tableRows as row}
      <tr>
        {#if select}
          <td><slot name="selectrow" {row} /></td>
        {/if}
        {#each columns as column}
          {#if column.render}
            <td>{@html column.render(row)}</td>
          {:else}
            <td>{ifNull(row[column.field])}</td>
          {/if}
        {/each}
        {#if rows}
          <td><slot name="rows" {row} /></td>
        {/if}
      </tr>
    {/each}
  </tbody>
</Table>
