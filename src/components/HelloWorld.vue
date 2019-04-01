<template>
  <div class="hello">
    <img src="./fapiao.jpg" alt="">
    <p class="red">from style-resource-plugin</p>
    <p>get from parent foo {{foo}}</p>
    <button @click="$emit('update:foo', !foo)">更换</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    foo: Boolean
  },
  data() {
    return {
      url: './fapiao.jpg'
    }
  },
  async created() {
    console.log(1)
    console.log(process.env.BASE_URL)
    console.log(Object.values({a:1, b: 2}))
    this.$watch('foo', (newVal) => {
      console.log(newVal, 'newVal')
      console.log(this, 'this in foo change')
    })
  },
  methods: {
    demoMethod() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
.hello {
  img {
    width: 50px;
    height: 50px;
  }
  .red {
    color: @red;
  }
}
</style>
