import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export default function usePersistedState<T>(key: string, inicialState: T): Response<T> {
	const [state, setState] = useState(() => {
		const storageValue = localStorage.getItem(key);
		if (storageValue) {
			return JSON.parse(storageValue);
		} else {
			return inicialState;
		}
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
}
