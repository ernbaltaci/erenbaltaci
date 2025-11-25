export interface BlogPostListItem {
  frontmatter: { publishDate: string; title: string };
  url: string;
}

export interface ProjectFrontmatter {
  name: string;
  description?: string;
  url?: string;
  isInactive?: boolean;
}

export interface WorkFrontmatter {
  name: string;
  role: string;
  description?: string;
  url?: string;
  past?: boolean;
}

export interface ShowcaseFrontmatter {
  slug: string;
  order?: number;
  title: string;
  subtitle?: string;
  category: string;
  timeline?: string;
  description: string;
  image: string;
  imageAlt?: string;
  url?: string;
}

export interface ShowcaseContent extends ShowcaseFrontmatter {
  bodyHtml?: string;
}

