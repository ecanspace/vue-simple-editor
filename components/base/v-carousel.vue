<template>
  <div class="carousel-container" :style="baseStyle">
    <el-carousel height="472px" arrow="always" indicator-position="none" :interval="5000">
      <el-carousel-item>
        <div class="carousel-item">
          <a class="article-link__wrapper">
            <div class="article-cover">
              <img src="https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/16905878.jpg" alt="">
            </div>
            <div class="article-title">关于发布2020年第一批市场层级定期调整决定的公告</div>
            <div class="article-description">经全国中小企业股份转让系统挂牌委员会审议通过，现作出2020年第一批市场层级定期调整决定。</div>
            <div class="article-date">2020-05-22</div>
          </a>
          <a class="article-link__wrapper">
            <div class="article-cover">
              <img src="//nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/16930653.jpg" alt="">
            </div>
            <div class="article-title">打造“一步式”出行服务商，倍施特做客《中国新三板》</div>
            <div class="article-description">近日，四川倍施特科技股份有限公司（证券代码：873100）董事长崔震苍，与兴业证券中小微企业融资业务总部业务董事高艳，共同做客《中国新三板》栏目，就倍施特近年来的发展情况进行了深入沟通。</div>
            <div class="article-date">2019-04-18</div>
          </a>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="carousel-item">
          <a class="article-link__wrapper">
            <div class="article-cover">
              <img src="//nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/16854526.jpg" alt="">
            </div>
            <div class="article-title">春运高峰在即 成都至巴中勇夺四川最火爆客运线路</div>
            <div class="article-description">距离春节只有两天了，你买到回家的票了吗？春节期间车票紧俏，千万不要临到头才着急买票哦。</div>
            <div class="article-date">2019-02-02</div>
          </a>
          <a class="article-link__wrapper">
            <div class="article-cover">
              <img src="//nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/16854873.jpg" alt="">
            </div>
            <div class="article-title">三省一市已联网 今起四川也能买云贵渝汽车票了！</div>
            <div class="article-description">在智能手机高度普及的今天，一部手机能搞定衣食住行，比如在网上购买火车票、汽车票。</div>
            <div class="article-date">2018-06-15</div>
          </a>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import baseMixin from '@/mixins/base/index'
export default {
  mixins: [baseMixin]
}
</script>

<style>
/* reset element css */
.el-carousel__arrow {
  top: 40%;
}
.carousel-container {
  min-width: 1120px;
}
.carousel-item {
  display: flex;
  justify-content: center;
  flex-basis: auto;
}
.article-link__wrapper {
  width: 540px;
  text-decoration: none;
  cursor: pointer;
}
.article-link__wrapper + .article-link__wrapper {
  margin-left: 40px;
}
.article-cover {
  width: 100%;
  height: 360px;
}
.article-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.article-title {
  color: #303133;
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
  padding: 14px 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.article-description {
  color: #909399;
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  max-height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.article-date {
  padding: 6px 0;
  color: #606266;
  font-size: 12px;
  text-align: right;
  line-height: 1;
}
</style>