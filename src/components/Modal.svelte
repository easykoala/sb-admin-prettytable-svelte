<script lang="ts">
  import Button from "sveltestrap/src/Button.svelte";
  import Modal from "sveltestrap/src/Modal.svelte";
  import ModalBody from "sveltestrap/src/ModalBody.svelte";
  import ModalFooter from "sveltestrap/src/ModalFooter.svelte";
  import ModalHeader from "sveltestrap/src/ModalHeader.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // export let modalParam = { isOpen: false, tipMsg: "", confirm: "" };
  export let isOpen = false;
  export let tipMsg;

  const toggle = (confirm) => {
    isOpen = !isOpen;

    if (!isOpen) dispatch("modalClick", { confirm: confirm });
  };
</script>

<div>
  <Modal {isOpen} backdrop={false}>
    <ModalHeader>您确定删除吗？</ModalHeader>
    <ModalBody>
      {tipMsg}
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={() => toggle("ok")}>确定</Button>
      <Button color="secondary" on:click={() => toggle("cancel")}>取消</Button>
    </ModalFooter>
  </Modal>
</div>
