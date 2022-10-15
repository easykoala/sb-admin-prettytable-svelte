<script>
  import ButtonGroup from "sveltestrap/src/ButtonGroup.svelte";
  import Button from "sveltestrap/src/Button.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let row;

  function btnClick(e, action) {
    e.preventDefault();
    dispatch("rowClick", { action: action, row: row });
  }

  // function btnClick0(e, action) {
  //   e.preventDefault();
  //   rowAction = { action: action, row: row };
  //   console.log("rowData", action, row);
  // }
</script>

<ButtonGroup size="sm">
  <Button size="sm" on:click={(e) => btnClick(e, "view")}
    ><i class="fas fa-street-view" title="查看" /></Button
  >
  <Button
    size="sm"
    color="primary"
    title="编辑"
    on:click={(e) => btnClick(e, "edit")}><i class="fa fa-edit" /></Button
  >
  <!-- <Button
    size="sm"
    on:click={(e) => btnClick(e, "new")}
    color="success"
    title="新增"><i class="far fa-plus-square" /></Button
  > -->
  <Button
    size="sm"
    color="danger"
    title="删除"
    on:click={(e) => btnClick(e, "del")}><i class="far fa-trash-alt" /></Button
  >
  <slot />
</ButtonGroup>
