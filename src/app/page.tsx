import { Footer } from '@/components/layout/footer'
import { BridgeSection } from '@/components/sections/bridge-section'
import { CocktailsWine } from '@/components/sections/cocktails-wine'
import { ContactSection } from '@/components/sections/contact-section'
import { ExperienceSlider } from '@/components/sections/experience-slider'
import { HeroImageSection } from '@/components/sections/hero-image-section'
import { HeroVideoSection } from '@/components/sections/hero-video-section'
import { SignatureDishes } from '@/components/sections/signature-dishes'
import SocialSection from '@/components/sections/SocialSection'
import { Gap } from '@/components/ui/gap'
import { ScrollReset } from '@/components/ui/scroll-reset'

export default function HomePage() {
	return (
		<main className='bg-[var(--background)] text-[var(--foreground)]'>
			<ScrollReset />

			<HeroVideoSection />

			<BridgeSection />

			<HeroImageSection />

			<ExperienceSlider />

			<Gap />

			<SignatureDishes />

			<Gap />

			<CocktailsWine />

			<Gap />

			<ContactSection />

			<SocialSection />

			<Footer />
		</main>
	)
}
