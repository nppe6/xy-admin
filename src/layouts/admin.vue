<script setup lang="ts">
import MenuComponents from '@/layouts/components/menu.vue'
import NavbarComponents from './components/navbar.vue'
import HistoryLink from './components/historyLink.vue'
import menu from '@/store/menu'
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()
const menuStore = menu()
menuStore.init()
watch(
  route,
  () => {
    menuStore.addHistoryMenu(route)
  },
  { immediate: true },
)

// menuStore.init()
// // 历史菜单的 添加
// menuStore.addHistoryMenu(route)
// // 路由更新之前触发
// onBeforeRouteUpdate((to) => {
//   menuStore.addHistoryMenu(to)
// })
// // 路由离开之前触发
// onBeforeRouteLeave((to) => {
//   menuStore.addHistoryMenu(to)
// })
</script>
<template>
  <div class="admin flex">
    <MenuComponents />
    <div class="admin-main">
      <NavbarComponents class="admin-navbar" :class="{ 'admin-w-close': menuStore.menusClose }" />
      <HistoryLink class="admin-history" :class="{ 'admin-w-close': menuStore.menusClose }" />
      <div class="admin-content">
        <div>
          <router-view #default="{ Component }">
            <Transition enter-active-class="animate__animated animate__fadeInRightBig">
              <component :is="Component"></component>
            </Transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin {
  .admin-main {
    @apply flex-grow overflow-hidden bg-[#f6f6f8] dark:bg-[#0a0a0a];

    .admin-navbar {
      @apply fixed right-0 top-0 z-10 w-full md:w-[calc(100%-208px)];
    }

    .admin-history {
      @apply fixed right-0 top-[72px] z-10 w-[calc(100%-208px)];
    }

    .admin-w-close {
      @apply w-[calc(100%-48px)] overflow-hidden;
    }

    .admin-content {
      @apply pt-20 md:pt-36 p-6;
    }
  }
}

@media screen and (max-width: 768px) {
  .admin {
    .admin-main {
      .admin-w-close {
        @apply w-full overflow-hidden;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .admin {
    .admin-main {
      .admin-w-close {
        @apply w-[calc(100%-48px)] overflow-hidden;
      }
    }
  }
}
</style>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
}
</script>
