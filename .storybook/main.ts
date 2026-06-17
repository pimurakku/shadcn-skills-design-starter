import type { StorybookConfig } from "@storybook/nextjs-vite"
import { mergeConfig } from "vite"
import { fileURLToPath } from "url"
import path from "path"

const __dirname = fileURLToPath(new URL(".", import.meta.url))

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  async viteFinal(config) {
    const { default: tailwindcss } = await import("@tailwindcss/vite")
    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, ".."),
        },
      },
    })
  },
}

export default config
