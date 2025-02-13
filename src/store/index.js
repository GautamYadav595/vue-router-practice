import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        user: null,
        
    },
    mutations: {
        SET_USER(state, user){
            state.user = user
        },
        
        LOGOUT(state) {
            state.user = null;
        }
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post('https://dummyjson.com/auth/login', credentials);
                
                    commit('SET_USER', response.data);
                
                return { success: true }; 
            } catch (error) {
                return { 
                    success: false, 
                    message: error.response?.data?.message || 'Invalid credentials'
                };
            }
        },
        logout({ commit }) {
            commit('LOGOUT');
        }
    },
    getters: {
        isAuthenticated: state => !!state.token,
        user: state => state.user
    }
});
