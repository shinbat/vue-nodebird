export const state = () => ({
	me: null,
	followerList: [
		{nickname: '제로초1', id: 1},
		{nickname: '네로1', id: 2},
		{nickname: '히어로1', id: 3},
	],
	followingList: [
		{nickname: '제로초2', id: 4},
		{nickname: '네로2', id: 5},
		{nickname: '히어로2', id: 6},
	],
});

export const mutations = {
	setMe(state, payload) {
		state.me = payload;
	},
	changeNickname(state, payload) {
		state.me.nickname = payload.nickname;
	},
	setFollowerList(state, payload) {
		state.followerList = payload;
	},
	setFollowingList(state, payload) {
		state.followingList = payload;
	},

	addFollower(state, payload) {
		state.followerList.unshift(payload);
	},
	removeFollower(state, payload) {
		const index = state.followerList.findIndex(v => v.id === payload.id);
		state.followerList.splice(index, 1);
	},
};

export const actions = {
	signUp({ commit, dispatch, state, rootState, getters, rootGetters }, payload) {
		commit('setMe', payload);
	},
	logIn({ commit }, payload) {
		commit('setMe', payload);
	},
	logOut({ commit }) {
		commit('setMe', null);
	},
	changeNickname({ commit }, payload) {
		commit('changeNickname', payload);
	},

	addFollower({ commit }, payload) {
		commit('addFollower', payload);
	},
	removeFollower({ commit }, payload) {
		commit('removeFollower', payload);
	}
}