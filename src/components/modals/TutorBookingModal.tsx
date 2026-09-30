import React, { useState } from 'react';
import { X, Star, Calendar, Clock, Check, ShieldCheck, Video, MapPin, GraduationCap } from 'lucide-react';
import { useAcademic } from '../../context/AcademicContext';

export const TutorBookingModal: React.FC = () => {
  const { bookingTutor, setBookingTutor, currentCourse } = useAcademic();
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [sessionTopic, setSessionTopic] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!bookingTutor) return null;

  const handleConfirmBooking = () => {
    if (!selectedSlot) return;
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setBookingTutor(null);
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B1528] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <img
              src={bookingTutor.avatar}
              alt={bookingTutor.name}
              referrerPolicy="no-referrer"
              className="w-11 h-11 rounded-full object-cover border-2 border-blue-400"
            />
            <div>
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <span>{bookingTutor.name}</span>
                {bookingTutor.isOnline && (
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.2 rounded-full">
                    Online Now
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-400">{bookingTutor.title}</p>
            </div>
          </div>
          <button
            onClick={() => setBookingTutor(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {bookingConfirmed ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Session Successfully Booked!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your tutorial session with <span className="font-semibold text-slate-900">{bookingTutor.name}</span> has been confirmed for <span className="font-semibold text-blue-600">{selectedSlot}</span>. Meeting link and calendar invite sent to your student email.
              </p>
            </div>
          ) : (
            <>
              {/* Tutor Stats & Credentials */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                <div>
                  <div className="flex items-center justify-center gap-1 text-amber-500 font-bold text-base">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{bookingTutor.rating}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {bookingTutor.reviewsCount} Student Reviews
                  </span>
                </div>
                <div className="border-x border-slate-200">
                  <div className="text-base font-bold text-slate-900">
                    {bookingTutor.studentsCount}+
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Students Mentored</span>
                </div>
                <div>
                  <div className="text-base font-bold text-blue-600">
                    GHS {bookingTutor.hourlyRateGHS}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Per 1-Hour Session</span>
                </div>
              </div>

              {/* Bio & Education */}
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>{bookingTutor.bio}</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
                  <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{bookingTutor.education}</span>
                </div>
              </div>

              {/* Specializations */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Specialized Course Areas
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {bookingTutor.specialization.map((spec) => (
                    <span
                      key={spec}
                      className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Slot Picker */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>Select Available Tutorial Slot</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {bookingTutor.availableSlots.map((slot) => {
                    const isSelected = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Clock className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                          <span>{slot}</span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-white" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Session Focus Note */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  What specific topics or past questions would you like to focus on? (Optional)
                </label>
                <input
                  type="text"
                  value={sessionTopic}
                  onChange={(e) => setSessionTopic(e.target.value)}
                  placeholder="e.g. 2024 Exam Question 2 Coriolis acceleration and flywheel calculations"
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {!bookingConfirmed && (
          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Harcourt Verified Tutor Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setBookingTutor(null)}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmBooking}
                disabled={!selectedSlot}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
              >
                Confirm Booking (GHS {bookingTutor.hourlyRateGHS})
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
