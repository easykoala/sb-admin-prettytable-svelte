<script>
  import ButtonGroup from "sveltestrap/src/ButtonGroup.svelte";
  import Button from "sveltestrap/src/Button.svelte";
  export let row;
  export let rowAction;

  function btnClick(e, action) {
    e.preventDefault();
    rowAction = action;
    console.log("rowData", action, row);
  }
</script>

<ButtonGroup size="sm">
  <Button size="sm" color="danger" on:click={(e) => btnClick(e, "cancel")}>
    <i class="fa fa-ban" /> 取 消
  </Button>
  <Button
    type="submit"
    size="sm"
    color="success"
    class="ml-1"
    on:click={(e) => btnClick(e, "save")}
  >
    <i class="fa fa-save" /> 保 存
  </Button>
</ButtonGroup>
