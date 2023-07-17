<template>
  <div
    class="bg-primary-50 border border-primary-100 shadow-2xl relative rounded-lg pt-8 overflow-hidden my-5"
  >
    <div class="absolute left-3 flex justify-between w-12 top-2.5">
      <span class="w-3 h-3 rounded-full bg-rose-400"></span>
      <span class="w-3 h-3 rounded-full bg-amber-400"></span>
      <span class="w-3 h-3 rounded-full bg-green-400"></span>
    </div>
    <div class="w-full leading-3 block">
      <slot />
    </div>
  </div>
</template>
