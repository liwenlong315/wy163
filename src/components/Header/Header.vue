<!-- -->
  <template>
  <header class="header">
    <slot name="left"></slot>
    <!-- <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span> -->
    <slot name='mid'></slot>
    <slot name="right"></slot>
  </header>
</template>


<script type="text/ecmascript-6">
export default {
  name: ' ',
  data() {
    //这里存放数据
    return {
    }
  },
  components: {},
  props: {},
  //监控data中的数据变化
  watch: {},
  //监听属性 类似于data概念
  computed: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() { }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped></style>