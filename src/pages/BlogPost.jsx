import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';
import { SEO, PageHero, Breadcrumb } from '../components/common';
import BlogArticleBody from '../components/sections/blog/BlogArticleBody';
import PageConsultCTA from '../components/sections/shared/PageConsultCTA';
import { getBlogArticle } from '../data/blogPage';

export default function BlogPost() {
  const { slug } = useParams();
  const article = getBlogArticle(slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO
        title={`${article.title} | Capilla Dental Blog`}
        description={article.excerpt}
        canonical={`https://capillaclinic.com/blog/${article.slug}`}
        image={article.image}
        type="article"
      />
      <Helmet>
        <meta name="keywords" content={`${article.category}, Dental Blog Chennai, Skin Care Blog Chennai, Hair Care Blog Chennai`} />
        <meta property="og:locale" content="en_IN" />
        <meta name="author" content={article.author} />
      </Helmet>

      <PageHero
        title={article.title}
        subtitle={`${article.author} · ${article.date} · ${article.readTime}`}
        backgroundImage={article.image}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: 'Blog', path: '/blog' },
              { label: article.category, path: '/blog' },
              { label: article.title },
            ]}
          />
        }
      />

      <BlogArticleBody article={article} />
      <PageConsultCTA
        title="Book a Consultation"
        description="Ready to take the next step? Meet Capilla specialists in Perumbakkam for dental, skin, or hair care."
      />
    </>
  );
}
