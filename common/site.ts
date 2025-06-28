import config from "@/common/config";
import { SiteConfig } from "@/types/siteConfig";


const baseSiteConfig = {
  name: config?.productName,
  title: config?.productName,
  description: "A modern Next.js application demonstrating Docker single-stage vs multi-stage builds, featuring advanced UI components and optimized performance.",
  url: config?.baseUrl,
  metadataBase: new URL(config?.baseUrl),
  keywords: [
    "Next.js",
    "Docker",
    "Docker Multi-Stage",
    "Docker Single-Stage",
    "Containerization",
    "DevOps",
    "React",
    "TypeScript",
    "Web Development",
    "Frontend",
    "Performance Optimization",
    "Docker Build Optimization",
    "Docker Best Practices"
  ],
  authors: [
    {
      name: config?.author?.name,
      url: config?.author?.url,
      linkedin: config?.author?.linkedin,
      github: config?.author?.github,
    }
  ],
  creator: config?.author?.name,
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en-US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    site: baseSiteConfig.url,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
