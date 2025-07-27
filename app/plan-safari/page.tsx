'use client';

import Navigation from '../components/Navigation';
import PlanHero from './PlanHero';
import ExperienceSelector from './ExperienceSelector';
import PlanningForm from './PlanningForm';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';

export default function PlanSafariPage() {
  return (
    <div className="relative">
      <Navigation />
      <Cursor />
      <PlanHero />
      <ExperienceSelector />
      <PlanningForm />
      <Footer />
    </div>
  );
}
