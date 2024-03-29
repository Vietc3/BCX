import { Navigation } from "../User/Navigation/navigation";
import { Navigation2 } from "../User/Navigation/navigation2";
import { Navigation6 } from "../User/Navigation/navigation6";
import { Navigation8 } from "../User/Navigation/navigation8";
import { Navigation7 } from "../User/Navigation/navigation7";
import { Navigation9 } from "../User/Navigation/navigation9";

import { Header } from "../User/Header/header";
import { Header2 } from "../User/Header/header2";
import { Header3 } from "../User/Header/header3";
import { Header4 } from "../User/Header/header4";
import { Header5 } from "../User/Header/header5";
import { Header6 } from "../User/Header/header6";

import { Carousel1 } from "../User/Carousel/Carousel1";

import { FeatureComponent } from "../User/Feature/feature";
import { FeatureComponent2 } from "../User/Feature/feature2";
import { FeatureComponent3 } from "../User/Feature/feature3";

import { Testimonial1 } from "../User/Testimonial/testimonial";
import { Testimonial2 } from "../User/Testimonial/testimonial2";
import { Testimonial3 } from "../User/Testimonial/testimonial3";

import { CallToAction } from "../User/CallToAction/callToAction";
import { CallToAction2 } from "../User/CallToAction/callToAction2";
import { CallToAction3 } from "../User/CallToAction/callToAction3";
import { CallToAction4 } from "../User/CallToAction/callToAction4";

import { SignInUp } from "../User/SignInUp/signInUp";
import { SignInUp2 } from "../User/SignInUp/signInUp2";
import { SignInUp3 } from "../User/SignInUp/signInUp3";

import { Footer } from "../User/Footer/footer";
import { Footer2 } from "../User/Footer/footer2";
import { Footer3 } from "../User/Footer/footer3";
import { Footer4 } from "../User/Footer/footer4";
import { Footer5 } from "../User/Footer/footer5";

import { Pricing } from "../User/Pricing/pricing";
import { Pricing2 } from "../User/Pricing/pricing2";

import LastestCard from "../User/DynamicComponent/LastestArticles";

export const categories = [
  {
    name: "LAYOUT",
    components: [
      { name: "Containers" },
      { name: "Elements" },
      { name: "Form" },
    ],
  },
  {
    name: "DYNAMIC COMPONENTS",
    components: [
      {
        name: "Lastest Card",
        components: [
          {
            name: "LastestArticles",
            imgSrc: "lastestArticle.png",
            jsx: <LastestCard />,
          },
        ],
      },
    ],
  },
  {
    name: "STATIC COMPONENT",
    components: [
      {
        name: "Navigations",
        components: [
          {
            name: "navigation8",
            imgSrc: "navigation8.png",
            jsx: <Navigation8 />,
          },
          {
            name: "navigation9",
            imgSrc: "navigation9.png",
            jsx: <Navigation9 />,
          },
          {
            name: "navigation7",
            imgSrc: "navigation7.png",
            jsx: <Navigation7 />,
          },

          {
            name: "navigation1",
            imgSrc: "navigation3.png",
            jsx: <Navigation />,
          },
          {
            name: "navigation2",
            imgSrc: "navigation4.png",
            jsx: <Navigation2 />,
          },
          {
            name: "navigation6",
            imgSrc: "navigation6.png",
            jsx: <Navigation6 />,
          },
        ],
      },
      {
        name: "Headers",
        components: [
          { name: "header1", imgSrc: "header1.PNG", jsx: <Header /> },
          { name: "header2", imgSrc: "header2.PNG", jsx: <Header2 /> },
          { name: "header3", imgSrc: "header3.PNG", jsx: <Header3 /> },
          { name: "header4", imgSrc: "header4.PNG", jsx: <Header4 /> },
          { name: "header5", imgSrc: "header5.PNG", jsx: <Header5 /> },
          { name: "header6", imgSrc: "header6.PNG", jsx: <Header6 /> },
        ],
      },
      {
        name: "Carousel",
        components: [
          {
            name: "Carousel1",
            imgSrc: "Carousel1.png",
            jsx: <Carousel1 />,
          },
        ],
      },
      {
        name: "Feature",
        components: [
          {
            name: "feature1",
            imgSrc: "feature1.PNG",
            jsx: <FeatureComponent />,
          },
          {
            name: "feature2",
            imgSrc: "feature2.PNG",
            jsx: <FeatureComponent2 />,
          },
          {
            name: "feature3",
            imgSrc: "feature3.PNG",
            jsx: <FeatureComponent3 />,
          },
        ],
      },
      {
        name: "Testimonials",
        components: [
          {
            name: "testimonial1",
            imgSrc: "testimonial.PNG",
            jsx: <Testimonial1 />,
          },
          {
            name: "testimonial2",
            imgSrc: "testimonial2.PNG",
            jsx: <Testimonial2 />,
          },
          {
            name: "testimonial3",
            imgSrc: "testimonial3.PNG",
            jsx: <Testimonial3 />,
          },
        ],
      },
      {
        name: "Call to action",
        components: [
          { name: "CTA", imgSrc: "callToAction.PNG", jsx: <CallToAction /> },
          { name: "CTA2", imgSrc: "callToAction2.PNG", jsx: <CallToAction2 /> },
          { name: "CTA3", imgSrc: "callToAction3.PNG", jsx: <CallToAction3 /> },
          { name: "CTA4", imgSrc: "callToAction4.PNG", jsx: <CallToAction4 /> },
        ],
      },
      {
        name: "Pricing",
        components: [
          { name: "pricing1", imgSrc: "pricing1.PNG", jsx: <Pricing /> },
          { name: "pricing2", imgSrc: "pricing2.PNG", jsx: <Pricing2 /> },
        ],
      },
      {
        name: "Sign in/ Sign up",
        components: [
          { name: "signInUp", imgSrc: "signInUp.PNG", jsx: <SignInUp /> },
          { name: "signInUp2", imgSrc: "signInUp2.PNG", jsx: <SignInUp2 /> },
          { name: "signInUp3", imgSrc: "signInUp3.PNG", jsx: <SignInUp3 /> },
        ],
      },
      {
        name: "Footer",
        components: [
          { name: "footer", imgSrc: "footer.PNG", jsx: <Footer /> },
          { name: "footer2", imgSrc: "footer2.PNG", jsx: <Footer2 /> },
          { name: "footer3", imgSrc: "footer3.PNG", jsx: <Footer3 /> },
          { name: "footer4", imgSrc: "footer4.PNG", jsx: <Footer4 /> },
          { name: "footer5", imgSrc: "footer5.PNG", jsx: <Footer5 /> },
        ],
      },
      { name: "Team" },
      { name: "Blog posts" },
      { name: "Portfolio" },
      { name: "Logo clouds" },
      { name: "How it works" },
      { name: "Newsletter" },
      { name: "FAQs" },
      { name: "Contact" },
      { name: "Stats" },
      { name: "Cookies" },
    ],
  },
];
