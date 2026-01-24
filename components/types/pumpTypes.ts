export interface PumpDetail {
    id: string;
    title: string;
    cardImage: string;
    detailImage: string;
    shortFeatures: string[];
    fullDescription: string;
    tableOfContents: string[];
    sections: {
        title: string;
        content: string;
    }[];
}
