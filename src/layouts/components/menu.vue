<script setup lang="ts">
import { IMenu } from '#/menu'
import menu from '@/store/menu'
import router from '@/router'
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()
const menuStore = menu()
watch(route, () => menuStore.setCurrentMenu(route), { immediate: true })

const resetMenus = () => {
  menuStore.menus.forEach((pmenu) => {
    pmenu.isActive = false
    pmenu.children?.forEach((cmenu) => {
      if (cmenu) {
        cmenu.isActive = false
      }
    })
  })
}

const handleClick = (pmenu: IMenu, cmenu?: IMenu) => {
  if (cmenu) {
    if (pmenu.isActive && cmenu.isActive) {
      // resetMenus()
    } else {
      resetMenus()
      pmenu.isActive = true
      cmenu.isActive = true
      // routers.push(cmenu)
      router.push({ name: cmenu.route })
    }
  } else {
    if (pmenu.isActive) {
      resetMenus()
    } else {
      resetMenus()
      pmenu.isActive = true
    }
  }
}
</script>

<template>
  <div class="admin-menu" :class="{ 'xy-menu-closed': menuStore.menusClose }">
    <div class="admin-menu-warp xy-menu-warp-fixed">
      <div class="menu-header">
        <router-link :to="{ name: 'home' }">
          <i class="fab fa-cloudversify logo-icon"></i>
          <h1>风花雪月</h1>
        </router-link>
      </div>
      <div class="menu-main">
        <dl>
          <dt @click="$router.push({ name: 'admin-home' })">
            <section>
              <i class="fas fa-house-chimney mr-2"></i>
              <span>dashboard</span>
            </section>
          </dt>
        </dl>
        <dl v-for="(menu, index) in menuStore.menus" :key="index">
          <dt @click="handleClick(menu)">
            <section>
              <i class="mr-2" :class="menu.icon"></i>
              <span>{{ menu.title }}</span>
            </section>
            <section>
              <i class="fas fa-angle-down text-[16px] duration-300" :class="{ ' rotate-180': menu.isActive }"></i>
            </section>
          </dt>
          <dd v-show="menu.isActive && !menuStore.menusClose">
            <div
              :class="{ active: cmenu.isActive }"
              v-for="(cmenu, index) in menu.children"
              @click="handleClick(menu, cmenu)"
              :key="index">
              {{ cmenu?.title }}
            </div>
          </dd>
        </dl>
      </div>
      <div class="menu-footer"></div>
    </div>

    <div class="bg block md:hidden" @click="menuStore.toggleState()"></div>
  </div>
</template>

<style scoped lang="scss">
.admin-menu {
  @apply flex-shrink-0 w-[208px] bg-white dark:bg-[#151518] min-h-screen z-50;

  .admin-menu-warp {
    @apply text-gray-900 dark:text-white h-full flex flex-col;

    .menu-header {
      @apply flex-shrink-0 py-4 border-b;
      a {
        @apply flex justify-center items-center;

        .logo-icon {
          @apply text-[32px] text-pink-300;
        }

        h1 {
          @apply font-mono text-[24px] font-bold pl-2;
        }
      }
    }
    .menu-main {
      @apply flex-grow;

      &::-webkit-scrollbar {
        width: 5px;
        height: 6px;
      }

      // 滚动条轨道
      &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 2px;
      }
      // 小滑块
      &::-webkit-scrollbar-thumb {
        // background: #c7c9cc;
        border-radius: 10px;
      }
      &:hover::-webkit-scrollbar-thumb {
        background: #c7c9cc;
      }

      dl {
        @apply text-gray-900 dark:text-white text-sm;

        dt {
          @apply text-[16px] mt-6 py-3 px-3  flex justify-between items-center cursor-pointer duration-300 hover:bg-[#f0f0f1] dark:hover:bg-zinc-600;
        }

        dd {
          div {
            @apply py-3 pl-8 my-2 cursor-pointer duration-300 hover:bg-[#f0f0f1] dark:hover:bg-zinc-600;
            &.active {
              @apply bg-[#f0f0f1] dark:bg-zinc-600 text-blue-700;
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .admin-menu {
    &.xy-menu-closed {
      @apply w-12 overflow-hidden;

      .menu-header {
        h1 {
          @apply hidden;
        }
      }

      .menu-main {
        dl {
          @apply relative;
          dt {
            @apply flex justify-center w-full;

            section {
              i {
                @apply mr-0;
              }
              span {
                @apply hidden;
              }

              &:nth-of-type(2) {
                @apply hidden;
              }
            }
          }

          &:hover {
            dd {
              display: block !important;
              @apply absolute  left-full top-0 w-[200px] bg-white border shadow-md;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .admin-menu {
    @apply fixed left-0 top-0 w-[208px] min-h-screen z-50;
    .admin-menu-warp {
      @apply h-full z-50 bg-white dark:bg-[#151518];
    }

    .bg {
      @apply fixed left-0 top-0 w-screen h-screen bg-gray-800 opacity-75 z-40; /* 默认隐藏遮罩 */
    }

    &.xy-menu-closed {
      @apply hidden;
    }
  }
}
</style>
