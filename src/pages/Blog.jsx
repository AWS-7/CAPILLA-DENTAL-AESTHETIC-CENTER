import { SEO } from '../components/common';
import PageCtaHero from '../components/sections/shared/PageCtaHero';
import { BlogFeatured, BlogListing } from '../components/sections/blog/BlogSections';
import PageConsultCTA from '../components/sections/shared/PageConsultCTA';
import { blogSeo, blogHero } from '../data/blogPage';

export default function Blog() {
  return (
    <>
      <SEO
        title={blogSeo.title}
        description={blogSeo.description}
        canonical={blogSeo.canonical}
        image={blogHero.image}
      >
        <meta name="keywords" content={blogSeo.keywords} />
        <meta property="og:locale" content="en_IN" />
      </SEO>

      <PageCtaHero
        title={blogHero.title}
        subtitle={blogHero.subtitle}
        image={blogHero.image}
        eyebrow="Insights"
      />
      <BlogFeatured />
      <BlogListing />
      <PageConsultCTA
        title="Have Questions About a Treatment?"
        description="Speak with Capilla specialists in Perumbakkam — book a consultation for personalised guidance."
      />
    </>
  );
}
