import {create} from 'zustand'

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
