<script>
  import Mock from "mockjs";
  import "../../mock/index.js";
  import axios from "axios";

  import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
  import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";
  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";
  import Button from "sveltestrap/src/Button.svelte";
  import FormGroup from "sveltestrap/src/FormGroup.svelte";
  import Input from "sveltestrap/src/Input.svelte";

  import Table from "../../components/PrettyTable.svelte";
  import Paging from "../../components/Paging.svelte";
  import TableButton from "../../components/TableButton.svelte";
  import RowButton from "../../components/RowButton.svelte";
  import SearchBar from "../../components/SearchBar.svelte";
  import Modal from "../../components/Modal.svelte";
  import { goto } from "@sapper/app";
  import { paramStore } from "./store.js";
  import { onMount } from "svelte";

  let rowAction;
  let tableHeading = ["#", "姓名", "邮箱", "出生日期"];
  let tableField = ["id", "name", "email", "birthday"];
  let tableData = [];
  let currentPage;
  let paging = { pageNo: 1, pageSize: 5 };
  let query;
  // let paging = {pageNo:1, pageSize: 20, pages: 10, total: 235}

  let modalParam = { isOpen: false, tipMsg: "" };
  function toggle(msg) {
    modalParam.isOpen = true;
    modalParam.tipMsg = msg;
  }

  $: {
    console.log(`the currentPage is ${currentPage}`);

    if (currentPage > 0 || query) getData();
  }

  onMount(async () => {
    console.log("onMount");
    currentPage = 1;
    query = [];
  });

  async function getData() {
    paging.pageNo = currentPage;
    let res = await axios.get("/userList");
    var data = res.data.list;
    console.log(data);
    paging.total = data.length;
    paging.pages = Math.floor(paging.total / paging.pageSize);
    tableData = data.slice(
      paging.pageSize * currentPage,
      paging.pageSize * (currentPage + 1)
    );
  }

  function rowClick(event) {
    rowAction = event.detail;
    console.log(`the rowAction is ${rowAction.action}`);
    if (rowAction.action === "edit") {
      $paramStore = rowAction;
      goto("/pretty/table_edit");
    } else if (rowAction.action === "del") {
      // show modal
      toggle(rowAction.row.name);
    }
  }

  function tableClick(event) {
    var action = event.detail;
    console.log(`tableClick is ${action.action}`);
    if (action.action === "ins") {
      $paramStore = {};
      goto("/pretty/table_edit");
    }
  }

  function modalClick(event) {
    var action = event.detail;
    if (action.confirm === "ok") {
      console.log(`confirm is ${action.confirm}`);
      console.log(`delete row ${rowAction.row.name}`);
    }
  }
</script>

<Modal {...modalParam} on:modalClick={modalClick} />

<Breadcrumb class="mt-4 mb-1">
  <BreadcrumbItem>
    <a href=".">Dashboard</a>
  </BreadcrumbItem>
  <BreadcrumbItem active>PrettyTables</BreadcrumbItem>
</Breadcrumb>

<Card class="mb-1">
  <CardBody>
    <SearchBar bind:query />
  </CardBody>
</Card>

<Card class="mb-1">
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
    用户列表
    <TableButton on:tableClick={tableClick}>
      <Button title="Excel"><i class="fas fa-file-excel" /></Button>
    </TableButton>
  </CardHeader>
  <CardBody>
    <Table {tableHeading} {tableField} {tableData}>
      <RowButton slot="rows" let:row {row} on:rowClick={rowClick} />
    </Table>
    <Paging {paging} bind:currentPage />
  </CardBody>
</Card>
