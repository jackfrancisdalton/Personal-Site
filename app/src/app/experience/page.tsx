import Timeline from "@/components/Timeline";
import { TimelineItem } from "@/types/TimelineTypes";

export const experiences: TimelineItem[] = [
    {
        id: '1',
        title: 'Job Title',
        subtitle: 'Company Name',
        logo: '/company-logo.svg',
        icon: '/dev-icon.svg',
        years: '2022–Present',
        description: 'my job description goes here',
    },
    {
        id: '2',
        title: 'Other Job Title',
        subtitle: 'Other Company Name',
        logo: '/company-logo.svg',
        icon: '/dev-icon.svg',
        years: '2020-2022',
        description: 'my job description goes here',
    },
    // TODO:
];

export default function ExperiencePage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-10 text-white text-center">Work Experience</h1>
            <Timeline items={experiences} />
        </div>
    );
}
