import { ref } from 'vue';
import { nameRecords } from '../data';
import { useFilters } from './filters';

const { filters } = useFilters();

const names = ref<string[]>([]);

function findNames() {
    names.value = nameRecords
        .filter((r) => r.gender === filters.gender)
        .filter((r) => r.popularity === filters.popularity)
        .filter((r) =>
            filters.length === 'all' ? true : r.length === filters.length
        )
        .map((r) => r.name);
}

function removeName(index: number) {
    names.value.splice(index, 1);
}

export const useNames = () => {
    return { names, findNames, removeName };
};
