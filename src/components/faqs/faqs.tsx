import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";

function AccordionItemFAQs(props: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      {...props}
      className={cn(
        "bg-secondary/30 data-[state=open]:bg-card data-[state=open]:border-border rounded-lg border border-transparent px-5 py-2 transition-colors data-[state=open]:shadow-sm lg:px-7",
        props.className,
      )}
    />
  );
}

function AccordionTriggerFAQs(props: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      {...props}
      className={cn("[&[data-state=open]>svg]:text-foreground text-base lg:text-lg", props.className)}
    />
  );
}

function AccordionContentFAQs(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} className={cn("text-muted-foreground lg:text-base", props.className)} />;
}

export function FAQs() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25">
      <div className="flex w-full flex-col gap-6">
        <Badge variant="secondary" className="mb-2 uppercase">
          FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          Frequently
          <br />
          Asked <span className="text-muted-foreground">Questions</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          Everything you need to know about Petal.
        </p>
        <Button className="w-fit" size="lg" asChild>
          <Link href="https://apps.apple.com">Get Started</Link>
        </Button>
      </div>
      <Accordion type="single" collapsible defaultValue="privacy" className="grid w-full gap-4">
        <AccordionItemFAQs value="privacy">
          <AccordionTriggerFAQs>Is my health data private and secure?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Yes. Privacy is our foundational principle. Your sensitive cycle data is securely stored, and we provide transparent options to export or completely delete your account and data at any time.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="dark-mode">
          <AccordionTriggerFAQs>Does Petal have a dark mode?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Petal was built with an ethereal, native dark-themed UI that is gentle on the eyes. It features beautiful gradients, smooth animations, and satisfying iOS-native haptics.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="ai-assistant">
          <AccordionTriggerFAQs>How does the AI Assistant work?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>Our smart assistant, 'Ask Petal,' is designed to provide supportive, educational insights based on your cycle phase and wellness queries. You can type or use your voice to communicate with her naturally.</p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="partner-dashboard">
          <AccordionTriggerFAQs>How does the Partner Dashboard work?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>You can invite your partner to join 'Partner Mode.' They will receive a simplified, secure view of your current phase and tips on how they can support you, without seeing your highly personal logging details.</p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
      </Accordion>
    </div>
  );
}
