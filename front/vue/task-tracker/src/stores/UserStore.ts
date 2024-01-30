import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
    state: (): { users: any[] } => ({
        users: []
    }),
    actions: {
        add(u) {
            this.users.push(u)
        },

    },
    getters: {

    }
});