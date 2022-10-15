<script>
  import ButtonGroup from "sveltestrap/src/ButtonGroup.svelte";
  import Button from "sveltestrap/src/Button.svelte";
  import ButtonToolbar from "sveltestrap/src/ButtonToolbar.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function btnClick(e, action) {
    e.preventDefault();
    dispatch("tableClick", { action: action });
  }
</script>

<ButtonGroup size="sm" class="text-right">
  <Button active title="新增" on:click={(e) => btnClick(e, "ins")}
    ><i class="fas fa-tasks" /></Button
  >
  <Button title="删除" color="danger"><i class="far fa-trash-alt" /></Button>
  <Button title="刷新"><i class="fas fa-redo" /></Button>
  <slot />
</ButtonGroup>
