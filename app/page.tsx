import Hero from '@/components/home/Hero/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects/FeaturedProjects';
import { getFeaturedProjects } from '@/lib/markdown';

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Hero />
      <FeaturedProjects projects={featured} />
    </>
  );
}
