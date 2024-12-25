<script setup lang="ts">
import { router } from '@/store/router'
import { reactive } from 'vue'
import { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

const routerStore = router()

// interface IMenuItem {
//   title: string
//   icon?: string
//   active?: boolean
// }

// interface IMenu extends IMenuItem {
//   children?: IMenuItem[]
// }

// const menus = reactive<IMenu[]>([
//   {
//     title: '错误页面',
//     icon: 'fas fa-file-excel',
//     children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
//   },
//   {
//     title: '编辑器',
//     icon: 'fas fa-pen-to-square',
//     children: [{ title: '富文本编辑器' }, { title: 'markdown编辑器' }]
//   }
// ])

const resetMenus = () => {
  routerStore.routes.forEach((pRoute) => {
    pRoute.meta.isActive = false
    pRoute.children?.forEach((cRoute) => {
      if (cRoute.meta) {
        cRoute.meta.isActive = false
      }
    })
  })
}

const handleClick = (
  pRoute: RouteRecordNormalized,
  cRoute?: RouteRecordRaw
) => {
  if (cRoute && cRoute.meta) {
    if (pRoute.meta.isActive && cRoute.meta.isActive) {
      // resetMenus()
    } else {
      resetMenus()
      pRoute.meta.isActive = true
      cRoute.meta.isActive = true
    }
  } else {
    if (pRoute.meta.isActive) {
      resetMenus()
    } else {
      resetMenus()
      pRoute.meta.isActive = true
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
        <dl
          v-for="(route, index) in routerStore.routes"
          :key="index">
          <dt @click="handleClick(route)">
            <section>
              <i
                class="mr-2"
                :class="route.meta.icon"></i>
              <span>{{ route.meta.title }}</span>
            </section>
            <section>
              <i
                class="fas fa-angle-down text-[16px] duration-300"
                :class="{ ' rotate-180': route.meta.isActive }"></i>
            </section>
          </dt>
          <dd
            v-show="route.meta.isActive"
            :class="{ active: childrenRoute.meta?.isActive }"
            v-for="(childrenRoute, index) in route.children"
            @click="handleClick(route, childrenRoute)"
            :key="index">
            {{ childrenRoute.meta?.title }}
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
