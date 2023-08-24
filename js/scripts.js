const { createApp } = Vue;

createApp({
  data() {
    return {
      songs: [], 
    };
  },
  created() {
    axios
      .get('http://localhost/boolean/php-dischi-json/api.php')
      .then((res) => {
        this.songs = res.data; 
      });
  },
}).mount('#app');