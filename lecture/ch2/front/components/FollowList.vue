<template>
		<v-list>
			<v-col v-for="l in list" :key="l.id" cols="12" md="4" style="display: inline-block">
				<v-list-item>
					<v-list-item-avatar color="indigo">
						<span>{{l.nickname[0]}}</span>
					</v-list-item-avatar>
					<v-list-item-content>
							<v-list-item-title>{{l.nickname}}</v-list-item-title>
					</v-list-item-content>
					<v-list-item-action @click="onRemoveUser(l.id)">
						<v-icon>mdi-minus-circle-outline</v-icon>
					</v-list-item-action>
				</v-list-item>
			</v-col>
		</v-list>
</template>
<script>
export default {
	data() {
		return {

		};
	},
	computed: {
		list() {
			return this.$store.state.users.followerList;
		},
	},
	methods: {
		onRemoveUser(id) {
			console.log('nickname',id);	
			this.$store.dispatch('users/removeFollower', {
				id: id,
			});
		},
	}
	
}
</script>

<style scoped>

</style>