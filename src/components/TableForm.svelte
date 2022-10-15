<script>
  import Card from "sveltestrap/src/Card.svelte";
  import Form from "sveltestrap/src/Form.svelte";
  import Row from "sveltestrap/src/Row.svelte";
  import FormGroup from "sveltestrap/src/FormGroup.svelte";
  import Label from "sveltestrap/src/Label.svelte";
  import Input from "sveltestrap/src/Input.svelte";
  import Col from "sveltestrap/src/Col.svelte";
  import Button from "sveltestrap/src/Button.svelte";
  import FormButton from "./FormButton.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";

  export let formData = {};
  export let rowAction;
</script>

{#if formData}
  <Form submit.prevent="onSave">
    <Row>
      <Col sm="6" md="4" style="height: 3em; display: none;">
        <FormGroup class="form-group form-row">
          <Label for="id" class="col-3 col-form-label">用户ID</Label>
          <div class="col">
            <Input bind:value={formData.userId} id="id" type="text" />
          </div>
        </FormGroup>
      </Col>
      <Col sm="6" md="4" style="height: 3em">
        <FormGroup class="form-group form-row">
          <Label for="name" class="col-3 col-form-label">用户姓名</Label>
          <div class="col">
            <Input bind:value={formData.name} id="name" type="text" />
          </div>
        </FormGroup>
      </Col>
      <Col sm="6" md="4" style="height: 3em">
        <FormGroup class="form-group form-row">
          <Label for="email" class="col-3 col-form-label">用户邮箱</Label>
          <div class="col">
            <Input bind:value={formData.email} id="email" type="text" />
          </div>
        </FormGroup>
      </Col>
      <Col sm="6" md="4" style="height: 3em">
        <FormGroup class="form-group form-row">
          <Label for="birthday" class="col-3 col-form-label">出生日期</Label>
          <div class="col">
            <Input bind:value={formData.birthday} id="birthday" type="text" />
          </div>
        </FormGroup>
      </Col>
      <Col sm="6" md="4" style="height: 3em">
        <FormGroup class="form-group form-row">
          <Label for="province" class="col-3 col-form-label">省份</Label>
          <div class="col">
            <Input bind:value={formData.province} id="province" type="text" />
          </div>
        </FormGroup>
      </Col>
    </Row>

    <div class="text-right mt-1">
      <FormButton bind:rowAction row={formData} />
    </div>
  </Form>
{/if}
