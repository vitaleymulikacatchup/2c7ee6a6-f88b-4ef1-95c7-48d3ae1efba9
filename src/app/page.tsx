"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Building, ForkKnife } from "lucide-react";

const assetMap = [
  { "id": "heroImage", "url": "https://images.pexels.com/photos/31574487/pexels-photo-31574487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Crescent moon in a colorful twilight sky over Cefalù, Sicily, capturing the serene beauty of dusk." },
  { "id": "aboutImage", "url": "https://images.pexels.com/photos/29346134/pexels-photo-29346134.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Faded religious posters on a rustic wall in Palermo, capturing urban decay and historical echoes." },
  { "id": "feature1Image", "url": "https://images.pexels.com/photos/916446/pexels-photo-916446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Traditional French storefront of Le Comptoir de Mathilde in Bordeaux, offering local delicacies." },
  { "id": "feature2Image", "url": "https://images.pexels.com/photos/1628153/pexels-photo-1628153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Stunning aerial shot of a lush urban park in downtown Palermo, Sicily, showcasing vibrant greenery and cityscapes." },
  { "id": "teamMember1", "url": "https://images.pexels.com/photos/34293228/pexels-photo-34293228.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Young woman smiling while posing with rental bike in a park in Mexico City at dusk." }
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "About Us", id: "about" },
            { name: "Features", id: "features" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sicily Vibes"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Explore Sicily's Charm"
            description="Discover the mesmerizing beauty and rich culture of Sicily."
            imageSrc="https://images.pexels.com/photos/31574487/pexels-photo-31574487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            tag="Travel & Culture"
            buttons={[
              { text: "Discover More", href: "about" },
              { text: "Contact Us", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Rich Culture", description: "Sicily's rich cultural heritage is unmatched.", icon: Award },
              { title: "Beautiful Landscapes", description: "From mountains to beaches, Sicily has it all." }
            ]}
            imageSrc="https://images.pexels.com/photos/29346134/pexels-photo-29346134.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Discover Unique Features"
            features={[
              { title: "Gastronomy", description: "Taste the world-famous Sicilian dishes.", icon: ForkKnife, button: { text: "Learn More", href: "#" } },
              { title: "Architecture", description: "Explore stunning architectural masterpieces.", icon: Building, button: { text: "Explore", href: "#" } }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay Updated"
            description="Subscribe to our newsletter for the latest updates about Sicily."
            inputPlaceholder="Your email address"
            onSubmit={email => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Explore",
                items: [
                  { label: "Home", href: "home" },
                  { label: "About Us", href: "about" }
                ]
              },
              {
                title: "Contact",
                items: [
                  { label: "Contact Us", href: "contact" },
                  { label: "Terms of Service", href: "#" }
                ]
              }
            ]}
            copyrightText="© 2025 | Sicily Vibes"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}