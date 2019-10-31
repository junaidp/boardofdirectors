<script type="text/x-template" id="modal-template">
;<transition name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>
        <button v-onclick="$emit('close')">ok</button>
        <div class="modal-footer">
          <slot name="footer">default footer</slot>
        </div>
      </div>
    </div>
  </div>
</transition>
</script>

<!-- app -->
<template>
  <div id="app">
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
      -->
      <h3 slot="header">custom header</h3>
    </modal>
  </div>
</template>
