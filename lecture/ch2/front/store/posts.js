export const state = () => ({
	name: 'posts',
	mainPosts: [],
});

export const mutations = {
	addMainPost(state, payload) {
		state.mainPosts.unshift(payload);
	},
	removeMainPost(state, payload) {
		const index = state.mainPosts.findIndex(v => v.id === payload.id);
		state.mainPosts.splice(index, 1);
	},
	addComment(state, payload) {
		const index = state.mainPosts.findIndex( v=> v.id === payload.postId);
		state.mainPosts[index]. Comments.unshift(payload);
	},
};

export const actions = {
	add({ commit }, payload) {
		// 서버에 게시글 등록요청 보냄
		commit('addMainPost', payload);	
	},
	remove({ commit }, payload) {
		commit('removeMainPost', payload);
	},
	addComment({ commit }, payload) {
		commit('addComment', payload);
	}
}