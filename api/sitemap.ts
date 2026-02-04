import { VercelRequest, VercelResponse } from "vercel";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const response = await fetch("https://seo.qualitymap.io/sitemap.xml");
  const xml = await response.text();

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xml);
}
