<template>
  <div class="hello">
    <!-- 图片引入测试 -->
    <img src="./fapiao.jpg" alt="">
    <p class="red">from style-resource-plugin</p>
    <!-- .sync测试 -->
    <p>get from parent foo {{foo}}</p>
    <button @click="$emit('update:foo', !foo)">更换</button>
    <!-- debounce测试 -->
    <div>
      <input style="border: 1px solid #d19191;" type="text" v-model="text"/>
      <p>{{upperText}}</p>
    </div>
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
      url: './fapiao.jpg',
      text: '',
      upperText: ''
    }
  },
  async created() {
    console.log(this.$Common)
    console.log(process.env.BASE_URL)
    console.log(Object.values({a:1, b: 2}))
    this._dToUpperCase = this.$Common.debounce(this.toUpperCase, 300)
  },
  watch: {
    foo(newVal) {
      console.log(newVal, 'newVal')
      console.log(this, 'this in foo change')
    },
    text(str) {
      this._dToUpperCase(str)
    }
  },
  methods: {
    toUpperCase(str) {
      this.upperText = str.toUpperCase()
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
