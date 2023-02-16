<script>
import { menuData } from '@/config/index'
import baseMixin from '@/mixins/base/index'

const placeholderImage = 'https://nwzimg.wezhan.cn/contents/sitefiles2040/10204449/images/28094309.png'

export default {
  name: 'v-header',

  mixins: [baseMixin],

  data() {
    return {
      menuData: menuData()
    }
  },

  render(h) {
    return (
      <header class="smartable-header">
        <div class="smartable-logo">
          <img src={this.state.logo || placeholderImage} />
        </div>
        <ul class="smartable-menu" style={this.menuStyle}>
          {this.renderMenuItems(h)}
        </ul>
      </header>
    )
  },

  computed: {
    // currentStyle() {
    //   const style = this.baseStyle

    //   if (this.state.width) {
    //     style.margin = '0 auto'
    //   }

    //   return style
    // },

    menuStyle() {
      return {
        color: this.state.color
      }
    }
  },

  methods: {
    renderMenuItems(h) {
      return this.menuData.map((item) => (
        <li class="smartable-menu__item">
          {item.children.length === 0 ? this.renderLink(h, item) : this.renderSubmenu(h, item)}
        </li>
      ))
    },

    renderLink(h, item) {
      return (<a class="smartable-menu__link" href={item.path}>{item.label}</a>)
    },

    renderSubmenu(h, item) {
      const DropdownItems = item.children.map((subItem) => (
        <el-dropdown-item>{this.renderLink(h, subItem)}</el-dropdown-item>
      ))

      return (
        <el-dropdown props={{ trigger: 'click' }}>
          <span class="smartable-menu__link">{item.label} <i class="el-icon-arrow-down"></i></span>
          <el-dropdown-menu slot="dropdown">{DropdownItems}</el-dropdown-menu>
        </el-dropdown>
      )
    }
  }
}
</script>