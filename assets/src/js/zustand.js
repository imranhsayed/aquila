import { persist } from 'zustand/middleware';
import create from 'zustand/vanilla';

const stores = [];
const zustand = {
	persist,
	create,
	stores,
};

window.zustand = zustand;
