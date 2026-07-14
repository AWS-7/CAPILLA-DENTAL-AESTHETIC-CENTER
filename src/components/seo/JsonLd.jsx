import { Helmet } from 'react-helmet-async';

/**
 * Injects one or more JSON-LD graph objects into the document head.
 */
export default function JsonLd({ data }) {
  if (!data) return null;
  const graph = Array.isArray(data) ? data.filter(Boolean) : [data];
  if (!graph.length) return null;

  return (
    <Helmet>
      {graph.map((item, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          key={item['@id'] || item['@type'] || index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </Helmet>
  );
}
