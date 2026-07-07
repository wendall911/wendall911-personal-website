export interface EducationEntry {
    slug: string;
    institution: string;
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
        logo: 'images/prescott_college.webp',
        program: 'Sustainable Community Development',
        degree: 'Masters Program',
        startDate: '2005',
        endDate: '2006',
    },
    {
        slug: 'north-idaho-college',
        institution: 'North Idaho College',
        logo: 'images/north_idaho_college_logo.webp',
        program: 'Journalism',
        startDate: '1994',
        endDate: '1998',
    },
];
