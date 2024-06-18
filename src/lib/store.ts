import {create} from 'zustand'
import {useEffect} from "react";

interface AppStore {
	breadcrumbs: string[]
	setBreadcrumbs: (breadcrumbs: string[]) => void
}

export const useAppStore = create<AppStore>((set) => ({
	breadcrumbs: [],
	setBreadcrumbs: (crumbs: string[]) => set(() => ({
		breadcrumbs: crumbs
	}))
}))


export const useSetBreadcrumbs = (crumbs: string[]) => {
	const set = useAppStore(state => state.setBreadcrumbs)
	useEffect(() => {
		set(crumbs)
	}, [])
}
