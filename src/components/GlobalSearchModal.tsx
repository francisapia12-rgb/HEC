import React, { useEffect, useRef, useState } from 'react';
import {
  Search,
  X,
  BookOpen,
  Video,
  FileText,
  User,
  HelpCircle,
  ArrowRight,
  GraduationCap,
  Layers,
  Award,
} from 'lucide-react';
import { useAcademic } from '../context/AcademicContext';
import { SearchResultItem } from '../types';

export const GlobalSearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    searchAcademic,
    navigateToUniversity,
    navigateToColleges,
    navigateToCollege,
    navigateToProgramme,
    navigateToCourse,
    setBookingTutor,
    tutors,
  } = useAcademic();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const rawResults = searchAcademic(searchQuery);
  const results = rawResults.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'university') return item.type === 'university';
    if (activeCategory === 'college') return item.type === 'college';
    if (activeCategory === 'programme') return item.type === 'programme';
    if (activeCategory === 'course') return item.type === 'course';
    if (activeCategory === 'material') return item.type === 'material';
    if (activeCategory === 'video') return item.type === 'video';
    if (activeCategory === 'past_question') return item.type === 'past_question';
    if (activeCategory === 'tutor') return item.type === 'tutor';
    return true;
  });

  const handleSelectResult = (item: SearchResultItem) => {
    setIsSearchOpen(false);
    if (item.type === 'university') {
      navigateToUniversity(item.universityId || 'knust');
    } else if (item.type === 'college' && item.collegeId) {
      navigateToCollege(item.collegeId);
    } else if (item.type === 'programme' && item.collegeId && item.programmeId) {
      navigateToProgramme(item.collegeId, item.programmeId);
    } else if (item.courseId) {
      navigateToCourse(item.courseId, item.actionTab || 'overview');
    } else if (item.tutorId) {
      const tutor = tutors.find((t) => t.id === item.tutorId);
      if (tutor) setBookingTutor(tutor);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Kwame Nkruma University (KNUST), programme, course, videos, past questions..."
            className="w-full text-base placeholder:text-slate-400 text-slate-900 focus:outline-none bg-transparent font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 hover:bg-slate-100 rounded-full text-slate-400 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-2.5 py-1 rounded-md cursor-pointer font-medium"
          >
            ESC
          </button>
        </div>

        {/* Category Filters Bar */}
        <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: 'All Results' },
            { id: 'university', label: 'Universities' },
            { id: 'college', label: 'Colleges' },
            { id: 'programme', label: 'Programmes' },
            { id: 'course', label: 'Courses' },
            { id: 'material', label: 'Materials' },
            { id: 'video', label: 'Videos' },
            { id: 'past_question', label: 'Past Questions' },
            { id: 'tutor', label: 'Tutors' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white font-bold shadow-2xs'
                  : 'bg-white hover:bg-slate-200 text-slate-600 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Quick query chips if empty */}
        {searchQuery.trim().length === 0 && (
          <div className="p-4 border-b border-slate-100 bg-white">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Popular Academic Searches
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Kwame Nkruma University of Science and Technology',
                'KNUST',
                'College of Engineering',
                'BSc Mechanical Engineering',
                'ME 351',
                'Dynamics of Machinery',
                'Francis Appiah',
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 font-medium transition-colors cursor-pointer border border-slate-200"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-1.5 divide-y divide-slate-50 flex-1">
          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              <p className="font-semibold text-slate-700">No resources found for "{searchQuery}"</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching "Kwame Nkruma", "KNUST", course code (ME 351), or tutor name.
              </p>
            </div>
          ) : (
            results.map((item) => {
              let Icon = BookOpen;
              let iconColor = 'text-blue-600 bg-blue-50';
              let tagLabel = 'Course';

              if (item.type === 'university') {
                Icon = GraduationCap;
                iconColor = 'text-blue-600 bg-blue-100 border border-blue-200';
                tagLabel = 'University';
              } else if (item.type === 'college') {
                Icon = Layers;
                iconColor = 'text-indigo-600 bg-indigo-50';
                tagLabel = 'College';
              } else if (item.type === 'programme') {
                Icon = Award;
                iconColor = 'text-cyan-600 bg-cyan-50';
                tagLabel = 'Programme';
              } else if (item.type === 'video') {
                Icon = Video;
                iconColor = 'text-red-600 bg-red-50';
                tagLabel = 'Video';
              } else if (item.type === 'past_question') {
                Icon = HelpCircle;
                iconColor = 'text-amber-600 bg-amber-50';
                tagLabel = 'Past Question';
              } else if (item.type === 'material') {
                Icon = FileText;
                iconColor = 'text-emerald-600 bg-emerald-50';
                tagLabel = 'Material';
              } else if (item.type === 'tutor') {
                Icon = User;
                iconColor = 'text-purple-600 bg-purple-50';
                tagLabel = 'Tutor';
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectResult(item)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between group cursor-pointer ${
                    item.type === 'university'
                      ? 'bg-blue-50/70 border border-blue-200 hover:bg-blue-100/70'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className={`p-2.5 rounded-xl ${iconColor} shrink-0 mt-0.5`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded ${
                          item.type === 'university'
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {tagLabel}
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="text-[11px] text-slate-400 truncate">
                          {item.hierarchyPath}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
