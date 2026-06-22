import { useEffect, useRef, useState } from "react";

export default function OptimizedVideo({
  src,
  preload = "none",
  eager = false,
  ...props
}) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(
    () =>
      eager ||
      (typeof window !== "undefined" && !("IntersectionObserver" in window)),
  );

  useEffect(() => {
    if (eager || shouldLoad) return undefined;

    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [eager, shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      preload={shouldLoad ? preload : "none"}
      {...props}
    />
  );
}
