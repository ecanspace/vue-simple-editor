<script>
import { menuData } from '@/config/base/index'
import wrapper from '@/mixins/base/wrapper'

export default {
  name: 'v-menu',

  mixins: [wrapper],

  props: {
    color: String
  },

  data() {
    return {
      menuData: menuData()
    }
  },

  render(h) {
    return (
      <header class={['smartable-header', ...this.flexClasses]} style={this.currentStyle}>
        <div class="smartable-logo">
          <img src="https://www.uupoop.com/vue_dist/img/uupoop.8e88ff95.svg" />
        </div>
        <ul class="smartable-menu" style={this.menuStyle}>
          {this.renderMenuItems(h)}
        </ul>
      </header>
    )
  },

  computed: {
    currentStyle() {
      const style = this.baseStyle

      if (this.currentProps.width) {
        style.margin = '0 auto'
      }

      return style
    },

    menuStyle() {
      return {
        color: this.currentProps.color
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
      return (<a src={item.path} class="smartable-menu__link">{item.label}</a>)
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

<style>
.smartable-header {
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background-color: #14151a;
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  min-width: 1000px;
  height: 60px;
  padding: 0 40px;
}
.smartable-logo img {
  object-fit: contain;
}
.smartable-menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 40px;
}
.smartable-menu__item {
  list-style: none;
  display: inline-block;
  height: 34px;
  line-height: 34px;
  padding: 0 20px;
}
.smartable-menu__link {
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
}
.smartable-menu__link:hover {
  color: #6398ff;
}
.smartable-menu__link.is-active {
  color: #fff;
  font-weight: 500;
}
/* cover */
.smartable-menu .el-dropdown {
  color: inherit;
}
</style>