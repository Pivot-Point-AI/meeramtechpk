import "server-only";

/**
 * Small fixed-window limiter, in process memory.
 *
 * LIMITATION, stated plainly: this only holds within a single server instance.
 * On a platform that runs several instances or scales to zero, an attacker gets
 * the allowance once per instance and the counters reset on every cold start.
 * It stops casual form-bashing, not a determined flood. For that, move the
 * counter to Redis (Upstash works well on Vercel) or put the endpoint behind
 * your platform's WAF.
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

const hits = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(key: string) {
  const now = Date.now();

  // Opportunistic sweep so the map cannot grow without bound.
  if (hits.size > 5_000) {
    for (const [k, v] of hits) if (v.resetAt <= now) hits.delete(k);
  }

  const entry = hits.get(key);

  if (!entry || entry.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true as const };
  }

  if (entry.count >= MAX_PER_WINDOW) {
    return { allowed: false as const, retryAfterMs: entry.resetAt - now };
  }

  entry.count += 1;
  return { allowed: true as const };
}