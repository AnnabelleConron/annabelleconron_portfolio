import BioSection from '@/components/about/BioSection/BioSection';
import MoreAboutSection from '@/components/about/MoreAboutSection/MoreAboutSection';

export const metadata = {
  title: 'About | Annabelle Conron',
};

export default function AboutPage() {
  return (
    <>
      <BioSection />
      <MoreAboutSection />
    </>
  );
}
