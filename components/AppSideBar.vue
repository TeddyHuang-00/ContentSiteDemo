<template>
  <div
    class="fixed left-4 top-24 h-[calc(100vh-7rem)] bg-white bg-opacity-70 backdrop-blur-sm border rounded-lg transition-all ease-out flex flex-row"
    :class="{ 'w-12': !expand, 'w-1/4': expand }"
  >
    <div
      class="transition-all ease-in delay-150 overflow-hidden flex-grow"
      :class="{ 'opacity-0': !expand, 'opacity-100': expand }"
    >
      <ul class="m-6" :class="{ 'mx-[100vw]': !expand }">
        <li v-for="e in toc.links" class="list-disc list-inside">
          <NuxtLink :href="'#' + e.id">{{ e.text }}</NuxtLink>
          <ul v-if="e.children.length">
            <li v-for="c in e.children" class="pl-4 list-disc list-inside">
              <NuxtLink :href="'#' + c.id">{{ c.text }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div
      @click="expand = !expand"
      class="cursor-pointer h-full flex justify-center items-center transition-all ease-out p-2"
      :class="{ 'rotate-180': expand }"
    >
      <Icon name="ph:play-fill" size="18" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { toc } = useContent();
const expand = ref(false);
</script>

<style scoped></style>
