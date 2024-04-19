'use client'

import styles from './pagination.module.css';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const Pagination = ( {count} ) => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();

    const page = searchParams.get('page') || 1;

    const params = new URLSearchParams(searchParams)
    const itemsPerPage = 4;
    console.log(count, itemsPerPage, page)
    const hasPrev = itemsPerPage* (parseInt(page)-1)>0;
    const hasNext = itemsPerPage* (parseInt(page)-1) + itemsPerPage < count ;
    console.log(hasNext, hasPrev)
    const handlePageClick = (action) => {
        console.log("click", action)
        if (action === "prev") {
            params.set('page', parseInt(page) - 1);
        } else if (action === "next") {
            params.set('page', parseInt(page) + 1);
        }
        
        replace(`${pathname}?${params}`);
    }
    return (
        <div className={styles.container}>
            <button className={styles.button} disabled={!hasPrev} onClick={() => handlePageClick('prev')}>Previous</button>
            <button className={styles.button} disabled={!hasNext} onClick={() => handlePageClick('next')}>Next</button>
        </div>
    )
}

export default Pagination;