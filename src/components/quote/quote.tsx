import React from "react";

export function Quote() {
  return (
    <figure className="mx-auto flex max-w-3xl flex-col items-center px-4 py-12 text-center">
      <blockquote className="text-3xl leading-[1.1] font-medium tracking-tighter text-balance md:text-5xl md:text-wrap">
        <span>&quot;Petal has completely changed how I track my cycle. </span>
        <span className="text-muted-foreground/50">
          The AI assistant feels like a knowledgeable friend, and the design is absolutely gorgeous. Finally, a period tracker that respects my privacy!&quot;
        </span>
      </blockquote>
      <figcaption className="mt-10">
        <span className="block font-semibold tracking-tight md:text-xl">Sarah M.</span>
        <span className="text-muted-foreground mt-1 block text-xs tracking-tighter md:text-xl">
          Daily Petal User
        </span>
      </figcaption>
    </figure>
  );
}
