import create from 'zustand';

export const userStore = create(set => ({
    
    storeUser: (user) => set({ user: user}),
    removeUser: () => set({ user: null }),
    loadingUser: true,
    setLoadingUser: (loadingUser) => set({ loadingUser: loadingUser})
  }))

