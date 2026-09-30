import React, { useState } from 'react';
import { X, Play, Pause, CheckCircle2, Clock, Volume2, RotateCcw, BookOpen, Share2 } from 'lucide-react';
import { useAcademic } from '../../context/AcademicContext';

export const VideoPlayerModal: React.FC = () => {
  const { activeVideo, setActiveVideo, currentCourse, markVideoCompleted, getCourseProgress } = useAcademic();
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState('1x');
  const [activeTab, setActiveTab] = useState<'notes' | 'playlist'>('notes');

  if (!activeVideo || !currentCourse) return null;

  const progress = getCourseProgress(currentCourse.id);
  const isCompleted = progress?.completedVideoIds.includes(activeVideo.id);

  const handleToggleComplete = () => {
    markVideoCompleted(currentCourse.id, activeVideo.id);
  };

  const handleSelectVideo = (video: any) => {
    setActiveVideo(video);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-4xl bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-3 truncate">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-600/30 text-blue-300 border border-blue-500/30">
              {currentCourse.code} Video Tutorial
            </span>
            <h3 className="text-sm sm:text-base font-semibold truncate text-slate-100">
              {activeVideo.title}
            </h3>
          </div>
          <button
            onClick={() => setActiveVideo(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Stage Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          <img
            src={currentCourse.coverImage}
            alt={activeVideo.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded backdrop-blur">
                Topic: {activeVideo.topic}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded">
                <Clock className="w-3.5 h-3.5" />
                {activeVideo.duration}
              </span>
            </div>

            {/* Central Play/Pause button */}
            <div className="flex justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transform hover:scale-105 transition-all cursor-pointer"
              >
                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-0.5" />}
              </button>
            </div>

            {/* Bottom Media Bar Controls */}
            <div className="space-y-2">
              <div className="w-full bg-slate-700/60 rounded-full h-1.5 overflow-hidden cursor-pointer">
                <div className="bg-blue-500 h-full w-2/5 transition-all"></div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <span>08:42 / {activeVideo.duration}</span>
                  <div className="flex items-center gap-1">
                    {['1x', '1.25x', '1.5x'].map((speed) => (
                      <button
                        key={speed}
                        onClick={() => setPlaybackSpeed(speed)}
                        className={`px-1.5 py-0.5 rounded text-[11px] font-mono cursor-pointer ${
                          playbackSpeed === speed
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {speed}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-slate-400 text-xs">Instructor: {activeVideo.instructor}</span>
                  <Volume2 className="w-4 h-4 text-slate-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar & Notes Area */}
        <div className="p-5 bg-slate-900 text-slate-200 overflow-y-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>{currentCourse.name}</span>
                <span>·</span>
                <span>Tutorial #{activeVideo.order}</span>
              </div>
              <h4 className="text-base font-bold text-white mt-0.5">{activeVideo.title}</h4>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={handleToggleComplete}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
                  isCompleted
                    ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30'
                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isCompleted ? 'Marked as Completed' : 'Mark as Watched'}</span>
              </button>
            </div>
          </div>

          {/* Video Description & Key Takeaways */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1">
            <div className="md:col-span-2 space-y-3">
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeVideo.description}
              </p>

              <div>
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Lecture Principles
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {activeVideo.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Course Playlist */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Course Playlist ({currentCourse.videos.length} videos)
              </h5>
              <div className="space-y-1 max-h-48 overflow-y-auto">
                {currentCourse.videos.map((vid) => {
                  const isCur = vid.id === activeVideo.id;
                  const isDone = progress?.completedVideoIds.includes(vid.id);
                  return (
                    <button
                      key={vid.id}
                      onClick={() => handleSelectVideo(vid)}
                      className={`w-full text-left p-2 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        isCur
                          ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30 font-medium'
                          : 'hover:bg-slate-800 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {isDone ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        ) : (
                          <Play className="w-3 h-3 text-slate-500 shrink-0" />
                        )}
                        <span className="truncate">{vid.title}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 shrink-0 ml-2">{vid.duration}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
