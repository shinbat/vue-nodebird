<template>
	<div>
		<v-container>
			<v-card style="margin-bottom: 20px">
				<v-container>
					<v-subheader>내프로필</v-subheader>	
					<v-form v-model="valid" @submit.prevent="onChangeNickname"> 
						<v-text-field
							v-model="nickname"
							label="닉네임"
							:rules="nicknameRules"
							required
						/>
						<v-btn color="blue" type="submit">수정</v-btn>
					</v-form>
				</v-container>
			</v-card>
			<v-card style="margin-bottom: 20px">
				<v-container>
					<v-subheader>팔로잉</v-subheader>
					<follow-list :users="followingList" :remove="'removeFollowing'" />
				</v-container>
			</v-card>
			<v-card style="margin-bottom: 20px">
				<v-container>
					<v-subheader>팔로워</v-subheader>
					<follow-list :users="followerList" :remove="'removeFollower'" />
				</v-container>
			</v-card>
		</v-container>
	</div>	
</template>

<script> 
import FollowList from '~/components/FollowList';

export default {
	components: {
		FollowList,
	},	
	// layout: 'admin',
	data()	{
		return {
			valid: false,
			nickname: '',
			nicknameRules: [
				v => !!v || '닉네임을 입력하세요'	,
			],
		};
	},
	computed: {
		followingList() {
			return this.$store.state.users.followingList;
		},
		followerList() {
			return this.$store.state.users.followerList;
		},
	},
	methods: {
		onChangeNickname() {
			this.$store.dispatch('users/changeNickname', {
				nickname: this.nickname,
			})
		}
	},
	head() {
		return {
			title: '프로필',
		}
	},
}
</script>
<style>

</style>