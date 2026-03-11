import { FeaturesCarousel } from "@/components/features/features-carousel";
import { FeaturesTabs } from "@/components/features/features-tabs";
import { Badge } from "@/components/ui/badge";
import { ActivityIcon, ChartNoAxesColumnIcon, SlidersIcon, ZapIcon } from "lucide-react";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

const features = [
  {
    icon: <SlidersIcon size={20} />,
    title: "Phase-Aware Insights",
    description: "Stop guessing. Get tailored daily advice based on your exact cycle phase—from menstruation to luteal.",
    image: "/app-image-1.png",
  },
  {
    icon: <ZapIcon size={20} />,
    title: "'Ask Petal' AI Assistant",
    description: "A private, intelligent companion ready to answer questions about your cycle. Type or use voice transcription for hands-free tracking!",
    image: "/app-image-1.png",
  },
  {
    icon: <ActivityIcon size={20} />,
    title: "Partner Dashboard",
    description: "Keep your partner in the loop. Securely share your cycle phase so they know exactly how to support you.",
    image: "/app-image-1.png",
  },
  {
    icon: <ChartNoAxesColumnIcon size={20} />,
    title: "Uncompromising Privacy",
    description: "Your health data is yours. Period. We feature secure cloud storage, strict privacy protocols, and instant data export or deletion.",
    image: "/app-image-1.png",
  },
] satisfies Feature[];

export function Features() {
  return (
    <div id="features" className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <Badge variant="secondary" className="uppercase">
        Features
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        One App. <div className="text-muted-foreground">Complete Understanding of Your Body.</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Everything you need to navigate your cycle with confidence and clarity, all in one place.
      </p>
      <FeaturesCarousel features={features} className="block lg:hidden" />
      <FeaturesTabs features={features} className="hidden lg:block" />
    </div>
  );
}
