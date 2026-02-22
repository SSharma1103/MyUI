/** A single navigation link used in the top navbar. */
export interface NavLink {
  href: string;
  text: string;
}

/** A single link entry in the sidebar. */
export interface SidebarLink {
  href: string;
  text: string;
}

/** A grouped category of sidebar links. */
export interface LinkCategory {
  title: string;
  links: SidebarLink[];
}

/** A search result entry returned by the search bar. */
export interface SearchResult {
  href: string;
  text: string;
}

/** A footer navigation link. */
export interface FooterLink {
  href: string;
  text: string;
}
