export const RSS_URL = "https://feeds.captivate.fm/inside-the-hutt/";

export function getTag(source: string, tag: string): string {
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = source.match(
    new RegExp(
      `<${escaped}[^>]*>(?:<!\\[CDATA\\[)?(.*?)(?:\\]\\]>)?</${escaped}>`,
      "s"
    )
  );
  return match ? match[1].trim() : "";
}

export function getCdata(source: string, tag: string): string {
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = source.match(
    new RegExp(`<${escaped}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${escaped}>`)
  );
  return match ? match[1].trim() : "";
}

export function getAttr(source: string, tag: string, attr: string): string {
  const match = source.match(
    new RegExp(`<${tag}[^>]*${attr}="([^"]*)"`, "s")
  );
  return match ? match[1] : "";
}
