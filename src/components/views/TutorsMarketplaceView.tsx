import React, { useState } from 'react';
import { Search, Star, Users, CheckCircle2, ShieldCheck, Clock, BookOpen } from 'lucide-react';
import { useAcademic } from '../../context/AcademicContext';

export const TutorsMarketplaceView: React.FC = () => {
  const { tutors, courses, setBookingTutor, navigateToCourse } = useAcademic();
  const [filterQuery, setFilterQuery] = useState('');

  const filteredTutors = tutors.filter((t) => {
    if (!filterQuery) return true;
    const q = filterQuery.toLowerCase();
    return (
      t.name.toLowerCase().includes(q) ||
      t.specialization.some((s) => s.toLowerCase().includes(q)) ||
      t.title.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
            <Users className="w-3.5 h-3.5" />
            <span>Course-Specific Mentorship</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Verified University Tutors
          </h1>
          <p className="text-sm text-slate-600">
            Every tutor teaches specific courses within the academic hierarchy. Get 1-on-1 exam prep, assignment walkthroughs, and thesis defense coaching.
          </p>

          <div className="max-w-md mx-auto relative pt-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-5" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filter by tutor name, subject (e.g. Dynamics, Kinematics)..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
            />
          </div>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredTutors.map((tutor) => {
            const taughtCourseObjects = courses.filter((c) => tutor.coursesTaught.includes(c.id));

            return (
              <div
                key={tutor.id}
                className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={tutor.avatar}
                      alt={tutor.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-full object-cover border-2 border-slate-100 shadow-xs"
                    />
                    {tutor.isOnline && (
                      <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-slate-900 truncate">{tutor.name}</h3>
                      <span className="text-sm font-extrabold text-blue-600">
                        GHS {tutor.hourlyRateGHS} / hr
                      </span>
                    </div>

                    <p className="text-xs text-slate-500">{tutor.title}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{tutor.university}</p>

                    <div className="flex items-center gap-1.5 text-xs text-amber-500 font-semibold mt-1.5">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{tutor.rating}</span>
                      <span className="text-slate-400 font-normal">
                        ({tutor.reviewsCount} reviews · {tutor.studentsCount} students coached)
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {tutor.bio}
                </p>

                {/* Courses Connected To */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                    Teaches in Courses:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {taughtCourseObjects.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => navigateToCourse(c.id, 'overview')}
                        className="px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-700 font-mono text-xs font-semibold cursor-pointer transition-colors"
                      >
                        {c.code} {c.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Available slots */}
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Next Available: {tutor.availableSlots[0]}</span>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verified Academic TA</span>
                  </div>

                  <button
                    onClick={() => setBookingTutor(tutor)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Book Private Session
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
