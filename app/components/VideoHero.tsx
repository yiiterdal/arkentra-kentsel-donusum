'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getHeroVideoMobileSrc, getHeroVideoSrc, heroVideo } from '../data/images';

interface VideoHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  videoSrc?: string;
  mobileVideoSrc?: string;
  posterSrc?: string;
  posterAlt: string;
}

function pickFallbackSrc(isMobile: boolean): string {
  return isMobile ? heroVideo.cdnMobile : heroVideo.cdn;
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeSrc, setActiveSrc] = useState(() =>
    isMobileViewport() ? mobileVideoSrc : videoSrc,
  );
  const [isMobile, setIsMobile] = useState(() => isMobileViewport());

  useLayoutEffect(() => {
    const mobile = isMobileViewport();
    setIsMobile(mobile);
    setActiveSrc(mobile ? mobileVideoSrc : videoSrc);
  }, [videoSrc, mobileVideoSrc]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const sync = () => {
      const mobile = mq.matches;
      setIsMobile(mobile);
      setActiveSrc(mobile ? mobileVideoSrc : videoSrc);
    };

    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, [videoSrc, mobileVideoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');

      void video.play().catch(() => {
        // iOS bazen ilk denemede autoplay reddeder; dokununca tekrar dene
      });
    };

    const onError = () => {
      const fallback = pickFallbackSrc(isMobile);
      if (activeSrc !== fallback) {
        setActiveSrc(fallback);
      }
    };

    video.addEventListener('loadedmetadata', tryPlay);
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('error', onError);
    video.load();
    tryPlay();

    const onFirstTouch = () => tryPlay();
    document.addEventListener('touchstart', onFirstTouch, { once: true, passive: true });

    return () => {
      video.removeEventListener('loadedmetadata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('error', onError);
      document.removeEventListener('touchstart', onFirstTouch);
    };
  }, [activeSrc, isMobile]);

  return (
    <section className="relative w-full">
      <div className="relative w-full min-h-screen min-h-[100dvh] overflow-hidden bg-gray-900">
        {/* Tam çözünürlük poster — Next/Image optimizasyonu mobilde bulanıklaştırıyordu */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={posterSrc}
          alt={posterAlt}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          decoding="async"
          fetchPriority="high"
        />

        <video
          key={activeSrc}
          ref={videoRef}
          src={activeSrc}
          poster={posterSrc}
          className="absolute inset-0 z-[1] h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          defaultMuted
          loop
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
        <div className="absolute inset-0 z-30 flex items-center pt-16 md:pt-[72px] pb-16">
          <div className="container-editorial w-full">
            {eyebrow && (
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-300 md:text-base">
                {eyebrow}
              </p>
            )}
            <h1 className="max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 max-w-2xl text-base font-normal leading-relaxed text-white/90 md:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
