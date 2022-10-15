<script lang="ts">
  import {
    Pagination,
    PaginationItem,
    PaginationLink,
    InputGroup,
    InputGroupText,
  } from "sveltestrap/src/index";

  export let paging;
  export let currentPage;

  function addClick(e) {
    e.preventDefault();
    currentPage++;
  }
  function minusClick(e) {
    e.preventDefault();
    currentPage--;
  }
  function goPage(e, pageNo) {
    e.preventDefault();
    currentPage = pageNo;
  }
</script>

{#if paging && paging.total > 0}
  <Pagination ariaLabel="Page navigation example">
    <PaginationItem disabled>
      <InputGroup>
        <InputGroupText
          >第{paging.pageNo}页 共{paging.pages}页 共{paging.total}</InputGroupText
        >
      </InputGroup>
    </PaginationItem>

    <PaginationItem>
      <PaginationLink
        first
        ariaLabel="首页"
        href="#"
        on:click={(e) => goPage(e, 1)}
      />
    </PaginationItem>

    <PaginationItem disabled={paging.pageNo <= 1}>
      <PaginationLink
        previous
        ariaLabel="上页"
        href="\#"
        on:click={minusClick}
      /></PaginationItem
    >

    {#each Array(paging.pages > 5 ? 5 : paging.pages) as _, row}
      <PaginationItem>
        <PaginationLink href="#" on:click={(e) => goPage(e, row + 1)}
          >{row + 1}</PaginationLink
        >
      </PaginationItem>
    {/each}
    <PaginationItem disabled={paging.pageNo >= paging.pages}>
      <PaginationLink href="#" on:click={addClick} next ariaLabel="下页" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink
        last
        ariaLabel="末页"
        href="#"
        on:click={(e) => goPage(e, paging.pages)}
      />
    </PaginationItem>
  </Pagination>
{/if}
