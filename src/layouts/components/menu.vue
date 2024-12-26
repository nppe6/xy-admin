<script setup lang="ts">
import { IMenu } from '#/menu'
import menu from '@/store/menu'
import router from '@/router'

const menuStore = menu()

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
  <div class="admin-menu">
    <div class="admin-menu-warp xy-menu-warp-fixed p-2">
      <div class="menu-header">
        <router-link :to="{ name: 'home' }">
          <i class="fab fa-cloudversify logo-icon"></i>
          <h1>风花雪月</h1>
        </router-link>
      </div>
      <div class="menu-main">
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
          <dd
            v-show="menu.isActive"
            :class="{ active: cmenu?.isActive }"
            v-for="(cmenu, index) in menu.children"
            @click="handleClick(menu, cmenu)"
            :key="index">
            {{ cmenu?.title }}
          </dd>
        </dl>
      </div>
      <div class="menu-footer"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-menu {
  @apply flex-shrink-0 w-[208px] bg-white dark:bg-[#151518] min-h-screen;

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
      @apply flex-grow overflow-x-hidden overflow-y-auto;

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
          @apply text-[16px] mt-6 py-3 px-3  flex justify-between items-center cursor-pointer rounded-md duration-300 hover:bg-[#f0f0f1] dark:hover:bg-zinc-600;
        }

        dd {
          @apply py-3 pl-8 my-2 cursor-pointer rounded-md duration-300 hover:bg-[#f0f0f1] dark:hover:bg-zinc-600;
          &.active {
            @apply bg-[#f0f0f1] dark:bg-zinc-600 text-blue-700;
          }
        }
      }
    }
  }
}
</style>
