import { useState, useEffect, useCallback } from 'react';

export function useApi(initialUrl, initialOptions = {}) {
    const [url, setUrl] = useState(initialUrl);
    const [options, setOptions] = useState(initialOptions);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (signal) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url, { ...options, signal });
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setData(data);
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError(err);
            }
        } finally {
            setLoading(false);
        }
    }, [url, options]);

    useEffect(() => {
        if (url) {
            const abortController = new AbortController();
            const signal = abortController.signal;

            fetchData(signal);

            return () => {
                abortController.abort();
            };
        }
    }, [url, options, fetchData]);

    return { data, loading, error, setUrl, setOptions };

};