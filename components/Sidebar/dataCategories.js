import { Navigation } from "../User/Navigation/navigation";
import { Navigation2 } from "../User/Navigation/navigation2";
import { FeatureComponent } from "../User/Feature/feature";
import { FeatureComponent2 } from "../User/Feature/feature2";
import { FeatureComponent3 } from "../User/Feature/feature3";
import { Footer } from "../User/Footer/footer";
import { Footer2 } from "../User/Footer/footer2";
import { Pricing } from "../User/Pricing/pricing";

export const categories = [
    {
        name: 'LAYOUT',
        components: [
            { name: 'Containers' }, { name: 'Elements' }, { name: 'Form' }
        ]
    },
    {
        name: 'BASE',
        components: [
            {
                name: 'Navigations',
                components: [
                    { name: 'navigation1', imgSrc: 'navigation3.png', jsx: <Navigation /> },
                    { name: 'navigation2', imgSrc: 'navigation4.png', jsx: <Navigation2 /> },

                ]
            },
            {
                name: 'Headers',
            },
            {
                name: 'Feature',
                components: [
                    { name: 'feature1', imgSrc: 'feature1.PNG', jsx: <FeatureComponent /> },
                    { name: 'feature2', imgSrc: 'feature2.PNG', jsx: <FeatureComponent2 /> },
                    { name: 'feature3', imgSrc: 'feature3.PNG', jsx: <FeatureComponent3 /> },
                ]
            },
            {
                name: 'Pricing',
                components: [
                    { name: 'pricing1', imgSrc: 'pricing1.PNG', jsx: <Pricing /> }
                ]
            },
            {
                name: 'Footer',
                components: [
                    { name: 'footer', imgSrc: 'footer.PNG', jsx: <Footer /> },
                    { name: 'footer2', imgSrc: 'footer2.PNG', jsx: <Footer2 /> },
                ]
            },
            { name: 'Sign in/ Sign up' },
            { name: 'Team' },
            { name: 'Blog posts' },
            { name: 'Portfolio' },
            { name: 'Call to action' },
            { name: 'Logo clouds' },
            { name: 'How it works' },
            { name: 'Newsletter' },
            { name: 'FAQs' },
            { name: 'Contact' },
            { name: 'Stats' },
            { name: 'Cookies' },

        ]
    }

]