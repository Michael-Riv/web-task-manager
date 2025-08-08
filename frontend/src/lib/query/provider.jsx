'use client';


import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';

export default function ReactQueryProvider({children}){

    const [client ]=useState(()=> new QueryClient({
        defaultOptions:{
            queries:{
                staleTime: 1000*20,
                gcTime: 1000*60*60,
                refetchOnWindowFocus:false,
            },
        },
    }));
    const [persister] = useState(() => {
        if (typeof window === 'undefined') return null;
        const localStorageAsync = {
            getItem: (key) => Promise.resolve(window.localStorage.getItem(key)),
            setItem: (key, value) => {
                window.localStorage.setItem(key, value);
                return Promise.resolve();
        },
        removeItem: (key) => {
            window.localStorage.removeItem(key);
            return Promise.resolve();
        },
    };

        return createAsyncStoragePersister({
            storage: localStorageAsync,
            key: 'taskManager-query-cache',
            
        });
});

    if(!persister){//first render
        return <QueryClientProvider client={client}>{children}</QueryClientProvider>
    }
    return(                                                                 ///keep in cache for 24hrs max
        <PersistQueryClientProvider client={client} persistOptions={{persister, maxAge:1000*60*60*24}}>
            {children}
        </PersistQueryClientProvider>
    );
}
