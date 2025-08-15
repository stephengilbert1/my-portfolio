// src/components/IframeAuto.tsx
"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  title: string;
  className?: string;
};

export default function IframeAuto({ src, title, className }: Props) {
  const ref = useRef<HTMLIFrameElement>(null);
  const roRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    const resize = () => {
      try {
        const doc =
          iframe.contentDocument ?? iframe.contentWindow?.document ?? null;
        if (!doc) return;
        const html = doc.documentElement;
        const body = doc.body;
        const h = Math.max(
          html ? html.scrollHeight : 0,
          body ? body.scrollHeight : 0
        );
        iframe.style.height = `${h}px`;
      } catch {
        // if cross-origin, direct access won't work (ours is same-origin)
      }
    };

    const onLoad = () => {
      resize();
      try {
        const doc =
          iframe.contentDocument ?? iframe.contentWindow?.document ?? null;
        if (!doc) return;
        const ro = new ResizeObserver(() => resize());
        roRef.current = ro;
        ro.observe(doc.documentElement);
        ro.observe(doc.body);
      } catch {}
    };

    iframe.addEventListener("load", onLoad);
    window.addEventListener("resize", resize);

    // fallback: one delayed resize in case web fonts/layout settle later
    const t = setTimeout(resize, 600);

    return () => {
      window.clearTimeout(t);
      iframe.removeEventListener("load", onLoad);
      window.removeEventListener("resize", resize);
      roRef.current?.disconnect();
      roRef.current = null;
    };
  }, [src]);

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      loading="lazy"
      className={className}
      style={{ width: "100%", border: 0, display: "block" }}
    />
  );
}
