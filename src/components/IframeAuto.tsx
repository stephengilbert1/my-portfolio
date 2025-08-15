"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  title: string;
  className?: string;
};

export default function IframeAuto({ src, title, className }: Props) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    const resize = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc) return;
        const h = Math.max(
          doc.documentElement?.scrollHeight || 0,
          doc.body?.scrollHeight || 0
        );
        iframe.style.height = `${h}px`;
      } catch {
        // if cross-origin, direct access won't work (ours is same-origin)
      }
    };

    const onLoad = () => {
      resize();
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc) return;
        const ro = new ResizeObserver(resize);
        ro.observe(doc.documentElement);
        ro.observe(doc.body);
        (iframe as any)._ro = ro; // store to disconnect on unmount
      } catch {}
    };

    iframe.addEventListener("load", onLoad);
    window.addEventListener("resize", resize);

    // fallback: one delayed resize in case web fonts/layout settle later
    const t = setTimeout(resize, 600);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", resize);
      iframe.removeEventListener("load", onLoad);
      (iframe as any)._ro?.disconnect?.();
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
      scrolling="no"
    />
  );
}
