<script setup lang="ts">
import MenuComponents from '@/layouts/components/menu.vue'
import NavbarComponents from './components/navbar.vue'
import HistoryLink from './components/historyLink.vue'
import menu from '@/store/menu'

const menuStore = menu()
menuStore.init()
</script>
<template>
  <div class="admin flex">
    <MenuComponents class="hidden md:block" />
    <div class="admin-main">
      <NavbarComponents class="admin-navbar" />
      <HistoryLink class="fixed right-0 top-[72px] z-10 w-[calc(100%-208px)]" />
      <div class="admin-content">
        <div>
          <router-view></router-view>
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

    .admin-content {
      @apply pt-20 md:pt-36 p-6;
    }
  }
}
</style>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
}
</script>
