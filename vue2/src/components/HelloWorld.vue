<template>
  <div class="hello">1</div>
</template>

<script>
import searchParams from './searchParams';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return { name: 'foo', searchParams: {} };
  },
  created() {
    this.searchParams = searchParams(this);
    console.log('this.searchParams.config', this.searchParams.config);
    this.name = 'bar';
    this.searchParams = searchParams(this);
    console.log('this.searchParams.config', this.searchParams.config);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
