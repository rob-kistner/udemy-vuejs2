<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change My Name</button>
		<p>The name is {{name}}</p>
		<p>Age is {{age}}</p>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<!-- listens to nameWasReset event from child -->
				<app-user-detail
					:userName="name"
					@nameWasReset="name = $event"
					:resetFn="resetName"
					:userAge="age" />
			</div>
			<div class="col-xs-12 col-sm-6">
				<app-user-edit
					:userAge="age" 
					@ageWasEdited="age = $event" />
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data: function() {
            return {
                name: 'Max',
				age: 27
            }
        },
        methods: {
            changeName() {
                this.name = 'Anna';
            },
			resetName() {
				this.name = 'Max';
			}

        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
