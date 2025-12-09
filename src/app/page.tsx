"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Flame, Globe, Heart, Instagram, MapPin, Star, TrendingUp, Twitter, Users, Youtube } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="large"
      background="none"
      cardStyle="glass-depth"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Burger King"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271275772-i1d8p9lm.jpg"
          logoAlt="Burger King Logo"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "menu" },
            { name: "Locations", id: "locations" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Flame-Grilled Perfection"
          description="Experience the taste of flame-grilled burgers, crispy fries, and delicious meals made fresh for you"
          tag="Burger King"
          tagIcon={Flame}
          buttons={[
            { text: "Order Now", href: "https://example.com/order" },
            { text: "Find Locations", href: "locations" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271276658-0xypzl6u.jpg",
              imageAlt: "Flame grilled Burger King burger"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271277353-rhealtbr.jpg",
              imageAlt: "Golden crispy french fries"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271279298-4p6vtgn7.jpg",
              imageAlt: "Crispy chicken sandwich"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271278080-a96hxdhl.jpg",
              imageAlt: "Cold refreshing beverage"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271280153-1in03s6u.jpg",
              imageAlt: "Fresh healthy salad option"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271282387-gens8qcp.jpg",
              imageAlt: "Complete combo meal package"
            }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Our Menu"
          description="Discover our signature flame-grilled burgers and fan-favorite menu items"
          tag="Popular Items"
          tagIcon={Star}
          buttons={[
            { text: "View Full Menu", href: "https://example.com/menu" }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "The Whopper",
              price: "$8.49",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271281060-vo10tf0n.jpg",
              imageAlt: "Flame grilled Whopper burger",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Crispy Chicken Sandwich",
              price: "$7.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271281571-g8pjl36k.jpg",
              imageAlt: "Crispy fried chicken sandwich",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "King Combo Meal",
              price: "$11.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271282387-gens8qcp.jpg",
              imageAlt: "Burger combo meal with fries and drink",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Serving Quality Flame-Grilled Meals Since 1954 with a commitment to taste, freshness, and customer satisfaction"
          metrics={[
            { icon: Globe, label: "Global Locations", value: "18,000+" },
            { icon: Users, label: "Daily Customers", value: "26M+" },
            { icon: TrendingUp, label: "Years of Excellence", value: "70+" },
            { icon: Flame, label: "Flame Grilled", value: "100%" }
          ]}
        />
      </div>

      <div id="locations" data-section="locations">
        <FeatureCardOne
          title="Visit Us Today"
          description="Find a Burger King location near you for dine-in, drive-thru, or delivery options"
          tag="Convenient Locations"
          tagIcon={MapPin}
          buttons={[
            { text: "Find Near Me", href: "https://example.com/locations" }
          ]}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="scale-rotate"
          features={[
            {
              title: "Dine-In Experience",
              description: "Enjoy your meal in our comfortable seating areas with fast, friendly service",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271276658-0xypzl6u.jpg",
              imageAlt: "Dine-in restaurant interior"
            },
            {
              title: "Drive-Thru Convenience",
              description: "Quick service at our drive-thru windows - get your favorite meals without leaving your car",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271281060-vo10tf0n.jpg",
              imageAlt: "Drive-thru service counter"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Hear from the people who love our flame-grilled burgers and quality service"
          tag="Customer Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Maria Garcia",
              role: "Regular Customer",
              testimonial: "The Whopper is absolutely delicious! The flame-grilled taste is incomparable. I visit at least twice a week with my family.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271283232-qhcnf35k.jpg",
              imageAlt: "Maria Garcia"
            },
            {
              id: "2",
              name: "James Wilson",
              role: "Busy Professional",
              testimonial: "Perfect for quick lunch breaks. The drive-thru is super efficient and the food is always fresh and hot. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271284012-uqa7vao6.jpg",
              imageAlt: "James Wilson"
            },
            {
              id: "3",
              name: "Sarah Johnson",
              role: "Parent",
              testimonial: "My kids absolutely love the chicken sandwiches and the combos offer great value. It's our go-to place for family dinners.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271284794-ad7kk1xk.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "4",
              name: "David Chen",
              role: "Student",
              testimonial: "Affordable, tasty, and convenient. The menu variety means there's something for everyone. Best fast food in town!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271285461-jbjiicp8.jpg",
              imageAlt: "David Chen"
            },
            {
              id: "5",
              name: "Lisa Martinez",
              role: "Food Enthusiast",
              testimonial: "I appreciate the quality of ingredients and how they maintain consistency across all locations. Simply the best flame-grilled experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271286015-90nh8f6w.jpg",
              imageAlt: "Lisa Martinez"
            },
            {
              id: "6",
              name: "Robert Thompson",
              role: "Long-time Customer",
              testimonial: "Been a loyal customer for years. The taste never changes - always fresh, always delicious. That's the Burger King promise!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271286969-jc8eu74e.jpg",
              imageAlt: "Robert Thompson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you soon."
          buttonText="Send Message"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us your feedback or question",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Burger King"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1765271275772-i1d8p9lm.jpg"
          logoAlt="Burger King Logo"
          copyrightText="© Burger King Corporation 2025. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "https://example.com/careers" },
                { label: "Press", href: "https://example.com/press" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Delivery", href: "https://example.com/delivery" },
                { label: "Catering", href: "https://example.com/catering" },
                { label: "Menu", href: "menu" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "https://example.com/faq" },
                { label: "Locations", href: "locations" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "https://example.com/privacy" },
                { label: "Terms of Service", href: "https://example.com/terms" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com/burgerking", ariaLabel: "Facebook" },
            { icon: Twitter, href: "https://twitter.com/burgerking", ariaLabel: "Twitter" },
            { icon: Instagram, href: "https://instagram.com/burgerking", ariaLabel: "Instagram" },
            { icon: Youtube, href: "https://youtube.com/burgerking", ariaLabel: "YouTube" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}