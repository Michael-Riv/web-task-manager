
const BASE_URL=process.env.NEXT_PUBLIC_API_URL;

export async function api(path, options={}){
    const res=await fetch(BASE_URL+path, {
        method: options.method || 'GET', //default to GET
        headers:{
            'Content-Type':'application/json',
            ...(options.headers || {})
        },
        body: options.body? JSON.stringify(options.body) :undefined
    });

    if(!res.ok){
        throw new Error(`error ${res.status }:${res.statusText}` );
    }

    return res.json();

}


