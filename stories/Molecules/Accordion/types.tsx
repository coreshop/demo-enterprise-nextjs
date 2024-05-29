export interface AccordionItem {
    title: string;
    description: string;
}

export interface CoreAccordionProps {
    accordionItems: AccordionItem[];
    active?: string
}