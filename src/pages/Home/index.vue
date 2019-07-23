<!-- -->
<template>
  <div id="home">
    <div
      class="maskAll"
      v-show="maskShow"
      @click="start"
    >
      <div
        class="maskTopnav"
        @click="end"
      >
      
      </div>
    </div>
    <header class="homeHeader">
      <div class="headerTop">
        <a class="headerLogo"> </a>
        <div class="headerInp">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品, 共21848款好物</span>
        </div>
        <button class="headerBtn">登录</button>
      </div>
      <div class="headerBottom">
        <nav class="headerNav">
          <div
            class="maskNav"
            v-if="maskShow"
          >全部频道</div>
          <HeaderNav v-if="!maskShow" />
        </nav>
        <div class="linearWarp">
          <div class="linear"></div>
          <div
            class="toggle"
            @click="start"
          >
            <div
              class="icon"
              :class="{go:rotate}"
            ></div>
          </div>
        </div>

      </div>
      <div
        class="maskWithe"
        v-show="maskShow"
      ></div>
    </header>
    <content class="homeCont">
      <div class="contSwiper"></div>
    </content>
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderNav from './Home-headerNav.vue'
export default {
  data() {
    return {
      rotate: false,
      maskShow: false,
      setmaskShow: true,
    }
  },
  methods: {
    //点击箭头是否旋转和显示遮罩层 默认为false
    start() {
      this.rotate = !this.rotate;
      this.maskShow = !this.maskShow;
    },
    //遮罩层白色部分点击无法改变状态
    end() {
      this.rotate = false;
      this.maskShow = false;
    },

  },
  components: {
    HeaderNav,
  }

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#home
  width 100%
  height 100%
  .maskAll
    position fixed
    top 148px
    left 0
    right 0
    bottom 0
    background rgba(0, 0, 0, 0.3)
    z-index 100
    .maskTopnav
      width 100%
      height 372px
      background #ffffff
  .homeHeader
    position fixed
    top 0px
    z-index 99
    height 148px
    width 100%
    background #fff
    .headerTop
      height 88px
      display flex
      align-items center
      justify-content center
      .headerLogo
        width 138px
        height 40px
        margin-right 20px
        background-image url('./images/logo.png')
        background-size 138px 40px
      .headerInp
        width 442px
        height 56px
        background-color #ededed
        border-radius 8px
        line-height 56px
        text-align center
        .iconfont
          font-size 28px
          color #666
          margin 0 10px 0 0
        span
          box-sizing border-box
          font-size 28px
          color #666
      .headerBtn
        height 40px
        width 74px
        text-align center
        line-height 40px
        color #b4282d
        font-size 24px
        margin 0
        padding 0
        margin-left 15px
        border 2px solid #b4282d
        border-radius 8px
        outline none
        background transparent
    .headerBottom
      height 60px
      width 100%
      position relative
      .maskNav
        width 650px
        height 60px
        background #fff
        font-size 28px
        color #333
        padding 0 0 0 30px
        line-height 60px
      .linearWarp
        width 160px
        height 60px
        position absolute
        top 0px
        right 0px
        display flex
        z-index 101
        .linear
          height 60px
          width 60px
          background-image linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%)
        .toggle
          height 60px
          width 100px
          display flex
          justify-content center
          align-items center
          .icon
            width 30px
            height 30px
            background url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png')
            background-size 30px 30px
            transform rotate(0deg)
            transition all 0.5s
            z-index 200
          .go
            transition all 0.5s
            transform rotate(180deg)
    .maskWithe
      width 300px
      height 300px
      background pink
      z-index 101
  .homeCont
    .contSwiper
      width 750px
      height 1400px
      background #4ee944
</style>