// Central place to edit personal links and site metadata.
// Replace these values before deploying.

export const SITE = {
  name: "Ezequiel Menegas",
  // Used for canonical URLs, Open Graph and hreflang. Set the production domain here
  // or via the NEXT_PUBLIC_SITE_URL environment variable.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ezequielmenegas.com",
};

export const LINKS = {
  // TODO: replace with your real profile URLs.
  linkedin: "https://www.linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
  email: "you@example.com",
};

export const EMAIL_HREF = `mailto:${LINKS.email}`;
