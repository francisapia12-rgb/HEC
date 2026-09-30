import React, { useState } from 'react';
import { Search, GraduationCap, User, ShieldCheck, Menu, X, BookOpen, Layers } from 'lucide-react';
import { useAcademic } from '../context/AcademicContext';

export const Navbar: React.FC = () => {
  const {
    viewMode,
    navigateToHome,
    navigateToUniversity,
    navigateToColleges,
    navigateToCourses,
    navigateToTutors,
    navigateToPricing,
    navigateToDashboard,
    navigateToAdmin,
    setIsSearchOpen,
    currentUser,
    toggleUserRole,
  } = useAcademic();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0A1120] border-b border-slate-800 text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <button
          onClick={navigateToHome}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md"
        >
          <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-blue-500 transition-colors">
            H
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
              Harcourt
            </span>
            <span className="text-[10px] tracking-wider text-slate-400 uppercase -mt-1 font-medium">
              Educational Consult
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Matching brief: Home | Explore | Courses | Tutors | Pricing | Search) */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={navigateToHome}
            className={`transition-colors hover:text-white cursor-pointer py-1 ${
              viewMode === 'home' ? 'text-white border-b-2 border-blue-500 font-semibold' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => navigateToUniversity('knust')}
            className={`transition-colors hover:text-white cursor-pointer py-1 ${
              ['university', 'colleges', 'college', 'programme', 'level'].includes(viewMode)
                ? 'text-white border-b-2 border-blue-500 font-semibold'
                : ''
            }`}
          >
            Explore KNUST
          </button>
          <button
            onClick={navigateToCourses}
            className={`transition-colors hover:text-white cursor-pointer py-1 ${
              ['courses', 'course'].includes(viewMode)
                ? 'text-white border-b-2 border-blue-500 font-semibold'
                : ''
            }`}
          >
            Courses
          </button>
          <button
            onClick={navigateToTutors}
            className={`transition-colors hover:text-white cursor-pointer py-1 ${
              viewMode === 'tutors' ? 'text-white border-b-2 border-blue-500 font-semibold' : ''
            }`}
          >
            Tutors
          </button>
          <button
            onClick={navigateToPricing}
            className={`transition-colors hover:text-white cursor-pointer py-1 ${
              viewMode === 'pricing' ? 'text-white border-b-2 border-blue-500 font-semibold' : ''
            }`}
          >
            Pricing
          </button>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="transition-colors hover:text-white cursor-pointer py-1 flex items-center gap-1.5 text-slate-300"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
          </button>
          <button
            onClick={navigateToDashboard}
            className={`transition-colors hover:text-white cursor-pointer py-1 flex items-center gap-1.5 ${
              viewMode === 'dashboard' ? 'text-white border-b-2 border-blue-500 font-semibold' : ''
            }`}
          >
            <span>My Dashboard</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          </button>
          <button
            onClick={navigateToAdmin}
            className={`transition-colors hover:text-white cursor-pointer py-1 flex items-center gap-1.5 ${
              viewMode === 'admin' ? 'text-white border-b-2 border-blue-500 font-semibold' : 'text-slate-400'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin CMS</span>
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Search & User / Sign-in) */}
        <div className="flex items-center gap-3">
          {/* Quick Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs md:text-sm border border-slate-700/60 transition-colors cursor-pointer"
            title="Search Kwame Nkruma University (KNUST), programmes, courses, past questions... (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline text-slate-300">Search University / Course</span>
            <kbd className="hidden lg:inline text-[10px] bg-slate-900 px-1.5 py-0.5 rounded text-slate-400 border border-slate-800 font-mono">
              ⌘K
            </kbd>
          </button>

          {/* User Account / Role Switcher */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-200 text-xs font-medium cursor-pointer transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                {currentUser.name.charAt(0)}
              </div>
              <span className="hidden sm:inline font-semibold">{currentUser.name.split(' ')[0]}</span>
              <span className="text-[10px] text-blue-300 bg-blue-900/60 px-1.5 py-0.5 rounded">
                {currentUser.role === 'admin' ? 'Admin' : 'L300'}
              </span>
            </button>

            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white text-slate-900 shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95">
                <div className="px-4 py-2 border-b border-slate-100">
                  <p className="text-sm font-bold text-slate-900">{currentUser.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{currentUser.programmeName}</p>
                  <p className="text-[11px] text-blue-600 mt-0.5">KNUST · Index #{currentUser.indexNumber}</p>
                </div>

                <div className="py-1 text-xs">
                  <button
                    onClick={() => {
                      navigateToDashboard();
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center gap-2.5 text-slate-700"
                  >
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span>My Courses & Progress</span>
                  </button>
                  <button
                    onClick={() => {
                      navigateToAdmin();
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center gap-2.5 text-slate-700"
                  >
                    <Layers className="w-4 h-4 text-purple-600" />
                    <span>Academic Hierarchy Manager</span>
                  </button>
                  <button
                    onClick={() => {
                      toggleUserRole();
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center justify-between text-slate-700"
                  >
                    <span className="flex items-center gap-2.5">
                      <User className="w-4 h-4 text-slate-500" />
                      <span>Switch to {currentUser.role === 'student' ? 'Admin Mode' : 'Student Mode'}</span>
                    </span>
                    <span className="text-[10px] font-bold uppercase text-slate-400">
                      {currentUser.role}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1120] border-t border-slate-800 px-4 pt-3 pb-5 space-y-2 text-sm">
          <button
            onClick={() => {
              navigateToHome();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
          >
            Home
          </button>
          <button
            onClick={() => {
              navigateToUniversity('knust');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200 font-semibold text-blue-300"
          >
            Explore KNUST
          </button>
          <button
            onClick={() => {
              navigateToCourses();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
          >
            Courses Hub
          </button>
          <button
            onClick={() => {
              navigateToTutors();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
          >
            Tutors Marketplace
          </button>
          <button
            onClick={() => {
              setIsSearchOpen(true);
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
          >
            Search University & Courses
          </button>
          <button
            onClick={() => {
              navigateToDashboard();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
          >
            My Dashboard
          </button>
          <button
            onClick={() => {
              navigateToAdmin();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md hover:bg-slate-800 text-blue-300"
          >
            Admin CMS Portal
          </button>
        </div>
      )}
    </header>
  );
};
