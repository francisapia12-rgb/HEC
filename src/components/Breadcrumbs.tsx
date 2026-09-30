import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useAcademic } from '../context/AcademicContext';

interface BreadcrumbsProps {
  universityName?: string;
  collegeName?: string;
  programmeName?: string;
  level?: number;
  semester?: 1 | 2;
  courseCode?: string;
  customPageName?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  universityName,
  collegeName,
  programmeName,
  level,
  semester,
  courseCode,
  customPageName,
}) => {
  const {
    navigateToHome,
    navigateToUniversity,
    navigateToColleges,
    navigateToCollege,
    navigateToProgramme,
    navigateToLevel,
    selectedCollegeId,
    selectedProgrammeId,
  } = useAcademic();

  return (
    <nav aria-label="Breadcrumb" className="w-full py-3 text-xs md:text-sm text-slate-500 font-medium">
      <div className="flex items-center flex-wrap gap-1.5 md:gap-2">
        <button
          onClick={navigateToHome}
          className="flex items-center gap-1 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>

        {/* University Level in Hierarchy */}
        {(universityName || collegeName || programmeName || courseCode) && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <button
              onClick={() => navigateToUniversity('knust')}
              className="hover:text-blue-600 transition-colors cursor-pointer font-semibold text-slate-700"
            >
              KNUST
            </button>
          </>
        )}

        {customPageName && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-bold truncate">
              {customPageName}
            </span>
          </>
        )}

        {collegeName && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <button
              onClick={() => selectedCollegeId && navigateToCollege(selectedCollegeId)}
              className="hover:text-slate-900 transition-colors cursor-pointer truncate max-w-[160px]"
            >
              {collegeName.replace('College of ', '')}
            </button>
          </>
        )}

        {programmeName && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <button
              onClick={() =>
                selectedCollegeId &&
                selectedProgrammeId &&
                navigateToProgramme(selectedCollegeId, selectedProgrammeId)
              }
              className="hover:text-slate-900 transition-colors cursor-pointer truncate max-w-[200px]"
            >
              {programmeName.replace('BSc ', '')}
            </button>
          </>
        )}

        {level && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <button
              onClick={() =>
                selectedCollegeId &&
                selectedProgrammeId &&
                navigateToLevel(selectedCollegeId, selectedProgrammeId, level, semester || 1)
              }
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Level {level}
            </button>
          </>
        )}

        {semester && !courseCode && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-800 font-semibold">Semester {semester}</span>
          </>
        )}

        {courseCode && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-bold truncate max-w-[220px]">
              {courseCode}
            </span>
          </>
        )}
      </div>
    </nav>
  );
};
