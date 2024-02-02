type State = {
  active: boolean;
}

const useModalStore = defineStore('modal', {
  state: (): State => ({ active: true }),
  actions: {
    setActive(name: boolean) {
      this.active = name;
    },
  },
});

export default useModalStore;