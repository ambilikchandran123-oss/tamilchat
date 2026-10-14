export interface SeoPageData {
  slug: string;
  category: 'district' | 'diaspora' | 'topic' | 'feature' | 'policy';
  categoryLabel: string;
  city?: string;
  title: string;
  description: string;
  h1: string;
  tamilSub?: string;
  intro: string;
  localContext?: {
    heading: string;
    paragraphs: string[];
  };
  features?: {
    title: string;
    desc: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export declare const SEO_PAGES: SeoPageData[];
export declare const getSeoPageBySlug: (slug: string) => SeoPageData | null;
