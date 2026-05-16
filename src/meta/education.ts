export interface EducationEntry {
    slug: string;
    institution: string;
    url?: string;
    logo: string;
    program: string;
    degree?: string;
    startDate: string;
    endDate: string;
}

export const EDUCATION: EducationEntry[] = [
    {
        slug: 'prescott-college',
        institution: 'Prescott College',
        logo: '/logos/prescott-college.svg',
        program: 'Sustainable Community Development',
        degree: 'Masters',
        startDate: '2005',
        endDate: '2006',
    },
    {
        slug: 'north-idaho-college',
        institution: 'North Idaho College',
        logo: '/logos/north-idaho-college.svg',
        program: 'Journalism',
        startDate: '1994',
        endDate: '1998',
    },
];
