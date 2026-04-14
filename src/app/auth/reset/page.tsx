"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { APP_DOWNLOAD_URL, POST_RESET_DEEP_LINK } from "@/lib/auth-reset";

const APP_OPEN_TIMEOUT_MS = 1600;

export default function PasswordResetRedirectPage() {
  const [showFallback, setShowFallback] = useState(false);
  const [isOpeningApp, setIsOpeningApp] = useState(false);
  const fallbackTimerRef = useRef<number | null>(null);

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
    setIsOpeningApp(true);
    setShowFallback(false);

    window.location.assign(POST_RESET_DEEP_LINK);

    fallbackTimerRef.current = window.setTimeout(() => {
      setShowFallback(true);
      setIsOpeningApp(false);
    }, APP_OPEN_TIMEOUT_MS);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_#eef4ff,_#f8fafc_45%,_#ffffff)] px-4 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(155,188,255,0.35),transparent_42%),radial-gradient(circle_at_80%_10%,rgba(214,180,255,0.28),transparent_40%)]" />

      <section
        aria-labelledby="reset-redirect-heading"
        className="relative w-full max-w-lg rounded-3xl border border-white/70 bg-white/85 p-6 shadow-3xl backdrop-blur md:p-8"
      >
        <p className="text-sm font-medium text-muted-foreground">Password reset complete</p>
        <h1 id="reset-redirect-heading" className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
          Your password has been updated
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Open Petal to continue securely in your account.
        </p>

        <div className="mt-6 space-y-3">
          <Button
            type="button"
            size="lg"
            className="w-full text-base"
            onClick={openApp}
            aria-label="Open Petal app"
          >
            {isOpeningApp ? "Opening Petal App..." : "Open Petal App"}
          </Button>

          <Link
            href={APP_DOWNLOAD_URL}
            className="inline-flex w-full justify-center rounded-full px-4 py-2 text-sm font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            I don&apos;t have the app
          </Link>
        </div>

        {showFallback && (
          <div className="mt-4 rounded-xl border border-border/80 bg-secondary/45 p-3 text-sm text-foreground">
            <p className="font-medium">If the app didn&apos;t open</p>
            <p className="mt-1 text-muted-foreground">
              Make sure Petal is installed, then return and try again. If you&apos;re on a different device, install
              Petal from the App Store first.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
