import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter',{
    state:()=>{
        return{
            count:0,
        };
    },
    actions:{
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        }
    },
    getters:{
        doubleCount(state){
            return state.count * 2;
        },
    },
    persist:true,//持久化
});