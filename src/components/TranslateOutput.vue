<template>
  <button type="button" v-clipboard="copyData" @success="handleSuccess" @error="handleError" class="btn btn-info" >{{translatedText}}</button>
</template>

<script>
export default {
  name: 'translateOutput',
  props:['translatedText'],
  data() {
        return {
            copyData: 'copy data'
        }
    },
 
  template: '<App/>',
  methods: {
        handleSuccess(e) {
            console.log(e);
        },
        handleError(e) {
            console.log(e);
        },
    }
}


</script>

<style>
button .btn .btn-info{
	display:none;
}
</style>