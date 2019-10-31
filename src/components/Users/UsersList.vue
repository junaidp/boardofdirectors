<template src="./UsersList.html"></template>

<script>
import UserService from './UserService'
import { EventBus } from '../../main'
export default {
  data() {
    UserService
    return {
      items: [],
      message: ''
    }
  },
  methods: {
    getUsers: function() {
      UserService.getUsers().then(data => {
        alert(data.result)
        this.items = data.result
        this.message = data.message
      })
    },

    deleteUser: function(item) {
      UserService.deleteUser(item._id).then(data => {
        alert(data.message)
        this.getUsers()
      })
    },
    editUser(user) {
      EventBus.$emit('userSelected', user)
    }
  },
  beforeMount() {
    this.getUsers()
  }
}
</script>

<style>
.title-container {
  max-width: 917px;
}
.no-border {
  border: none !important;
}
.no-padding-left {
  padding-left: 0px !important;
}
.table-body {
  background-color: #fff;
  border: 1px solid #e5e5e5;
  margin-top: 40px;
  max-width: 917px;
  border-bottom: none;
  min-width: 480px;
}
.table-row {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
}
.table-row-head {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
}
.table-col-1 {
  font-size: 13px;
  font-weight: bold;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  box-sizing: border-box;
}

.table-col {
  font-size: 15px;
  font-weight: normal;
  padding-right: 20px;
  padding-left: 20px;
  border-left: 1px solid #e5e5e5;
  padding-top: 12px;
  padding-bottom: 12px;
  box-sizing: border-box;
  word-wrap: break-word;
}
.open {
  height: 12px;
  width: 12px;
  display: block;
  margin-top: 3px;
}
.rejected {
  height: 12px;
  width: 12px;
  display: block;
  margin-top: 3px;
}
.approved {
  height: 9px;
  width: 12px;
  display: block;
  margin-top: 3px;
}
.checkbox {
  height: 20px;
  width: 20px;
  background-color: white;
  border: 1px solid #e5e5e5;
}

.approved-row {
  background-color: #f4faf6;
  border-bottom: 1px solid #2fa348;
}
.rejected-row {
  border-bottom: 1px solid #df2828;
  background-color: #fdf4f4;
}
.flex-col-5 {
  width: 5%;
}
.flex-col-10 {
  width: 10%;
}
.flex-col-15 {
  width: 15%;
}
.flex-col-20 {
  width: 20%;
}
.flex-col-25 {
  width: 25%;
}
.flex-col-30 {
  width: 30%;
}
.flex-col-35 {
  width: 35%;
}
.flex-col-40 {
  width: 40%;
}

.font-size-12 {
  font-size: 12px;
}
.font-size-10 {
  font-size: 10px;
}
.color-red {
  color: #df2828;
}
.color-green {
  color: #2fa348;
}
.color-grey {
  color: #c5c5c5;
}

.color-blue {
  color: #0265a4;
}
.color-white {
  color: #ffffff;
}
.color-orange {
  color: #df5828;
}

.demo-icon {
  font-family: 'fontello';
  font-style: normal;
  font-weight: normal;
  speak: none;

  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: 0.2em;
  text-align: center;
  /* opacity: .8; */

  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;

  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;

  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: 0.2em;

  /* You can be more comfortable with increased icons size */
  /* font-size: 120%; */

  /* Font smoothing. That was taken from TWBS */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}

.demo-icon {
  font-family: 'fontello';
  font-style: normal;
  font-weight: normal;
  speak: none;

  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: 0.2em;
  text-align: center;
  /* opacity: .8; */

  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;

  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;

  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: 0.2em;

  /* You can be more comfortable with increased icons size */
  /* font-size: 120%; */

  /* Font smoothing. That was taken from TWBS */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}
</style>
