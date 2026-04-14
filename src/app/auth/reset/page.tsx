"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  APP_DOWNLOAD_URL,
  RESET_EMAIL_REQUEST_URL,
  buildResetDeepLink,
  isValidPasswordResetRequest,
  parsePasswordResetParams,
} from "@/lib/auth-reset";

const APP_OPEN_TIMEOUT_MS = 1600;

export default function PasswordResetRedirectPage() {
  const [showFallback, setShowFallback] = useState(false);
  const [isOpeningApp, setIsOpeningApp] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const fallbackTimerRef = useRef<number | null>(null);

  const resetRequest = useMemo(() => {
    if (typeof window === "undefined") return null;
    return parsePasswordResetParams(new URLSearchParams(window.location.search));
  }, []);

  const validResetRequest = useMemo(() => {
    return resetRequest ? isValidPasswordResetRequest(resetRequest) : false;
  }, [resetRequest]);

  const resetCode = useMemo(() => {
    if (!resetRequest || !isValidPasswordResetRequest(resetRequest)) {
      return null;
    }

    return resetRequest.oobCode;
  }, [resetRequest]);

  const deepLink = useMemo(() => {
    if (!resetCode) return null;
    return buildResetDeepLink(resetCode);
  }, [resetCode]);

  useEffect(() => {
    return () => {
      if (fallbackTimerRef.current) {
        window.clearTimeout(fallbackTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && fallbackTimerRef.current) {
        window.clearTimeout(fallbackTimerRef.current);
        setShowFallback(false);
        setIsOpeningApp(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const openApp = () => {
    if (!deepLink) return;

    setIsOpeningApp(true);
    setShowFallback(false);

    window.location.assign(deepLink);

    fallbackTimerRef.current = window.setTimeout(() => {
      setShowFallback(true);
      setIsOpeningApp(false);
    }, APP_OPEN_TIMEOUT_MS);
  };

  const copyResetCode = async () => {
    if (!resetCode) return;

    try {
      await navigator.clipboard.writeText(resetCode);
      setCopySuccess(true);
      toast.success("Reset code copied. Paste it into the app reset screen.");
    } catch {
      toast.error("Unable to copy code. Please copy it manually.");
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_#eef4ff,_#f8fafc_45%,_#ffffff)] px-4 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(155,188,255,0.35),transparent_42%),radial-gradient(circle_at_80%_10%,rgba(214,180,255,0.28),transparent_40%)]" />

      <section
        aria-labelledby="reset-redirect-heading"
        className="relative w-full max-w-lg rounded-3xl border border-white/70 bg-white/85 p-6 shadow-3xl backdrop-blur md:p-8"
      >
        {validResetRequest ? (
          <>
            <p className="text-sm font-medium text-muted-foreground">Password reset</p>
            <h1 id="reset-redirect-heading" className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              Continue in Petal
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Tap below to open the app and finish resetting your password securely.
            </p>

            <div className="mt-6 space-y-3">
              <Button
                type="button"
                size="lg"
                className="w-full text-base"
                onClick={openApp}
                aria-label="Open Petal app to reset password"
              >
                {isOpeningApp ? "Opening Petal App..." : "Open Petal App"}
              </Button>

              <Button
                type="button"
                size="lg"
                variant="outline"
                className="w-full text-base"
                onClick={copyResetCode}
                aria-label="Copy password reset code"
              >
                Copy reset code
              </Button>

              <Link
                href={APP_DOWNLOAD_URL}
                className="inline-flex w-full justify-center rounded-full px-4 py-2 text-sm font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                I don&apos;t have the app
              </Link>
            </div>

            {copySuccess && (
              <p className="mt-4 rounded-xl border border-success/30 bg-success/10 px-3 py-2 text-sm text-foreground">
                Reset code copied. Paste it into the Petal app reset screen.
              </p>
            )}

            {showFallback && (
              <div className="mt-4 rounded-xl border border-border/80 bg-secondary/45 p-3 text-sm text-foreground">
                <p className="font-medium">If the app didn&apos;t open</p>
                <p className="mt-1 text-muted-foreground">
                  Make sure Petal is installed, then try again. You can also copy the code above and paste it in the
                  app&apos;s reset-password screen.
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            <h1 id="reset-redirect-heading" className="text-3xl font-semibold tracking-tight text-foreground">
              Reset link issue
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              This reset link is invalid or incomplete.
            </p>

            <Button asChild size="lg" className="mt-6 w-full text-base">
              <Link href={RESET_EMAIL_REQUEST_URL}>Request a new reset email</Link>
            </Button>
          </>
        )}
      </section>
    </main>
  );
}
