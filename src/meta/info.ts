export const METADATA = {
    title: 'Wendall Cada',
    description: '',
    'og:site_name': 'wendallcada.com',
};

export const INFO = {
    logo: '/logo.svg',
    overview: '',
    tagline: 'CTO | Software Architecture | Consultant',
    contact: {
        messaging: {
            p1: 'wendallc',
            p2: '83864',
            p3: 'com',
        },
        accounts: [
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/wendall911/',
                linkedin: true,
            },
            {
                name: 'GitHub',
                url: 'https://github.com/wendall911',
                github: true,
            },
            {
                name: 'Mastadon',
                url: 'https://hachyderm.io/@wendall911',
                mastadon: true,
            },
        ] as Array<{ name: string; url: string; [key: string]: string | boolean }>,
    },
};
