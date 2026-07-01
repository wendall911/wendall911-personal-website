export interface ExperienceRole {
    slug: string;
    title: string;
    client?: string;
    clientUrl?: string;
    startDate: string;
    endDate: string;
}

export interface ExperienceEntry {
    slug: string;
    company: string;
    url?: string;
    logo?: string;
    startDate: string;
    endDate: string;
    roles: ExperienceRole[];
}

export const EXPERIENCE: ExperienceEntry[] = [
    {
        slug: 'roughness-technology',
        company: 'Roughness Technology, LLC',
        url: 'https://roughness.technology',
        startDate: 'September 2017',
        endDate: 'Present',
        roles: [
            {
                slug: 'index',
                title: 'CTO / Founding Owner',
                startDate: 'September 2017',
                endDate: 'Present',
            },
            {
                slug: 'waterwonks',
                title: 'Startup Advisor',
                client: 'WaterWonks',
                startDate: 'October 2024',
                endDate: 'Present',
            },
            {
                slug: 'manhattan-strategy',
                title: 'Federal Contract Consultant',
                client: 'Manhattan Strategy Group',
                clientUrl: 'https://manhattanstrategy.com/',
                startDate: 'May 2024',
                endDate: 'October 2024',
            },
            {
                slug: 'game-architect',
                title: 'Educational Game Software Architect',
                client: 'EdTech Industry',
                startDate: 'September 2017',
                endDate: 'Present',
            },
            {
                slug: 'scitent',
                title: 'Principal Software Architect',
                client: 'Scitent',
                clientUrl: 'https://www.scitent.com/',
                startDate: 'September 2018',
                endDate: 'April 2019',
            },
            {
                slug: 'edtech-consultant',
                title: 'Software Architecture Consultant',
                client: 'EdTech Industry',
                startDate: 'September 2017',
                endDate: 'Present',
            },
        ],
    },
    {
        slug: 'prometheus',
        company: 'Prometheus Real Estate Group',
        url: 'https://prometheusapartments.com/',
        startDate: 'January 2022',
        endDate: 'September 2023',
        roles: [
            {
                slug: 'index',
                title: 'Principal Software Architect',
                startDate: 'January 2022',
                endDate: 'September 2023',
            },
        ],
    },
    {
        slug: 'ets',
        company: 'Educational Testing Service (ETS)',
        url: 'https://www.ets.org/',
        startDate: 'December 2018',
        endDate: 'January 2022',
        roles: [
            {
                slug: 'sr-product-manager',
                title: 'Sr. Product Manager – Software Development/R&D Lead, NAEP',
                startDate: 'December 2018',
                endDate: 'September 2019',
            },
        ],
    },
    {
        slug: 'mentoring-minds',
        company: 'Mentoring Minds, LP',
        startDate: 'March 2014',
        endDate: 'September 2017',
        roles: [
            {
                slug: 'index',
                title: 'Senior Software Architect',
                startDate: 'March 2014',
                endDate: 'September 2017',
            },
        ],
    },
    {
        slug: 'essential-education',
        company: 'Essential Education',
        url: 'https://www.essentialed.com/',
        startDate: 'August 2008',
        endDate: 'February 2014',
        roles: [
            {
                slug: 'cto',
                title: 'CTO',
                startDate: 'June 2009',
                endDate: 'February 2014',
            },
            {
                slug: 'senior-architect',
                title: 'Senior Software Architect',
                startDate: 'August 2008',
                endDate: 'June 2009',
            },
        ],
    },
    {
        slug: 'sandpoint-pac',
        company: 'City of Sandpoint Pedestrian Advisory Committee',
        url: 'https://www.sandpointidaho.gov/',
        startDate: 'August 2004',
        endDate: 'August 2008',
        roles: [
            {
                slug: 'index',
                title: 'Co-Chair',
                startDate: 'August 2004',
                endDate: 'August 2008',
            },
        ],
    },
    {
        slug: 'livesite-networks',
        company: 'LiveSite Networks',
        startDate: 'July 2007',
        endDate: 'August 2008',
        roles: [
            {
                slug: 'index',
                title: 'Principal Software Engineer',
                startDate: 'July 2007',
                endDate: 'August 2008',
            },
            {
                slug: 'cenzic',
                title: 'Principal Software Engineer',
                client: 'Cenzic',
                startDate: 'July 2007',
                endDate: 'August 2008',
            },
            {
                slug: 'apple-osirix',
                title: 'Principal Software Engineer',
                client: 'Apple, Inc. – Osirix',
                startDate: 'July 2007',
                endDate: 'August 2008',
            },
        ],
    },
    {
        slug: 'torus-technologies',
        company: 'Torus Technologies',
        startDate: 'March 2001',
        endDate: 'July 2007',
        roles: [
            {
                slug: 'index',
                title: 'Principal Software Engineer / Owner',
                startDate: 'March 2001',
                endDate: 'July 2007',
            },
            {
                slug: 'empowering-inc',
                title: 'Technology Consultant',
                client: 'Empowering, Inc.',
                startDate: 'March 2001',
                endDate: 'July 2007',
            },
            {
                slug: 'bryankross',
                title: 'Business Consultant / Technology Partner',
                client: 'bryankross.com',
                clientUrl: 'http://bryankross.com',
                startDate: 'August 2002',
                endDate: 'July 2007',
            },
            {
                slug: 'kinnikinnick',
                title: 'Consultant / Technology Partner',
                client: 'Kinnikinnick Native Plant Society',
                clientUrl: 'https://www.nativeplantsociety.org/',
                startDate: 'January 2004',
                endDate: 'July 2007',
            },
            {
                slug: 'northwest-handmade',
                title: 'Consultant / Technology Partner',
                client: 'Northwest Handmade Furniture',
                clientUrl: 'https://www.northwesthandmade.com/',
                startDate: 'March 2003',
                endDate: 'July 2007',
            },
            {
                slug: 'coworking-space',
                title: 'Co-Working Space Director',
                client: 'Torus Technologies Co-Working Space',
                startDate: 'May 2004',
                endDate: 'July 2006',
            },
            {
                slug: 'vinamor',
                title: 'Software Architect / Consultant',
                client: 'Vinamor',
                startDate: 'April 2004',
                endDate: 'March 2005',
            },
            {
                slug: 'real-estate',
                title: 'Software Architect / Consultant',
                client: 'Real Estate Industry',
                startDate: 'March 2001',
                endDate: 'July 2007',
            },
            {
                slug: 'able',
                title: 'Technical Consultant / Software Engineer',
                client: 'ABLE',
                clientUrl: 'https://www.ablelaw.org/',
                startDate: 'September 2004',
                endDate: 'June 2005',
            },
            {
                slug: 'how2cdrom',
                title: 'Co-Founder / CTO',
                client: 'How2CDROM, Inc.',
                startDate: 'March 2001',
                endDate: 'May 2003',
            },
        ],
    },
    {
        slug: 'backup-training-corporation',
        company: 'The Backup Training Corporation',
        startDate: 'August 1999',
        endDate: 'February 2001',
        roles: [
            {
                slug: 'executive-producer',
                title: 'Executive Producer / Principal Software Engineer',
                startDate: 'August 1999',
                endDate: 'February 2001',
            },
        ],
    },
];
