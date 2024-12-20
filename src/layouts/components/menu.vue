<script setup lang="ts">
import { reactive } from 'vue'

interface IMenuItem {
  title: string
  icon?: string
  active?: boolean
}

interface IMenu extends IMenuItem {
  children?: IMenuItem[]
}

const menus = reactive<IMenu[]>([
  {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '错误页面',
    icon: 'fas fa-file-excel',
    children: [{ title: '404页面' }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '编辑器',
    icon: 'fas fa-pen-to-square',
    children: [{ title: '富文本编辑器' }, { title: 'markdown编辑器' }]
  }
])

const resetMenus = () => {
  menus.forEach((pmenu) => {
    pmenu.active = false
    pmenu.children?.forEach((cmenu) => (cmenu.active = false))
  })
}

const handleClick = (pmenu: IMenuItem, cmenu?: IMenuItem) => {
  if (pmenu.active) {
    resetMenus()
  } else {
    resetMenus()
    pmenu.active = true
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
          v-for="(item, index) in menus"
          :key="index">
          <dt @click="handleClick(item)">
            <section>
              <i
                class="mr-2"
                :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </section>
            <section>
              <i class="fas fa-angle-down text-[16px]"></i>
            </section>
          </dt>
          <dd
            v-show="item.active"
            :class="{ active: ele.active }"
            v-for="(ele, index) in item.children"
            :key="index">
            {{ ele.title }}
          </dd>
        </dl>
      </div>
      <div class="menu-footer"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-menu {
  @apply flex-shrink-0 w-[208px] bg-white min-h-screen;

  .admin-menu-warp {
    @apply text-gray-900 h-full flex flex-col;

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
      @apply flex-grow overflow-x-hidden overflow-y-auto p-2;

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
        @apply text-gray-900 text-sm;

        dt {
          @apply text-[16px] mt-6 py-1 flex justify-between items-center cursor-pointer;
        }

        dd {
          @apply py-3 pl-4 my-2 cursor-pointer rounded-md duration-300 hover:bg-[#f0f0f1];
          &.active {
            @apply bg-[#f0f0f1] text-blue-700;
          }
        }
      }
    }
  }
}
</style>
