import { useEffect } from "react";

interface DocumentMeta {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

function setMetaTag(attr: "name" | "property", key: string, content?: string) {
  if (!content) return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useDocumentMeta({ title, description, ogTitle, ogDescription, ogImage, canonical }: DocumentMeta) {
  useEffect(() => {
    document.title = title;
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", ogTitle);
    setMetaTag("property", "og:description", ogDescription);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("name", "twitter:title", ogTitle);
    setMetaTag("name", "twitter:description", ogDescription);
    setMetaTag("name", "twitter:image", ogImage);

    if (canonical) {
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [title, description, ogTitle, ogDescription, ogImage, canonical]);
}
