import { useParams } from 'react-router-dom';
import PagePlaceholder from '../components/common/PagePlaceholder';
import { blogPosts, placeholders } from '../data/content';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  return (
    <PagePlaceholder
      title={post?.title || 'Blog Article'}
      subtitle={post?.excerpt || 'Detailed clinical insights from our specialists.'}
      path={`/blog/${slug}`}
      backgroundImage={post?.image || placeholders.blog}
    />
  );
}
