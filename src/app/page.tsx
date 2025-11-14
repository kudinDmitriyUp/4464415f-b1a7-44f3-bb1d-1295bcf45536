"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import { Award, BookOpen, Camera, DollarSign, HelpCircle, Layers, MessageSquare, Rocket, Settings, Sparkles, Star, Target, TrendingUp, Users, Video, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="dotGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Stacks", id: "pricing" },
            { name: "Process", id: "feature" },
            { name: "Results", id: "metric" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="BUILDERCULT"
          button={{ text: "Free Blueprint", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Your App Deserves More Than Hope. It Deserves Growth."
          description="You built something useful. Now it's time the right people see it, share it, and pay for it. BuilderCult helps indie app founders grow with performance-driven content, conversion systems, and creator-led visibility."
          tag="BUILDERCULT"
          tagIcon={Rocket}
          buttons={[
            { text: "Request Free Blueprint", href: "contact" },
            { text: "View Stacks", href: "pricing" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141891200-oymoxpjz.jpg"
          imageAlt="App growth analytics dashboard"
          frameStyle="browser"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="The Reality Check"
          description={[
            "Code Doesn't Get You Customers. Content Does.",
            "Indie developers today are shipping amazing apps—fast, lean, and thoughtful. But most of them never get the traction they deserve.",
            "Because people don't discover apps through searches anymore. They discover them through scrolls, shares, reviews, and UGC. Because free users don't magically upgrade. They upgrade when value is clearly communicated.",
            "In a world drowning in software, marketing isn't optional. It's the second most important skill after coding."
          ]}
          buttons={[
            { text: "Get Started", href: "contact" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFive
          title="We Build Growth Systems That Scale With You"
          description="We don't offer packages. We offer outcomes. Everything we do is tied to one of three missions: Make your app discoverable, Help your users convert, Leverage through content + systems."
          tag="What We Do"
          tagIcon={Settings}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            { title: "Content That Connects", icon: Video },
            { title: "Conversion Optimization", icon: TrendingUp },
            { title: "Creator Partnerships", icon: Users },
            { title: "Growth Systems", icon: Zap },
            { title: "UGC Production", icon: Camera }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your Growth Engine"
          description="Our stacks are modular. Pick what fits. Skip what doesn't. Combine for full power."
          tag="The Stacks"
          tagIcon={Layers}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "spark",
              badge: "The Spark Stack",
              badgeIcon: Sparkles,
              price: "Starting at $2,997",
              subtitle: "Organic Awareness + Scroll-Stopping Content Engine",
              buttons: [
                { text: "Choose This Stack", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "Short-Form + UGC Content",
                "3-5 authentic UGC-style videos monthly",
                "Hooks, captions, and edits included",
                "Organic growth focus"
              ]
            },
            {
              id: "convert",
              badge: "The Convert Stack",
              badgeIcon: Target,
              price: "Starting at $4,997",
              subtitle: "Free-to-Paid Monetization Acceleration System",
              buttons: [
                { text: "Choose This Stack", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "In-app explanation sequences",
                "Email nurture campaigns",
                "Conversion optimization",
                "User journey mapping"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="We Know Our Sh*t! Proven Results"
          description="We don't just talk about growth — we've done it. BuilderCult didn't even have a social media page less than a month ago. In our first 7 days, we've proven our methods work."
          tag="Proven Results"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            { id: "1", icon: TrendingUp, title: "Growth Rate", value: "400%" },
            { id: "2", icon: Users, title: "Days to Results", value: "7" },
            { id: "3", icon: Rocket, title: "Apps Launched", value: "50+" },
            { id: "4", icon: DollarSign, title: "Revenue Generated", value: "$2M+" }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Indie Founders Say"
          description="Real feedback from developers who've seen real growth with BuilderCult"
          tag="Success Stories"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Founder",
              company: "TaskFlow App",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141895446-r0e7r425.jpg"
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Solo Developer",
              company: "FitTracker Pro",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141896198-aimsu2sw.jpg"
            },
            {
              id: "3",
              name: "Emily Kim",
              role: "Co-founder",
              company: "StudyBuddy",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141896965-nmo8rjsj.jpg"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Indie Hacker",
              company: "CodeTime",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141897683-mjs640wz.jpg"
            },
            {
              id: "5",
              name: "Lisa Zhang",
              role: "App Developer",
              company: "MoodTracker",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141898231-e7l9udxu.jpg"
            },
            {
              id: "6",
              name: "Alex Johnson",
              role: "Startup Founder",
              company: "BudgetWise",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141898990-3p74i1wl.jpg"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by the Indie Community"
          description="Join founders who've been featured on top platforms"
          tag="Featured On"
          tagIcon={Star}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141899879-ivsz31pw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141900626-g21q7ord.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141901147-tic95g9b.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141901809-69zxydcf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141902308-a91ylv17.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141902838-gzdozcrf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141903611-0zmfm8tj.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Common Questions"
          description="Everything you need to know about working with BuilderCult"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "What makes BuilderCult different from other marketing agencies?",
              content: "We're built by developers, for developers. We understand the indie app ecosystem and focus on performance-driven growth systems rather than traditional marketing fluff."
            },
            {
              id: "2",
              title: "How quickly can I see results?",
              content: "Most clients start seeing initial traction within 2-4 weeks. Our own social media page grew significantly in just 7 days, proving our methods work fast."
            },
            {
              id: "3",
              title: "Do you work with apps in any niche?",
              content: "Yes! We've worked with productivity apps, fitness apps, developer tools, and more. Our growth systems adapt to any niche."
            },
            {
              id: "4",
              title: "What if I'm not getting downloads yet?",
              content: "Perfect! The Spark Stack is designed specifically for apps that need initial awareness and downloads. We'll help you build from zero."
            },
            {
              id: "5",
              title: "Can I combine multiple stacks?",
              content: "Absolutely. Our stacks are modular and designed to work together. Many clients start with one stack and add others as they grow."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Growth Insights"
          description="Learn from our experience growing indie apps"
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Growth Strategy",
              title: "From Zero to 10K Downloads: A Complete Guide",
              excerpt: "The exact framework we use to take indie apps from launch to their first 10,000 downloads",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141904286-c7qo3omd.jpg",
              authorName: "Adi",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141906373-0w8vdgm4.jpg",
              date: "Dec 15, 2024"
            },
            {
              id: "2",
              category: "UGC Marketing",
              title: "Why UGC Beats Traditional App Marketing",
              excerpt: "How user-generated content drives 3x more engagement than polished marketing videos",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141905042-dbm3gejt.jpg",
              authorName: "Adi",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141906373-0w8vdgm4.jpg",
              date: "Dec 10, 2024"
            },
            {
              id: "3",
              category: "Conversion",
              title: "The Psychology of Free-to-Paid Conversion",
              excerpt: "Understanding the user mindset and crafting experiences that naturally lead to upgrades",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141905815-c2f9lj9x.jpg",
              authorName: "Adi",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35P1LUXVDX6Oh3omy3F4fM78YAJ/uploaded-1763141906373-0w8vdgm4.jpg",
              date: "Dec 5, 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Let's Get You Seen. Get Your First Blueprint."
          description="Zero fluff. Zero obligation. Just clarity on how we'd grow your app. Personalized plan delivered within 48 hours."
          buttonText="Request Free Blueprint"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "app_name", type: "text", placeholder: "App Name", required: true },
            { name: "app_url", type: "url", placeholder: "App Store/Play Store URL", required: false }
          ]}
          textarea={{
            name: "goals",
            placeholder: "What are your main growth goals? (downloads, revenue, user engagement, etc.)",
            rows: 4,
            required: true
          }}
        />
      </div>
    </ThemeProvider>
  );
}