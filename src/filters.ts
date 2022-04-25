import { reactive } from 'vue';
import { Gender, Length, Popularity } from './data';

export type State = {
    gender: Gender;
    popularity: Popularity;
    length: Length;
};

const state = reactive<State>({
    gender: 'boy',
    popularity: 'trendy',
    length: 'all',
});

export const genderOptions: Gender[] = ['boy', 'girl', 'unisex'];
export const popularityOptions: Popularity[] = ['trendy', 'unique'];
export const lengthOptions: Length[] = ['short', 'long', 'all'];

export const useFilters = () => {
    return { state };
};
