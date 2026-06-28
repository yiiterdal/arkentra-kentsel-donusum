'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { getHeroVideoMobileSrc, getHeroVideoSrc, heroVideo } from '../data/images';
import { IMAGE_BLUR_DATA_URL } from '../lib/image-utils';

const HERO_POSTER_QUALITY = 95;

interface VideoHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  videoSrc?: string;
  mobileVideoSrc?: string;
  posterSrc?: string;
  posterAlt: string;
}

function pickVideoSrc(desktopSrc: string, mobileSrc: string): string {
  if (typeof window === 'undefined') return desktopSrc;
  return window.matchMedia('(max-width: 767px)').matches ? mobileSrc : desktopSrc;
}

function pickFallbackSrc(isMobile: boolean): string {
  return isMobile ? heroVideo.cdnMobile : heroVideo.cdn;
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
  const [activeSrc, setActiveSrc] = useState(videoSrc);
  const [isMobile, setIsMobile] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const sync = () => {
      const mobile = mq.matches;
      setIsMobile(mobile);
      setActiveSrc(mobile ? mobileVideoSrc : videoSrc);
      setVideoVisible(false);
    };

    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, [videoSrc, mobileVideoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onError = () => {
      setVideoVisible(false);
      const fallback = pickFallbackSrc(isMobile);
      if (activeSrc !== fallback) {
        setActiveSrc(fallback);
      }
    };

    const onPlaying = () => setVideoVisible(true);
    const onLoadedData = () => {
      video.play().then(() => setVideoVisible(true)).catch(() => setVideoVisible(false));
    };

    video.addEventListener('error', onError);
    video.addEventListener('playing', onPlaying);
    video.addEventListener('loadeddata', onLoadedData);
    video.load();

    return () => {
      video.removeEventListener('error', onError);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('loadeddata', onLoadedData);
    };
  }, [activeSrc, isMobile]);

  return (
    <section className="relative w-full">
      <div className="relative w-full min-h-screen min-h-[100dvh] overflow-hidden bg-gray-900">
        {/* Poster her zaman altta — video oynamazsa (özellikle iOS) hero boş kalmaz */}
        <Image
          src={posterSrc}
          alt={posterAlt}
          fill
          className="object-cover z-0"
          sizes="100vw"
          quality={HERO_POSTER_QUALITY}
          priority
          fetchPriority="high"
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
        />

        <video
          key={activeSrc}
          ref={videoRef}
          src={activeSrc}
          poster={posterSrc}
          className={`absolute inset-0 z-[1] h-full w-full object-cover motion-reduce:hidden transition-opacity duration-300 ${
            videoVisible ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
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
