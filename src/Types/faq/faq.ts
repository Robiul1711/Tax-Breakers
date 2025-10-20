export type TFaqData = {
    navigation: {
        title: string;
        slug: string;
    }[];
    categories: {
        categoryTitle: string;
        slug: string;
        faqs: {
            id: string;
            question: string;
            answer: string;
            isOpen: boolean;
        }[];
    }[];
};
