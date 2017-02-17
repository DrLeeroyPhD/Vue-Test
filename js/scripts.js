var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    styleObject: {
      color: '',
      backgroundColor: '',
      fontSize: '',
      padding: ''
      
    }
  },
  methods: {
    changeMessage(){
      this.message = "Vue Rocks!";
    }
  }
});