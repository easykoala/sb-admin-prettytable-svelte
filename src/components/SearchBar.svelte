<script>
  import ButtonDropdown from "sveltestrap/src/ButtonDropdown.svelte";
  import DropdownItem from "sveltestrap/src/DropdownItem.svelte";
  import DropdownMenu from "sveltestrap/src/DropdownMenu.svelte";
  import DropdownToggle from "sveltestrap/src/DropdownToggle.svelte";
  import ButtonGroup from "sveltestrap/src/ButtonGroup.svelte";
  import Button from "sveltestrap/src/Button.svelte";
  import InputGroup from "sveltestrap/src/InputGroup.svelte";
  import InputGroupText from "sveltestrap/src/InputGroupText.svelte";
  import Input from "sveltestrap/src/Input.svelte";

  export let query;
  // let isOpen = false;
  export let columns = [
    { field: "name", title: "姓名", value: "" },
    { field: "email", title: "邮箱", value: "" },
    { field: "birthday", title: "生日", type: "date", value: "" },
  ];

  // 返回格式：{field:"name", value:"张三"}
  function btnClick(e, action) {
    e.preventDefault();
    // rowAction = action;
    console.log("rowData", action, columns);
    query = [];
    for (var i in columns) {
      var o = columns[i];
      if (o.value != "") {
        var q = {};
        q["field"] = o.field;
        q["value"] = o.value;
        query.push(q);
      }
    }
    query = query;
    console.log("rowData", action, query);
  }

  // 返回格式：{name:"张三"}
  function btnClick0(e, action) {
    e.preventDefault();
    // rowAction = action;
    console.log("rowData", action, columns);
    var q = {};
    for (var i in columns) {
      var o = columns[i];
      if (o.value != "") {
        q[o.field] = o.value;
      }
    }
    query = q;
    console.log("rowData", action, query);
  }
</script>

<ButtonDropdown>
  <DropdownToggle color="primary" spit caret>高级</DropdownToggle>
  <InputGroup>
    <Input
      placeholder={columns[0].title}
      title={columns[0].title}
      bind:value={columns[0].value}
    />
    <Button color="light" on:click={btnClick}
      ><i class="fa fa-search" aria-hidden="true" /></Button
    >
  </InputGroup>
  <slot />

  <DropdownMenu class="col-12">
    {#each columns as col}
      <DropdownItem header>
        {#if col.type}
          <Input
            type={col.type}
            placeholder={col.title}
            title={col.title}
            name={col.name}
            bind:value={col.value}
          />
        {:else}
          <Input
            placeholder={col.title}
            title={col.title}
            name={col.name}
            bind:value={col.value}
          />
        {/if}
      </DropdownItem>
    {/each}
    <DropdownItem divider />
    <DropdownItem class="text-center"
      ><Button color="success" on:click={(e) => btnClick(e, "view")}
        >提 交</Button
      ></DropdownItem
    >
  </DropdownMenu>
</ButtonDropdown>
