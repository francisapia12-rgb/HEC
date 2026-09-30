import React from 'react';
import { AcademicProvider, useAcademic } from './context/AcademicContext';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/views/HomeView';
import { UniversityView } from './components/views/UniversityView';
import { CollegeView } from './components/views/CollegeView';
import { ProgrammeView } from './components/views/ProgrammeView';
import { LevelView } from './components/views/LevelView';
import { CoursesBrowserView } from './components/views/CoursesBrowserView';
import { CourseView } from './components/views/CourseView';
import { DashboardView } from './components/views/DashboardView';
import { TutorsMarketplaceView } from './components/views/TutorsMarketplaceView';
import { PricingView } from './components/views/PricingView';
import { AdminCMSView } from './components/views/AdminCMSView';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { VideoPlayerModal } from './components/modals/VideoPlayerModal';
import { DocumentViewerModal } from './components/modals/DocumentViewerModal';
import { SolutionViewerModal } from './components/modals/SolutionViewerModal';
import { TutorBookingModal } from './components/modals/TutorBookingModal';
import { AssignmentSubmitModal } from './components/modals/AssignmentSubmitModal';

const MainRouter: React.FC = () => {
  const { viewMode } = useAcademic();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-1">
        {viewMode === 'home' && <HomeView />}
        {viewMode === 'university' && <UniversityView />}
        {(viewMode === 'colleges' || viewMode === 'college') && <CollegeView />}
        {viewMode === 'programme' && <ProgrammeView />}
        {viewMode === 'level' && <LevelView />}
        {viewMode === 'courses' && <CoursesBrowserView />}
        {viewMode === 'course' && <CourseView />}
        {viewMode === 'dashboard' && <DashboardView />}
        {viewMode === 'tutors' && <TutorsMarketplaceView />}
        {viewMode === 'pricing' && <PricingView />}
        {viewMode === 'admin' && <AdminCMSView />}
      </main>

      {/* Global Overlays & Modals */}
      <GlobalSearchModal />
      <VideoPlayerModal />
      <DocumentViewerModal />
      <SolutionViewerModal />
      <TutorBookingModal />
      <AssignmentSubmitModal />
    </div>
  );
};

export default function App() {
  return (
    <AcademicProvider>
      <MainRouter />
    </AcademicProvider>
  );
}
