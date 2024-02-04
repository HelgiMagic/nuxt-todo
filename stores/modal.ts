type State = {
  active: 'newTask' | 'editTask' | null;
  elementId: number;
}

const useModalStore = defineStore('modal', {
  state: (): State => ({ active: null, elementId: 0 }),
  actions: {
    setActive(name: State['active']) {
      this.active = name;
    },
    setActiveElement(id: State['elementId']) {
      this.elementId = id;
    },
  },
});

export default useModalStore;