import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./app.vue",
    "./{components,pages,content}/**/*.{vue,js,ts,jsx,tsx,html,md}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.slate,
      },
    },
  },
  plugins: [],
} satisfies Config;
