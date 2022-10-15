<script>
  import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
  import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";
  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";
  import Button from "sveltestrap/src/Button.svelte";

  import TableForm from "../../components/TableForm.svelte";
  import TableButton from "../../components/TableButton.svelte";

  import axios from "axios";
  import { onMount } from "svelte";
  import { paramStore } from "./store.js";

  let rowAction;
  let formData;

  $: {
    console.log(`rowAction is ${rowAction}`);
    if (rowAction) {
      if (rowAction && rowAction === "save") {
        // axios.post("/user/update", formData).then((res) => {
        //   formData = res.data;
        //   console.log(formData);
        // });
      } else {
        window.history.back();
      }
    }
  }

  onMount(async () => {
    console.log("urlParam", $paramStore);
    if ($paramStore.row) {
      formData = $paramStore.row;
    }
  });
</script>

<h1 class="mt-4">Tables</h1>
<Breadcrumb class="mb-4">
  <BreadcrumbItem>
    <a href=".">Dashboard</a>
  </BreadcrumbItem>
  <BreadcrumbItem active>Tables</BreadcrumbItem>
</Breadcrumb>

<Card class="mb-4">
  <CardHeader>
    <svg
      class="svg-inline--fa fa-table fa-w-16"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="table"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      data-fa-i2svg=""
    >
      <path
        fill="currentColor"
        d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51
        0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224
        416H64v-96h160v96zm0-160H64v-96h160v96zm224
        160H288v-96h160v96zm0-160H288v-96h160v96z"
      />
    </svg>
    用户信息
    <TableButton>
      <Button>Apple</Button>
    </TableButton>
  </CardHeader>
  <CardBody>
    <TableForm {formData} bind:rowAction />
  </CardBody>
</Card>
