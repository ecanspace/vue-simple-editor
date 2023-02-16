<template>
  <footer class="smartable-footer">
    <div class="smartable-footer__content">
      <div class="smartable-footer__inner">
        <div class="smartable-footer__row pv20" style="border-bottom: 1px solid #475261">
          <div class="smartable-footer__column">
            <h3 class="smartable-footer__title">商务热线</h3>
            <div class="smartable-footer__text">18380449036（包经理）</div>
            <div class="smartable-footer__text">18980607873（傅经理）</div>
          </div>
          <div class="smartable-footer__column">
            <h3 class="smartable-footer__title">客服热线</h3>
            <div class="smartable-footer__text">400-660-8787（全国）</div>
          </div>
          <div class="smartable-footer__column">
            <h3 class="smartable-footer__title">关注我们</h3>
            <div class="smartable-footer__popover">
              <v-popover-fade v-for="item in popoverData" :key="item.id" :props="item"></v-popover-fade>
            </div>
          </div>
          <div class="smartable-footer__column">
            <h3 class="smartable-footer__title">客户端下载</h3>
            <div class="smartable-footer__qrcode">
              <img src="https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/20015533.jpg" alt="">
            </div>
          </div>
          <div class="smartable-footer__column">
            <h3 class="smartable-footer__title">小程序体验</h3>
            <div class="smartable-footer__row">
              <div class="smartable-footer__column" style="margin-right: 10px;">
                <div class="smartable-footer__qrcode">
                  <img src="https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/16849465.jpg" alt="">
                </div>
                <div style="text-align: center; line-height: 2;">微信小程序</div>
              </div>
              <div class="smartable-footer__column" style="margin-right: 10px;">
                <div class="smartable-footer__qrcode">
                  <img src="https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/20015816.jpg" alt="">
                </div>
                <div style="text-align: center; line-height: 2;">支付宝小程序</div>
              </div>
              <div class="smartable-footer__column" style="margin-right: 10px;">
                <div class="smartable-footer__qrcode">
                  <img src="https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/20015955.jpg" alt="">
                </div>
                <div style="text-align: center; line-height: 2;">百度小程序</div>
              </div>
            </div>
          </div>
        </div>
        <div class="smartable-footer__row pv20 pt40">
          <div class="smartable-footer__column" v-for="(column, index) in linkData" :key="index">
            <h3 class="smartable-footer__title">{{column.label}}</h3>
            <ul class="smartable-footer__list">
              <li class="smartable-footer__item" v-for="(item, ii) in column.children" :key="ii">
                <a class="smartable-footer__link" target="_blank" :href="item.url">{{item.label}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="smartable-copyright">
      <p>Copyright ©2020 倍施特科技（集团）股份有限公司 Best Technology Co.Ltd 股票代码 873100</p>
      <p>增值电信业务经营许可证 川B2-20110154-6 川公网安备 51019002001334号</p>
    </div>
  </footer>
</template>
<script>
import { footerData } from '@/config/index'
export default {
  name: 'v-footer',
  data() {
    return {
      linkData: footerData(),
      popoverData: [
        {
          id: '123',
          width: 53,
          height: 29,
          triggerImage: 'https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/16043269.png',
          contentImage: 'https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/20016067.jpg',
          contentImageWidth: 118,
          contentImageHeight: 120,
        },
        {
          id: '456',
          width: 53,
          height: 29,
          left: 53,
          triggerImage: 'https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/16043270.png',
          contentImage: 'https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/20015409.jpg',
          contentImageWidth: 118,
          contentImageHeight: 120,
        },
        {
          id: '789',
          width: 53,
          height: 29,
          left: 106,
          triggerImage: 'https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/16043268.png',
          contentImage: 'https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/20015453.png',
          contentImageWidth: 118,
          contentImageHeight: 120,
        }
      ]
    }
  }
}
</script>