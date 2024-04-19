"use client";



import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import styles from './search.module.css'
import { MdSearch } from 'react-icons/md'
import { useDebouncedCallback } from 'use-debounce';

const Search = ({placeholder}) => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter();
    
    const handleInputChange = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams);
        (e.target.value && e.target.value.length > 2) ? params.set('q', e.target.value) : params.delete('q');    
        replace(`${pathName}?${params}`);
    }, 300);  
    return(
        <div className={styles.container}>
            <MdSearch />
            <input type="text" placeholder={placeholder} className={styles.input} onChange={handleInputChange} />
        </div>

    )
}

export default Search;