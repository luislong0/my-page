import { create } from 'zustand'

export interface NavbarState {
  isSelected: number

  save: (index: number) => void
}

// get: buscar informações que estão salvas no estado
// set: atualizar informações de um estado
export const useStore = create<NavbarState>((set) => {
  return {
    isSelected: 0,

    save: (index: number) => {
      set({ isSelected: index })
    },
  }
})
