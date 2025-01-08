<script setup lang="ts">
import MenuComponents from '@/layouts/components/menu.vue'
import NavbarComponents from './components/navbar.vue'
import HistoryLink from './components/historyLink.vue'
import menu from '@/store/menu'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import utils from '@/utils'

const route = useRoute()
const menuStore = menu()
menuStore.init()
utils.theme()
watch(
  route,
  () => {
    menuStore.addHistoryMenu(route)
  },
  { immediate: true },
)
</script>
<template>
  <div class="admin flex">
    <MenuComponents />
    <div class="admin-main">
      <NavbarComponents class="admin-navbar" :class="{ 'admin-w-close': menuStore.menusClose }" />
      <HistoryLink class="admin-history" :class="{ 'admin-w-close': menuStore.menusClose }" />
      <div class="admin-content">
        <router-view #default="{ Component }">
          <Transition mode="out-in" appear enter-active-class="slide-in-right" leave-active-class="slide-out-left">
            <component :is="Component"></component>
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin {
  .admin-main {
    @apply flex-grow overflow-hidden bg-[#f6f6f8] dark:bg-[#0a0a0a];

    .admin-navbar {
      @apply fixed right-0 top-0 z-20 w-full md:w-[calc(100%-208px)];
    }

    .admin-history {
      @apply fixed right-0 top-[72px] z-10 w-[calc(100%-208px)];
    }

    .admin-w-close {
      @apply w-[calc(100%-48px)];
    }

    .admin-content {
      @apply pt-20 md:pt-36 p-6;

      /* 动画持续时间 */
      .slide-in-right,
      .slide-out-left {
        animation-duration: 0.5s; /* 动画时间 */
        animation-timing-function: ease-in-out; /* 缓动函数 */
        animation-fill-mode: both; /* 动画结束后保持最后状态 */
      }

      /* 右边滑入效果 */
      @keyframes slideInRight {
        from {
          transform: translateX(100%); /* 从屏幕右边外部开始 */
          opacity: 0; /* 初始透明 */
        }
        to {
          transform: translateX(0); /* 移动到正常位置 */
          opacity: 1; /* 最终显示 */
        }
      }
      .slide-in-right {
        animation-name: slideInRight;
      }

      /* 左边滑出效果 */
      @keyframes slideOutLeft {
        from {
          transform: translateX(0); /* 从正常位置开始 */
          opacity: 1; /* 初始显示 */
        }
        to {
          transform: translateX(-100%); /* 移动到屏幕左边外部 */
          opacity: 0; /* 最终透明 */
        }
      }
      .slide-out-left {
        animation-name: slideOutLeft;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .admin {
    .admin-main {
      .admin-w-close {
        @apply w-full;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .admin {
    .admin-main {
      .admin-w-close {
        @apply w-[calc(100%-48px)];
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
