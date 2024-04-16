import { create } from 'zustand'

const { VITE_EDAMAM_APP_ID, VITE_EDAMAM_APP_KEY } = import.meta.env;

export const useQuestionsStore = create((set) => ({
    questions: [
        {
            id: 1,
            question: 'If your mood were a movie genre, which one would it be?',
            options: [
                { label: 'Rom-Com', value: 1 },
                { label: 'Action', value: 2 },
                { label: 'Sci-Fi', value: 3 },
                { label: 'Horror', value: 4 }
            ]
        },
        {
            id: 2,
            question: 'On a scale of 1 to 10, how much do you feel like a superhero today?',
            options: [
                { label: 'Clark Kent', value: 1 },
                { label: 'Batman', value: 2 },
                { label: 'Wonder Woman', value: 3 },
                { label: 'Deadpool', value: 4 }
            ]
        },
        {
            id: 3,
            question: 'If your mood were a famous TV show, which one would it be?',
            options: [
                { label: 'Friends', value: 1 },
                { label: 'Game of Thrones', value: 2 },
                { label: 'Stranger Things', value: 3 },
                { label: 'The Office', value: 4 }
            ]
        },

        {
            id: 4,
            question: 'How would you describe your current mood in terms of meme energy?',
            options: [
                { label: 'Low-key: Feeling chill and relaxed, like a laid-back meme scrolling session.', value: 1 },
                { label: 'Dank: Ready for some spicy memes and bold flavors to match my mood.', value: 2 },
                { label: 'Wholesome: Craving some heartwarming eats that make me feel all warm and fuzzyinside.', value: 3 },
                { label: 'Chaotic: Totally feeling like a meme tornado, ready to shake things up with some wild culinary creations.', value: 4 }
            ]
        },

        {
            id: 5,
            question: 'If your mood were a famous song lyric, which one would it be?',
            options: [
                { label: '"Don\'t Worry, Be Happy": Feeling carefree and upbeat, ready for some feel-good food.', value: 1 },
                { label: '"Eye of the Tiger": Totally feeling like a culinary champion, ready to conquer any meal.', value: 2 },
                { label: '"Walking on Sunshine": Feeling bright and cheery, craving some sunny-side-up eats.', value: 3 },
                { label: '"I Will Survive": Totally feeling like a culinary survivor, ready to tackle any mealtime challenge with gusto.', value: 4 }
            ]
        },
    ],
    answers: [],
    recipes: [],
    foundRecipes: [],
    loadRecipies: async () => {
        try {
            const response = await fetch(`https://api.edamam.com/search?q=${'any'}&app_id=${VITE_EDAMAM_APP_ID}&app_key=${VITE_EDAMAM_APP_KEY}&to=100`);
            const hits = (await response.json()).hits;
            const recipes = hits.map(h => h.recipe);
            set((state) => ({ ...state, recipes: recipes }));
        } catch {
            set((state) => ({ ...state, recipes: [] }));
        }

    },
    handleAnswerChange: (questionId, index) => {
        set((state) => ({ answers: { ...state.answers, [questionId]: index } }));
    },
    validate: (state) => {
        for (let i = 0; i < 10; i++) {
            if (state.answers[i] === undefined || (state.answers[i] > 3 && state.answers[i] < 0)) {
                return false;
            }
        }
        return true;
    },
    matchAnswersAndFindRecipes: (state) => {
        const answersMatrix = [{
            answers: [1, 1, 1, 1, 1],
            recipes: [0, 1, 2, 4, 8, 16, 32, 64]
        }, {}];

        try {
            const answers = Object.values(state.answers);
            const result = answersMatrix.find(lb => {
                if (lb.answers?.length !== answers?.length) return false;
                for (let i = 0; i < lb.answers.length; i++) {
                    if (lb.answers[i] !== answers[i]) return false;
                }
                return lb.recipes;
            });

            if (result !== undefined) {
                const recipes = result?.recipes?.map(rid => state.recipes[rid])
                set(() => ({ foundRecipes: recipes }))
            } else {
                set(() => ({ foundRecipes: [] }))
            }
        } catch (error) {
            console.error(error)
            set(() => ({ foundRecipes: [], answers: [], }))
        }

    },
    searchQuestion: (state) => {
        console.log(state)
    },
}))