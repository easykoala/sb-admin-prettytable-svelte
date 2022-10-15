<script>
  import Table from "sveltestrap/src/Table.svelte";
  import Input from "sveltestrap/src/Input.svelte";
  import { onMount } from "svelte";

  export let tableData = [];
  export let tableHeading = [];
  export let tableField = [];

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
      {#each tableHeading as heading}
        <th>{heading}</th>
      {/each}
      <th width="1.5em"><slot name="operate" />操作</th>
    </tr>
  </thead>
  <tbody>
    {#each tableData as row}
      <tr>
        {#each tableField as field}
          <td>{ifNull(row[field])}</td>
        {/each}
        <td><slot name="rows" {row} /></td>
      </tr>
    {/each}
  </tbody>
</Table>
