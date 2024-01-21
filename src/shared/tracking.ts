declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const trackPageView = (path: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "PageView",
    pageUrl: window.location.href,
    pageTitle: path.substring(1), // Remove first slash
  });
};
