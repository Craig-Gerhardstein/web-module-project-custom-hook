import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (initialValues) => {
    const [values, setValues] = useLocalStorage("dark", initialValues)
    return [values, setValues]
}