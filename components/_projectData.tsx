export interface Project {
  name: string;
  logo: string;
  services: string;
  twitter: string;
  website?: string;
  description: string;
}

export const projects: Project[] = [
  {
    name: "DAOhaus",
    logo:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    services: "Public Relations",
    twitter: "https://twitter.com/nowdaoit",
    website: "https://daohaus.club",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];
