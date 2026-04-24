/// <reference types="astro/client" />

declare module '@vercel/analytics/astro' {
  export default function Analytics(props: any): any;
}

declare module '@vercel/speed-insights/astro' {
  export default function SpeedInsights(props: any): any;
}
