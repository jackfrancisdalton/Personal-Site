export interface SoftwareProject {
    slug: string,
    name: string,
    description: string,
    image: string,
    externalLinks?: { label: string, url: string }[],
};