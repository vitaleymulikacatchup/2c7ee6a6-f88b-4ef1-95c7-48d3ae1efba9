"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sun, Architecture } from "lucide-react";

const assetMap = [
  {"id":"hero-sicily-image","url":"https://images.pexels.com/photos/34327487/pexels-photo-34327487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Stunning aerial view of Mount Etna's craters and landscape in Sicily, captured under a clear blue sky."},
  {"id":"about-sicily-food","url":"https://images.pexels.com/photos/23025304/pexels-photo-23025304.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Octopus and lemon dish on vibrant market table in Palermo, Sicily."},
  {"id":"feature-sicily-architecture","url":"https://images.pexels.com/photos/1628153/pexels-photo-1628153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Stunning aerial shot of a lush urban park in downtown Palermo, Sicily, showcasing vibrant greenery and cityscapes."},
  {"id":"testimonial-person","url":"https://images.pexels.com/photos/34320762/pexels-photo-34320762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"2025 台北攝影器材暨影音創作設備展"},
  {"id":"contact-sicily-beach","url":"https://images.pexels.com/photos/34253379/pexels-photo-34253379.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"favignana "}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sicily"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Discover Sicily"
            description="Experience the vibrant culture and breathtaking landscapes of Sicily."
            imageSrc={assetMap.find(a => a.id === "hero-sicily-image")?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              { text: "Learn More", href: "about" },
              { text: "Join Us", href: "contact" }
            ]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Rich History", description: "Explore ancient ruins and historical landmarks." },
              { title: "Gourmet Cuisine", description: "Indulge in Sicily’s famous foods and wines." }
            ]}
            imageSrc={assetMap.find(a => a.id === "about-sicily-food")?.url ?? "/public/images/placeholder.webp"}
            imagePosition="left"
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Beautiful Architecture", description: "Marvel at the stunning architecture.", icon: Architecture, button: { text: "Explore", href: "#" } },
              { title: "Picturesque Beaches", description: "Relax on golden sands of Sicily.", icon: Sun, button: { text: "Visit", href: "#" } }
            ]}
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[
              { id: "1", name: "John Doe", role: "Traveler", testimonial: "Sicily was an unforgettable experience!" }
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get in Touch"
            title="Plan Your Sicilian Adventure"
            description="Contact us to start planning your dream trip to Sicily."
            imageSrc={assetMap.find(a => a.id === "contact-sicily-beach")?.url ?? "/public/images/placeholder.webp"}
            onSubmit={email => console.log(email)}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Explore", items: [{ label: "About", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 Sicily Tours"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
