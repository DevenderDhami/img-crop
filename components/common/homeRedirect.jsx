"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const HomeRedirect = () => {
    const navigate = useRouter();

    useEffect(() => {
        navigate.push('/');
    }, [navigate]);

    return null; // or you can show a loading indicator if needed
}

export default HomeRedirect;
