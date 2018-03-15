<template>
  <div class="row" id="translateForm">
    <div class="col-md-6 col-md-offset-3 center">
      <form id="transForm" class="jumbotron" v-on:submit="formSubmit">
        <br />
        <input class="form-control" type="text" v-model="textToTranslate" placeholder="Enter a Word...">
        <br />
        <select class="form-control" v-model="language">
          <option value="ru">Russian</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="ja">Japanese</option>
          <option value="zh">Chinese</option>
          <option value="ko">Korean</option>
          <option value="hi">Hindi</option>
          <option value="ms">Malay</option>
          <option value="kn">Kannada</option>
        </select><br />
        <input class="btn btn-primary" type="submit" value="Translate">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'translateForm',
  data(){
    return {
      textToTranslate:'',
      language:''
    }
  },
  created() {
    this.language = 'ru';
  },
  methods: {
    formSubmit(e){
      this.$emit('formSubmit', this.textToTranslate, this.language);
      e.preventDefault();
    }
  }
}
</script>

<style>
  #transForm{
    border-radius:10px;
    border: 1px #ccc solid;
    display: block;
    margin-left: auto;
    margin-right: auto;

  }

</style>