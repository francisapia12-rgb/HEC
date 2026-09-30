import React from 'react';
import { Check, ShieldCheck, Zap } from 'lucide-react';
import { useAcademic } from '../../context/AcademicContext';

export const PricingView: React.FC = () => {
  const { navigateToCourse } = useAcademic();

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Student Affordable Access
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent Academic Plans
          </h1>
          <p className="text-sm text-slate-600">
            Engineered specifically for Ghanaian university students. No recurring hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Tier */}
          <div className="p-7 bg-white rounded-3xl border border-slate-200 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Standard Access</h3>
                <p className="text-xs text-slate-500 mt-1">Foundational course materials & syllabi</p>
              </div>

              <div className="text-3xl font-extrabold text-slate-900">
                GHS 0 <span className="text-xs text-slate-400 font-normal">/ semester</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Browse all university programmes & levels</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Download course outlines & syllabi</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Preview introductory tutorial videos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>View past question problem statements</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => navigateToCourse('course-me351')}
              className="w-full py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Get Started Free
            </button>
          </div>

          {/* Semester Pass (Featured) */}
          <div className="p-7 bg-[#0A1120] text-white rounded-3xl border-2 border-blue-500 flex flex-col justify-between space-y-6 shadow-xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
              Most Popular
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white">Semester Pass</h3>
                <p className="text-xs text-slate-400 mt-1">Full access to 1 enrolled course</p>
              </div>

              <div className="text-3xl font-extrabold text-white">
                GHS 49 <span className="text-xs text-slate-400 font-normal">/ course / semester</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>All lecture notes, PDFs & formula sheets</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Complete video tutorial library & transcripts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>2022-2025 Past Exam worked solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Assignment submission & TA grading feedback</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Discussion forum priority support</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => navigateToCourse('course-me351')}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white shadow-md transition-colors cursor-pointer"
            >
              Unlock ME 351 Pass
            </button>
          </div>

          {/* Full Level Pass */}
          <div className="p-7 bg-white rounded-3xl border border-slate-200 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">All-Access Level Pass</h3>
                <p className="text-xs text-slate-500 mt-1">Entire 6-course semester curriculum</p>
              </div>

              <div className="text-3xl font-extrabold text-slate-900">
                GHS 120 <span className="text-xs text-slate-400 font-normal">/ semester</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>All 5+ courses in Level 300 Semester 1</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Unlimited worked exam step-by-step solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1 Free 1-on-1 private tutor consultation session</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Offline material download pack</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => navigateToCourse('course-me351')}
              className="w-full py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Get All-Access Pass
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
