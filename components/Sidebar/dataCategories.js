import { Navigation } from "../User/navigation";
import { FeatureComponent } from "../User/feature";
import { Pricing } from "../User/pricing";

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
                    { name: 'navigation1', imgSrc: 'navigation1.png',  jsx: <Navigation />},
                    
                ]
            },
            {
                name: 'Headers',
            },
            {
                name: 'Feature',
                components: [
                    { name: 'feature1', imgSrc: 'feature1.PNG', jsx: <FeatureComponent /> }
                ]
            },
            { name: 'Pricing',
            components: [
                { name: 'pricing1', imgSrc: 'pricing1.PNG', jsx: <Pricing /> }
            ] },
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
            { name: 'Footer' },
        ]
    }

]