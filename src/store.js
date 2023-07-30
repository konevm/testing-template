import { makeAutoObservable, runInAction } from "mobx";

class Store {
  tasks = [];
  constructor() {
    makeAutoObservable(this);
  }

  get tasksData() {
    return this.tasks;
  }

  setTaskData(tasks) {
    runInAction(() => {
      this.tasks = tasks;
    });
  }
}

export const tasksStore = new Store();
