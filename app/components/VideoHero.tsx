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

export default function VideoHero({
  title,
  subtitle,
  eyebrow,
  videoSrc = heroVideo.local,
  posterSrc = heroVideo.poster,
  posterAlt,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeSrc, setActiveSrc] = useState(videoSrc);

  useEffect(() => {
    setActiveSrc(videoSrc);
  }, [videoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onError = () => {
      if (activeSrc !== heroVideo.cdn) {
        setActiveSrc(heroVideo.cdn);
      }
    };

    video.addEventListener('error', onError);
    video.play().catch(() => {});

    return () => video.removeEventListener('error', onError);
  }, [activeSrc]);

  return (
    <section className="relative w-full">
      <div className="relative w-full min-h-screen min-h-[100dvh] overflow-hidden bg-gray-900">
        {/* Mobil: statik poster — video indirilmez */}
        <Image
          src={posterSrc}
          alt={posterAlt}
          fill
          className="object-cover z-0 md:hidden motion-reduce:block motion-reduce:md:block"
          sizes="100vw"
          quality={IMAGE_QUALITY}
          priority
          fetchPriority="high"
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
        />

        {/* Masaüstü: yalnızca video + poster (videonun ilk karesi) — çift görsel yok */}
        <video
          key={activeSrc}
          ref={videoRef}
          src={activeSrc}
          poster={posterSrc}
          className="absolute inset-0 z-0 hidden h-full w-full object-cover md:block motion-reduce:hidden"
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
