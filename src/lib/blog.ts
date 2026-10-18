export interface BlogPost {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  categories: string[];
}

const BLOG_RSS_URL = 'https://jefferl05.github.io/console-do-jeff/rss.xml';

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function extractXmlTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  return match ? decodeHtmlEntities(match[1].trim()) : '';
}

function extractAllXmlItems(xml: string): string[] {
  const items: string[] = [];
  const regex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    items.push(match[1]);
  }
  return items;
}

function parseItem(itemXml: string): BlogPost | null {
  const title = extractXmlTag(itemXml, 'title');
  const link = extractXmlTag(itemXml, 'link');
  const description = extractXmlTag(itemXml, 'description');
  const pubDate = extractXmlTag(itemXml, 'pubDate');

  if (!title || !link) return null;

  const categories: string[] = [];
  const catRegex = /<category>([\s\S]*?)<\/category>/g;
  let catMatch;
  while ((catMatch = catRegex.exec(itemXml)) !== null) {
    categories.push(decodeHtmlEntities(catMatch[1].trim()));
  }

  return { title, link, description, pubDate, categories };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(BLOG_RSS_URL);
    if (!res.ok) throw new Error(`RSS fetch error: ${res.status}`);
    const xml = await res.text();
    const items = extractAllXmlItems(xml);
    return items.map(parseItem).filter((p): p is BlogPost => p !== null);
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return [];
  }
}

export function formatBlogDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
