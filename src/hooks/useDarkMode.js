import useLocalStorage from './useLocalStorage';

export  const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('dark-mode_toggle', initialValue)
     return [ someValue, setSomeValue]
};