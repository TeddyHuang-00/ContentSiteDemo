<template>
  <img :src="refinedSrc" :alt="alt" :width="width" :height="height" />
</template>

<script setup lang="ts">
import { joinURL } from "ufo";

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});
const { cdnURL } = useAppConfig();
const refinedSrc = computed(() => {
  return joinURL((cdnURL as string) || "/", props.src);
});
</script>
