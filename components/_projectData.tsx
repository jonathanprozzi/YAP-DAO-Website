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
    logo: "/daohaus-logo.png",
    services: "Public Relations",
    twitter: "https://twitter.com/nowdaoit",
    website: "https://daohaus.club",
    description: "DAOhaus is YAP DAO's first and current client.",
  },
  {
    name: "PrimeDAO",
    logo: "/primedao-logo.jpg",
    services: "Public Relations",
    twitter: "https://twitter.com/PrimeDAO_",
    website: "https://prime.xyz",
    description: "PrimeDAO is a current client.",
  },
  {
    name: "AladdinDAO",
    logo: "/aladdindao-logo.jpg",
    services: "Public Relations",
    twitter: "https://twitter.com/aladdindao",
    website: "https://aladdin.club",
    description: "AladdinDAO is a current client.",
  },
];
