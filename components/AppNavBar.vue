<template>
  <div
    class="sticky top-2 z-50 p-4 my-2 mx-4 border border-primary-400 rounded-lg bg-primary-300 bg-opacity-50 border-opacity-50 backdrop-blur-sm"
  >
    <ContentNavigation v-slot="{ navigation }" class="float-right">
      <ul class="flex flex-row gap-4">
        <li>
          <Icon name="uil:github" size="24" />
        </li>
        <li class="flex-grow"></li>
        <li
          v-for="link in navigation"
          :key="link._path"
          class="py-2 px-4 border rounded-md bg-primary-100 border-primary-200 hover:bg-primary-200 hover:border-primary-300 transition-colors"
        >
          <NuxtLink :to="link._path" class="border-none hover:border-none">
            <Icon v-if="link.icon" :name="link.icon" size="24" />
            <div v-else>
              {{ link.title }}
            </div>
          </NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </div>
</template>
