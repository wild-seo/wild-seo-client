export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8"?>
            <urlset
                xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
                xmlns:xhtml="https://www.w3.org/1999/xhtml"
			    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
            >

            <url>
            <loc>https://wild-seo.com/</loc>
            <lastmod>2024-10-09T09:32:26+00:00</lastmod>
            <priority>1.00</priority>
            </url>
            <url>
            <loc>https://wild-seo.com/services</loc>
            <lastmod>2024-10-09T09:32:26+00:00</lastmod>
            <priority>0.80</priority>
            </url>
            <url>
            <loc>https://wild-seo.com/about-us</loc>
            <lastmod>2024-10-09T09:32:26+00:00</lastmod>
            <priority>0.80</priority>
            </url>
            <url>
            <loc>https://wild-seo.com/contact-us</loc>
            <lastmod>2024-10-09T09:32:26+00:00</lastmod>
            <priority>0.80</priority>
            </url>
            <url>
            <loc>https://wild-seo.com/privacy-policy</loc>
            <lastmod>2024-10-09T09:32:26+00:00</lastmod>
            <priority>0.50</priority>
            </url>

        </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
