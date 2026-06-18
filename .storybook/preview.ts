import type { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-themes"
import "../app/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    layout: "centered",
    // Disable the backgrounds addon — our globals.css handles bg-background
    // via @layer base { body { @apply bg-background; } } which responds to .dark on <html>
    backgrounds: { disable: true },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        Light: "",
        Dark: "dark",
      },
      defaultTheme: "Light",
      // Explicitly target <html> so @custom-variant dark (&:is(.dark *)) resolves correctly
      parentSelector: "html",
    }),
  ],
}

export default preview
