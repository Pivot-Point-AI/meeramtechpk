"use client";

import { useEffect, useState } from "react";

/**
 * Minimum time the loader stays up. Set to one full tint cycle (2400ms) so a
 * fast load still plays the colour animation through once instead of flashing.
 */
const MIN_VISIBLE_MS = 2400;
/** Hard ceiling - never trap the user behind the overlay. */
const MAX_VISIBLE_MS = 5000;
/** Must match the opacity transition below. */
const FADE_MS = 500;

/**
 * Shipped inline rather than in globals.css so the loader is self-contained:
 * it renders with the overlay in the same server HTML, so no stylesheet
 * ordering, Tailwind processing or cache staleness can leave it un-animated.
 */
const LOADER_CSS = `
.site-loader__mark {
  display: block;
  width: min(240px, 52vw);
  height: auto;
  animation: site-loader-breathe 1.6s ease-in-out infinite;
}
.site-loader__mark path {
  fill: #4C5DFF;
  animation: site-loader-tint 2.4s ease-in-out infinite;
}
@keyframes site-loader-breathe {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.08); }
}
@keyframes site-loader-tint {
  0%, 100% { fill: #4C5DFF; }
  50%      { fill: #22be8f; }
}
@media (prefers-reduced-motion: reduce) {
  .site-loader__mark,
  .site-loader__mark path { animation: none; }
}
`;

export function SiteLoader() {
  // `fading` starts the opacity transition; `removed` unmounts the node.
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const start = Date.now();
    let settled = false;
    let fadeTimer: number | undefined;
    let removeTimer: number | undefined;

    const finish = () => {
      if (settled) return;
      settled = true;
      const remaining = Math.max(0, MIN_VISIBLE_MS - (Date.now() - start));
      fadeTimer = window.setTimeout(() => {
        setFading(true);
        removeTimer = window.setTimeout(() => setRemoved(true), FADE_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const bailout = window.setTimeout(finish, MAX_VISIBLE_MS);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(bailout);
      if (fadeTimer) window.clearTimeout(fadeTimer);
      if (removeTimer) window.clearTimeout(removeTimer);
    };
  }, []);

  // Freeze the page behind the overlay.
  useEffect(() => {
    if (removed) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [removed]);

  if (removed) return null;

  return (
    <div
      className="site-loader"
      role="status"
      aria-live="polite"
      aria-hidden={fading}
      // Layout and fade are inline so they never depend on a stylesheet.
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#272D3D",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : undefined,
        transition: `opacity ${FADE_MS}ms ease-out`,
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: LOADER_CSS }} />
      <noscript>
        {/* Without JS the overlay would never lift. */}
        <style>{`.site-loader{display:none !important}`}</style>
      </noscript>

      <span className="sr-only">Loading MeeramTech</span>

      <svg
        className="site-loader__mark"
        viewBox="0 0 53.223 36.6807"
        width="240"
        height="165"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* fill as an attribute too, so a stripped stylesheet degrades to
            brand blue rather than the inherited --foreground black. */}
        <path d="M50.8906 35.6761C50.3011 36.094 49.6358 36.3903 48.9328 36.5484C48.2299 36.7064 47.5029 36.7231 46.7936 36.5974C46.0842 36.4718 45.4063 36.2061 44.7986 35.8159C44.191 35.4256 43.6654 34.9182 43.2518 34.3227L38.9875 28.1844C38.9767 28.1981 38.9652 28.2112 38.9528 28.2232L37.1428 25.6222C36.8696 25.2314 36.4619 24.9572 35.9995 24.8534C35.537 24.7494 35.0528 24.823 34.6411 25.06C34.2295 25.2969 33.9199 25.6801 33.7729 26.1349C33.6258 26.5896 33.6517 27.0835 33.8456 27.5202L34.0349 27.7948C34.1507 27.9616 34.2576 28.1347 34.355 28.3131C35.0276 29.5546 35.204 31.009 34.8478 32.3778C34.4918 33.7465 33.6303 34.9256 32.4402 35.6729C31.2502 36.4202 29.8219 36.6791 28.4488 36.3964C27.0756 36.1136 25.8619 35.3107 25.0566 34.1526L22.1236 29.931L19.2304 25.7657L17.1162 22.7179C16.7771 22.438 16.3561 22.2789 15.9185 22.2654C15.4808 22.2518 15.0508 22.3845 14.6956 22.6429C14.3402 22.9013 14.0792 23.2708 13.953 23.6942C13.827 24.1177 13.8429 24.5713 13.9981 24.9848L15.9798 27.8369C15.9918 27.8548 16.0044 27.872 16.0152 27.8899C16.1596 28.1001 16.2886 28.3209 16.4009 28.5502C17.0194 29.8012 17.1464 31.2421 16.7564 32.5836C16.3664 33.9251 15.4882 35.0681 14.2983 35.7828C13.1083 36.4977 11.6946 36.7313 10.341 36.4371C8.98742 36.1428 7.79417 35.3424 7.00086 34.1965L1.00354 25.5624C0.204238 24.419 -0.13654 23.0124 0.0497815 21.6256C0.236102 20.2387 0.935691 18.9745 2.00777 18.0876C3.07984 17.2006 4.44482 16.7565 5.82802 16.8448C7.21122 16.9331 8.50997 17.5471 9.46292 18.5634C9.47933 18.58 9.49638 18.5984 9.51153 18.6163C9.68201 18.8008 9.83938 18.9972 9.98248 19.2041L10.2716 19.621C10.6036 19.9087 11.0202 20.0778 11.457 20.1024C11.8938 20.127 12.3264 20.0055 12.6879 19.7568C13.0495 19.508 13.3197 19.1459 13.4569 18.7265C13.5942 18.307 13.5907 17.8536 13.447 17.4363L13.1257 16.9741C12.9555 16.7293 12.8053 16.4709 12.6768 16.2014C12.6721 16.1943 12.6683 16.1867 12.6655 16.1786C12.0742 14.9252 11.9708 13.4932 12.3758 12.1665C12.7807 10.8398 13.6645 9.71511 14.852 9.01538C16.0394 8.31566 17.4438 8.09196 18.7869 8.38861C20.1299 8.68528 21.3136 9.48064 22.1034 10.6171L29.2913 20.9636C29.2913 20.9636 29.2952 20.9584 29.297 20.9546L29.7724 21.6393C29.9162 21.8463 30.099 22.0228 30.3103 22.1585C30.5216 22.2942 30.7573 22.3867 31.004 22.4304C31.2507 22.4742 31.5035 22.4684 31.7479 22.4134C31.9924 22.3585 32.2239 22.2556 32.4289 22.1104C32.634 21.9652 32.8087 21.7806 32.9431 21.5672C33.0775 21.3538 33.169 21.1158 33.2124 20.8667C33.2556 20.6176 33.25 20.3623 33.1956 20.1154C33.1412 19.8686 33.0393 19.6349 32.8954 19.4278L32.3701 18.6736C32.3729 18.6742 32.3757 18.6742 32.3784 18.6736L25.4132 8.64722C24.6043 7.44438 24.2964 5.96844 24.5561 4.53825C24.8157 3.10806 25.622 1.83841 26.8009 1.00356C27.9799 0.168716 29.4367 -0.164304 30.8567 0.0764347C32.2768 0.317173 33.5461 1.11234 34.3903 2.29018L52.2283 27.9644C53.0634 29.1663 53.3917 30.6539 53.1408 32.1001C52.89 33.5462 52.0805 34.8326 50.8906 35.6761Z" fill="#4C5DFF" />
      </svg>
    </div>
  );
}