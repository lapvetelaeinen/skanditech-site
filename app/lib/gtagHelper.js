export const pageview = (gtmId, url) => {
  window.gtag("config", gtmId, {
    page_path: url,
  });
};
