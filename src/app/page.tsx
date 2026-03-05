import CometHero from "@/components/ui/comet-hero";
import DemoOne from "@/components/demo";
import DemoCreditCard from "@/components/demo-card";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";
import { AnimatedSocialIcons } from "@/components/ui/floating-action-button";

export default function Home() {
  const faqData = [];

  const socialIcons = [
    { 
      iconName: "Github",
      href: "https://github.com",
      className: "hover:bg-accent"
    },
    { 
      iconName: "Twitter",
      href: "https://twitter.com" 
    },
    { 
      iconName: "Linkedin",
      href: "https://linkedin.com" 
    },
    { 
      iconName: "Instagram",
      href: "https://instagram.com" 
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <CometHero />
      <DemoOne />
      <DemoCreditCard />
      <div className="w-full max-w-4xl mx-auto py-20">
        <FaqAccordion 
          data={faqData}
          className="max-w-[700px] mx-auto"
        />
        <div className="mt-12 flex justify-center">
          <AnimatedSocialIcons 
            icons={socialIcons}
            iconSize={20}
          />
        </div>
      </div>
    </main>
  );
}
