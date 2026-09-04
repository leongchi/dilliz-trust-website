/**
 * DILLIZ Swiss private-banking system: development-only preview boundary.
 * Sandbox helpers must never activate on the public DILLIZ hostname, even if a
 * build-time environment flag or query string is present unexpectedly.
 */
const SANDBOX_HOST_SUFFIX = ".manus.computer";

function isTrustedSandboxHost() {
  if (typeof window === "undefined") return false;
  const hostname = window.location.hostname.toLowerCase();
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(SANDBOX_HOST_SUFFIX);
}

export function isSandboxPreviewFeature(parameter: string, allowedPath: string) {
  if (!import.meta.env.DEV || !isTrustedSandboxHost()) return false;
  return window.location.pathname === allowedPath && new URLSearchParams(window.location.search).has(parameter);
}
