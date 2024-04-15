import { create } from 'zustand'

export const useQuestionsStore = create((get, set) => ({
    questions: [
        { question: 'What should i eat today?', recipesID: [10003, 882829] },
    ],
    searchQuestion: (term) => {
        return get().questions.filter(q => q.question.toLowerCase().includes(term.toLowerCase().trim()));
    },
}))
