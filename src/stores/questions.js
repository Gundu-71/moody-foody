import { create } from 'zustand'

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
    recipes: [
        {
            'id': 1,
            'uri': 'http://www.edamam.com/ontologies/edamam.owl#recipe_1f0bce8a9dd6a301a4c661b3e66ca8cd',
            'label': 'Fish Tacos With Sweet Curried Broccoli Sla',
            'image': 'https://edamam-product-images.s3.amazonaws.com/web-img/063/063054203e49bd012fbaa81046846b9b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCVH1ZtcPmNV4zfbT5HQV48fQAZyA%2FWAqFKgLWhp8YvogIhAPVQir3lWMFV3UKNql49zrv605HmKdiT0dIguh2kF4J%2FKsEFCLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxYU144B2%2FqycNw9uYqlQVNJBAwk2h927ocqOaNReY87mlP7NsdvIFCp%2F2x9XpcKkIc9vUP5faOrnHCes8tI6ch7UBkrAMgGQboHcP4UvsvcAKpOMRdf3eyo2IqWPNWBs%2BNyjpsgSNKaF1eEbm6HTllKnDQ40dB3rICdhMwMtFNoREqbNJiIB8UX9TDMCyrsuRKZpBSy%2FDqwVwBludWa8evzjQB5aaTh6E4tbPs5zwToOoSqnRTDTgZC7AhZ8i48q7CeyDr48rTk9%2BP5bgNV1TYyrSUATd3tgx5Iu8l50rRmiETvecPmF6e5upQNaurG3V5VdPewJ%2FmuWmXWdHtYkwnRDLvmvAz4jyeMHZUwyL6asUVjXocy5xkwT9Tn7nCPrNG%2BP3PWL3LYdAJcivYcHmhEPjkOteI6tmeCoGRRyjvg5sTRjtuKgQ9DR8idD%2BSgwMbdBy5dlzGZc8EUQLFVB30roC5PlPkDu%2FS9WLZkvtMF%2BfJ%2BEjkxxkF92qrjxejuxgUCi3ge%2BF9aHMcXLhpIyMleW3nHYmhM9aId7EDnvn%2BZEjbEPKBdEo%2BXMbYe6M8wsFgRpIGEsxiRPlniCBz5t8TuAFJV48xTl4dr%2Bs723A%2BSBGDWMjhFpkq5HqN87Maz7MCHLPnLSD1emi3mVVpbkdlvEABhCWRqesV0v6%2Fi8WAz%2BKL8KiUOqaeKoCNrr0H9FrgrbMr4koAnlDLRyw29vnavfw1QJwgWaLquDjeHxIGCETOksyMswAUuAED1PdAUlONT6FFbPcqk0vmdkwCYXJPyc4SDdRfM5u5IGxEP7T3vBMVU8qtDseqRDGvlPHT0qyYHQRqvF6hprwADQg5pksPz1CKbi0RoSql3zGcX7f1mUiY9a2Quhp60UyK%2ForDk7jl2qFmMOqt%2BbAGOrABmkC40dG5w0pPrLzrA5uATDtp4EFzv8s0LwGgKlusAFussPoqREWaksO1mMUAXRzvVwOAOrk2kY9%2BVLwGQltbkm2%2BCDwydjjgvbRmTxPaGYQorBqabTUtlbVJeCpQUmYrlNLrQ5od2EW7p5AXcxQlSVh1MnVdA1y7V1hznB%2BjzgR9VODYu2goJhf6vObu96KeVvsn%2FkmFS%2BUy0HlElQjULsakV67xPiCLeXMnoIDj0rI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240416T112531Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFORTYXGA5%2F20240416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ba0d4de3aab35cfde9a1b496797659d8208d997388e8137998e94c4395617051',
            'source': 'zagleft.com',
            'url': 'http://zagleft.com/recipe/fish-tacos-with-curried-broccoli-slaw-for-one/',
            'shareAs': 'http://www.edamam.com/recipe/fish-tacos-with-sweet-curried-broccoli-sla-1f0bce8a9dd6a301a4c661b3e66ca8cd/sla',
        },
        {
            'id': 2,
            'uri': 'http://www.edamam.com/ontologies/edamam.owl#recipe_8092164669fd9111dd78351738fc6a91',
            'label': 'Carolina Style BBQ Pork with Pineapple Sla',
            'image': 'https://edamam-product-images.s3.amazonaws.com/web-img/063/063054203e49bd012fbaa81046846b9b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCVH1ZtcPmNV4zfbT5HQV48fQAZyA%2FWAqFKgLWhp8YvogIhAPVQir3lWMFV3UKNql49zrv605HmKdiT0dIguh2kF4J%2FKsEFCLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxYU144B2%2FqycNw9uYqlQVNJBAwk2h927ocqOaNReY87mlP7NsdvIFCp%2F2x9XpcKkIc9vUP5faOrnHCes8tI6ch7UBkrAMgGQboHcP4UvsvcAKpOMRdf3eyo2IqWPNWBs%2BNyjpsgSNKaF1eEbm6HTllKnDQ40dB3rICdhMwMtFNoREqbNJiIB8UX9TDMCyrsuRKZpBSy%2FDqwVwBludWa8evzjQB5aaTh6E4tbPs5zwToOoSqnRTDTgZC7AhZ8i48q7CeyDr48rTk9%2BP5bgNV1TYyrSUATd3tgx5Iu8l50rRmiETvecPmF6e5upQNaurG3V5VdPewJ%2FmuWmXWdHtYkwnRDLvmvAz4jyeMHZUwyL6asUVjXocy5xkwT9Tn7nCPrNG%2BP3PWL3LYdAJcivYcHmhEPjkOteI6tmeCoGRRyjvg5sTRjtuKgQ9DR8idD%2BSgwMbdBy5dlzGZc8EUQLFVB30roC5PlPkDu%2FS9WLZkvtMF%2BfJ%2BEjkxxkF92qrjxejuxgUCi3ge%2BF9aHMcXLhpIyMleW3nHYmhM9aId7EDnvn%2BZEjbEPKBdEo%2BXMbYe6M8wsFgRpIGEsxiRPlniCBz5t8TuAFJV48xTl4dr%2Bs723A%2BSBGDWMjhFpkq5HqN87Maz7MCHLPnLSD1emi3mVVpbkdlvEABhCWRqesV0v6%2Fi8WAz%2BKL8KiUOqaeKoCNrr0H9FrgrbMr4koAnlDLRyw29vnavfw1QJwgWaLquDjeHxIGCETOksyMswAUuAED1PdAUlONT6FFbPcqk0vmdkwCYXJPyc4SDdRfM5u5IGxEP7T3vBMVU8qtDseqRDGvlPHT0qyYHQRqvF6hprwADQg5pksPz1CKbi0RoSql3zGcX7f1mUiY9a2Quhp60UyK%2ForDk7jl2qFmMOqt%2BbAGOrABmkC40dG5w0pPrLzrA5uATDtp4EFzv8s0LwGgKlusAFussPoqREWaksO1mMUAXRzvVwOAOrk2kY9%2BVLwGQltbkm2%2BCDwydjjgvbRmTxPaGYQorBqabTUtlbVJeCpQUmYrlNLrQ5od2EW7p5AXcxQlSVh1MnVdA1y7V1hznB%2BjzgR9VODYu2goJhf6vObu96KeVvsn%2FkmFS%2BUy0HlElQjULsakV67xPiCLeXMnoIDj0rI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240416T112531Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFORTYXGA5%2F20240416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ba0d4de3aab35cfde9a1b496797659d8208d997388e8137998e94c4395617051',
            'source': 'jennsfarmtable.com',
            'url': 'http://jennsfarmtable.com/2016/06/carolina-style-bbq-pork-pineapple-slaw/',
            'shareAs': 'http://www.edamam.com/recipe/carolina-style-bbq-pork-with-pineapple-sla-8092164669fd9111dd78351738fc6a91/sla',
        }
    ],
    foundRecipes: [],
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
            recipes: [0, 1]
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
            }else {
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