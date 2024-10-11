import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"; // Import the plugin
import tailwindScrollbar from "tailwind-scrollbar"; // Import the plugin

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrolling: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scrolling: "scrolling 10s linear infinite",
      },
      container: {
        center: true,
        padding: "1rem", // Adds padding around the container
      },
      lineHeight: {
        "12": "4.5rem",
      },
      screens: {
        // Custom breakpoints if needed
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1240px",
      },
      backgroundImage: {
        "main-bg": "url('/assets/bg/main-bg.jpg')",
      },
      fontSize: {
        "3xl": "2rem",
      },
      colors: {
        yellow: {
          100: "#FFFBEB",
          300: "#E3D258",
          500: "#FFD700",
          700: "#FDBF01",
        },
        pink: {
          500: "#F4117B",
        },
        green: {
          500: "#15AE17",
          900: "#0C7861",
        },
        violet: {
          700: "#2C0EBB",
        },
        gray: {
          300: "#E5E7EB",
          400: "#D1D5DB",
          500: "#9CA3AF",
          600: "#4B5563",
          700: "#F3F4F6",
          900: "#6B7280",
        },
        red: {
          100: "#FFF1EF",
          700: "#FC4921",
        },
        blue: {
          500: "#1A7BFF",
          800: "#1F2937",
          900: "#111827",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindScrollbar],
};
export default config;
