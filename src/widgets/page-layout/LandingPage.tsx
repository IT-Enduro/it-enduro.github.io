import { Box } from '@mui/material';
import { AboutSection } from '../../features/about/AboutSection';
import { BusinessSection } from '../../features/business/BusinessSection';
import { ContactsSection } from '../../features/contacts/ContactsSection';
import { CoursesSection } from '../../features/courses/CoursesSection';
import { HeroSection } from '../../features/hero/HeroSection';
import { ServicesSection } from '../../features/services/ServicesSection';
import { Footer } from './Footer';
import { Header } from './Header';

export const LandingPage = () => (
  <Box
    sx={{
      background:
        'radial-gradient(circle at 10% 0%, rgba(13,96,198,0.1), transparent 38%), radial-gradient(circle at 90% 20%, rgba(87,193,135,0.12), transparent 35%)'
    }}
  >
    <Header />
    <HeroSection />
    <CoursesSection />
    <ServicesSection />
    <BusinessSection />
    <AboutSection />
    <ContactsSection />
    <Footer />
  </Box>
);
