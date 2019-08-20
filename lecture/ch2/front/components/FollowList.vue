<template>
		<v-list>
			<v-col v-for="l in users" :key="l.id" cols="12" md="4" style="display: inline-block">
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
	props: {
		users: {
			type: Array,
			required: true,
		},
		remove: {
			type: String,
			required: true,
		},
	},
	methods: {
		onRemoveUser(id, remove) {
			console.log('this.remove', this.remove);	
			if (this.remove === 'removeFollower') {
				this.$store.dispatch('users/removeFollower', { id	});
			};
			if (this.remove === 'removeFollowing') {
				this.$store.dispatch('users/removeFollowing', { id	});
			};
		},
	},	
}
</script>

<style scoped>

</style>