'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loading from "@/app/category/loading";

export default function Category() {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (pathname === '/category') {
            router.push('/categories');
        }
    }, []);

    return (
        <main>
            <Loading />
        </main>
    );
}
