import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textpink: "#ca4272",
        textblue: "#035490",
        textblueBold: "#003366",
        textgray: "#313131",
        bannergray: "#f5f5f5",
        footerblue: "#092348",
        text_footer_gray: "#8491A3"
      },
    },
  },
  plugins: [],
} satisfies Config;
