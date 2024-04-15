import { create } from 'zustand'

const { VITE_EDAMAM_APP_ID, VITE_EDAMAM_APP_KEY } = import.meta.env;

export const useRecipeStore = create((set, get) => ({
    filters: [],
    addFilter: (query) => {
        const trimedQuery = query.trim();
        if (trimedQuery !== '') {
            set((state) => ({ filters: [...state.filters, trimedQuery] }));
            get().searchRecipe(get().filters.join(' '))
        }
    },
    deleteFilter: (index) => {
        set((state) => ({ ...state, filters: state.filters.filter((_, i) => i !== index) }));
        get().searchRecipe(get().filters.join(' '));
    },
    searchRecipe: async (query) => {
        try {
            const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${VITE_EDAMAM_APP_ID}&app_key=${VITE_EDAMAM_APP_KEY}`);
            const json = await response.json();
            set((state) => ({ ...state, recipes: json.hits }));
        } catch (error) {
            console.error(error);
            set((state) => ({ ...state, recipes: [], filters: [] }));
        }
    }
}))
