import Timeline from "@/components/Timeline";
import { TimelineItem } from "@/types/TimelineTypes";

export const experiences: TimelineItem[] = [
    {
        id: '1',
        title: 'Senior Agile Delivery Manager',
        subtitle: 'Company Name',
        logo: '/company-logo.svg',
        icon: "briefcase",
        years: '2022–Present',
        description: 'my job description goes here',
    },
    {
        id: '2',
        title: 'Senior Software Engineer',
        subtitle: 'Other Company Name',
        logo: '/company-logo.svg',
        icon: "code2",
        years: '2020-2022',
        description: 'my job description goes here',
    },
    {
        id: '3',
        title: 'Software Engineer',
        subtitle: 'Other Company Name',
        logo: '/company-logo.svg',
        icon: "code2",
        years: '2020-2022',
        description: 'my job description goes here',
    },
    {
        id: '4',
        title: 'Junior Software Engineer',
        subtitle: 'Other Company Name',
        logo: '/company-logo.svg',
        icon: "code2",
        years: '2020-2022',
        description: 'my job description goes here',
    },
    {
        id: '5',
        title: 'Lead Software Engineer',
        subtitle: 'Scratch Rock Records',
        logo: '/company-logo.svg',
        icon: "code2",
        years: '2020-2022',
        description: 'my job description goes here',
    },
    {
        id: '6',
        title: 'Software Engineer',
        subtitle: 'Soccer Hub',
        logo: '/company-logo.svg',
        icon: "code2",
        years: '2020-2022',
        description: 'my job description goes here',
    },
    {
        id: '7',
        title: 'University of East Anglia',
        subtitle: 'Soccer Hub',
        logo: '/company-logo.svg',
        icon: "graduation",
        years: '2020-2022',
        description: 'my job description goes here',
    },
];

export default function ExperiencePage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-10 text-white">Work Experience</h1>
            <Timeline items={experiences} />
        </div>
    );
}
