'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { heroVideo } from '../data/images';
import { IMAGE_BLUR_DATA_URL, IMAGE_QUALITY } from '../lib/image-utils';

interface VideoHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  videoSrc?: string;
  posterSrc?: string;
  posterAlt: string;
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isMobileViewport(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(max-width: 767px)').matches;
}

export default function VideoHero({
  title,
  subtitle,
  eyebrow,
  videoSrc = heroVideo.local,
  posterSrc = heroVideo.poster,
  posterAlt,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enableVideo, setEnableVideo] = useState(false);
  const [activeSrc, setActiveSrc] = useState(videoSrc);
  const [videoReady, setVideoReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion() || isMobileViewport()) return;

    const idle =
      typeof window.requestIdleCallback === 'function'
        ? (cb: () => void) => window.requestIdleCallback(cb, { timeout: 2500 })
        : (cb: () => void) => window.setTimeout(cb, 1);
    const id = idle(() => setEnableVideo(true));
    return () => {
      if (typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(id);
      } else {
        window.clearTimeout(id);
      }
    };
  }, []);

  useEffect(() => {
    if (!enableVideo) return;

    setActiveSrc(videoSrc);
    setVideoReady(false);
    setFailed(false);
  }, [enableVideo, videoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enableVideo || failed) return;

    const markReady = () => {
      setVideoReady(true);
    };

    const onPlaying = () => {
      markReady();
      video.play().catch(() => {});
    };

    const onError = () => {
      if (activeSrc !== heroVideo.cdn) {
        setActiveSrc(heroVideo.cdn);
        setVideoReady(false);
        return;
      }
      setFailed(true);
    };

    video.addEventListener('playing', onPlaying);
    video.addEventListener('canplay', onPlaying);
    video.addEventListener('error', onError);

    video.load();
    video.play().catch(() => {});

    return () => {
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('canplay', onPlaying);
      video.removeEventListener('error', onError);
    };
  }, [activeSrc, enableVideo, failed]);

  return (
    <section className="relative w-full">
      <div className="relative w-full min-h-screen min-h-[100dvh] overflow-hidden bg-gray-900">
        <Image
          src={posterSrc}
          alt={posterAlt}
          fill
          className="object-cover z-0"
          sizes="100vw"
          quality={IMAGE_QUALITY}
          priority
          fetchPriority="high"
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
        />
        {enableVideo && !failed && (
          <video
            key={activeSrc}
            ref={videoRef}
            src={activeSrc}
            className={`absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-700 ${
              videoReady ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          />
        )}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
        <div className="absolute inset-0 z-30 flex items-center pt-16 md:pt-[72px] pb-16">
          <div className="container-editorial w-full">
            {eyebrow && (
              <p className="text-brand-300 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                {eyebrow}
              </p>
            )}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight max-w-4xl leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl leading-relaxed font-light">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
