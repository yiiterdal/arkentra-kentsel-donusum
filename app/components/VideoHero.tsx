'use client';

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { getHeroVideoMobileSrc, getHeroVideoSrc, heroVideo } from '../data/images';

interface VideoHeroProps {
  title: ReactNode;
  subtitle?: string;
  eyebrow?: string;
  videoSrc?: string;
  mobileVideoSrc?: string;
  posterSrc?: string;
  posterAlt: string;
}

function isMobileViewport(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
}

export default function VideoHero({
  title,
  subtitle,
  eyebrow,
  videoSrc = getHeroVideoSrc(),
  mobileVideoSrc = getHeroVideoMobileSrc(),
  posterSrc = heroVideo.poster,
  posterAlt,
}: VideoHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(() => isMobileViewport());
  const [desktopSrc, setDesktopSrc] = useState(videoSrc);
  const mobileSrc = mobileVideoSrc;
  const activeSrc = isMobile ? mobileSrc : desktopSrc;

  useLayoutEffect(() => {
    setIsMobile(isMobileViewport());
    setDesktopSrc(videoSrc);
  }, [videoSrc]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const sync = () => setIsMobile(mq.matches);
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video) return;

    const prepareVideo = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
    };

    const tryPlay = () => {
      prepareVideo();
      void video.play().catch(() => {});
    };

    const onError = () => {
      const fallback = isMobile ? heroVideo.cdnMobile : heroVideo.cdn;
      if (!video.src.endsWith(fallback)) {
        video.src = fallback;
        video.load();
        tryPlay();
      }
    };

    video.src = activeSrc;
    prepareVideo();
    video.load();
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('error', onError);
    tryPlay();

    const observer =
      section &&
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) tryPlay();
        },
        { threshold: 0.15 },
      );

    if (section && observer) observer.observe(section);

    const onHeroTap = () => tryPlay();
    section?.addEventListener('touchstart', onHeroTap, { passive: true });

    return () => {
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('error', onError);
      section?.removeEventListener('touchstart', onHeroTap);
      observer?.disconnect();
    };
  }, [activeSrc, isMobile]);

  return (
    <section ref={sectionRef} className="relative w-full">
      <div className="relative w-full min-h-screen min-h-[100dvh] overflow-hidden bg-gray-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={posterSrc}
          alt={posterAlt}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          decoding="sync"
          fetchPriority="high"
        />

        <video
          key={activeSrc}
          ref={videoRef}
          className="absolute inset-0 z-[1] h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
        />

        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
        <div className="absolute inset-0 z-30 flex items-end pt-16 md:items-center md:pt-[72px] pb-20 md:pb-16">
          <div className="container-editorial w-full">
            {eyebrow && (
              <p className="mb-3 text-base font-bold uppercase tracking-[0.2em] text-brand-300 md:text-lg">
                {eyebrow}
              </p>
            )}
            <h1 className="max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 max-w-2xl text-lg font-normal leading-relaxed text-white/90 md:text-xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
