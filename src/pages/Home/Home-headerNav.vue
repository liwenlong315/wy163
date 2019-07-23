<template>
  <div class="horizontal-container">
    <div
      class="scroll-wrapper"
      ref="scroll"
    >
      <div class="scroll-content">
        <div
          class="scroll-item"
          v-for="(item, index) in emojis"
          :key="index"
          :class="{'active': activeIndex === index}"
          @click="changeIndex(index)"
        >{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from '@better-scroll/core'
export default {
  data() {
    return {
      emojis: [
        '推荐',
        '居家生活',
        '服饰鞋包',
        '美食酒水',
        '个护清洁',
        '母婴亲子',
        '运动旅游',
        '数码家电',
        '全球特色'
      ],
      activeIndex: 0
    }
  },
  created() {
    setTimeout(() => {
      this.init()
    }, 20)
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.bs.destroy()
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        probeType: 3,// listening scroll hook
        bounce: {
          top: false,
          bottom: false,
        },
        click: true,
      })
      this._registerHooks(['scroll', 'scrollEnd'], (pos) => {
        console.log('done')
      })
    },
    _registerHooks(hookNames, handler) {
      hookNames.forEach((name) => {
        this.bs.on(name, handler)
      })
    },
    changeIndex(index) {
      this.activeIndex = index
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.horizontal-container
  .scroll-wrapper
    width 650px
    white-space nowrap
    border-radius 5px
    overflow hidden
    .scroll-content
      display inline-block
      padding-left 30px
    .scroll-item
      color #333
      height 60px
      line-height 60px
      font-size 28px
      display inline-block
      text-align center
      padding 0 15px
      margin-left 20px
      &:nth-child(1)
        margin-left 0
      &.active
        color #B4282D
        border-bottom 4px solid #b4282d
</style>
