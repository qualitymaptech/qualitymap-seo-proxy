import { VercelRequest, VercelResponse } from "vercel";

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(
`User-agent: *
Allow: /

Sitemap: https://seo.qualitymap.io/sitemap.xml`
  );
}
