'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { heroVideo } from '../data/images';

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
  const [videoReady, setVideoReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setVideoReady(false);
    setFailed(false);
  }, [videoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || failed) return;

    const markReady = () => {
      setVideoReady(true);
      video.play().catch(() => {
        // Autoplay engellense bile kare görünsün; postere düşme.
      });
    };

    const onError = () => setFailed(true);

    video.addEventListener('canplay', markReady);
    video.addEventListener('error', onError);

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      markReady();
    }

    return () => {
      video.removeEventListener('canplay', markReady);
      video.removeEventListener('error', onError);
    };
  }, [videoSrc, failed]);

  return (
    <section className="relative w-full pt-16 md:pt-[72px]">
      <div className="relative w-full aspect-[21/9] min-h-[280px] md:min-h-[420px] max-h-[80vh] overflow-hidden bg-gray-900">
        {!failed ? (
          <>
            <video
              key={videoSrc}
              ref={videoRef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                videoReady ? 'opacity-100' : 'opacity-0'
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={posterSrc}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            {!videoReady && (
              <Image
                src={posterSrc}
                alt={posterAlt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            )}
          </>
        ) : (
          <Image
            src={posterSrc}
            alt={posterAlt}
            fill
            className="object-cover animate-ken-burns"
            sizes="100vw"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-editorial w-full -mt-6 md:-mt-10">
            {eyebrow && (
              <p className="text-brand-300 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                {eyebrow}
              </p>
            )}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight max-w-4xl leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-base md:text-lg text-white/85 max-w-2xl leading-relaxed font-light">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
