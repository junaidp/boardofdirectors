<template>
  <div></div>
</template>

<script>
import { Model } from 'vue-mc'
export default {}

export class MyUser extends Model {
  defaults() {
    return {
      userName: '',
      password: ''
    }
  }
}
</script>

<style></style>
