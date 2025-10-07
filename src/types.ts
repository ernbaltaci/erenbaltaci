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

