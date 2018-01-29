<template>
    <div class="container">
        <form>
            <div class="row justify-content-center">
                <div class="col-sm-10 col-md-8">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age">
                    </div>

                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-10 col-md-8 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"></textarea>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-10 col-md-8">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-10 col-md-8 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female
                    </label>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-10 col-md-8 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority"
                            :selected="priority == 'Medium'">
                        <option v-for="priority in priorities">{{priority}}</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-10 col-md-8 from-group">
                    <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-sm-10 col-md-8">
                    <button
                        class="btn btn-primary"
                        @click.prevent="submitted">Submit!</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row justify-content-center" v-if="isSubmitted">
            <div class="col-sm-10 col-md-8">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            <h4>Your Data</h4>
                        </div>
                        <div class="card-text">
                            <p>Email: <strong>{{userData.email}}</strong></p>
                            <p>Password: <strong>{{userData.password}}</strong></p>
                            <p>Age: <strong>{{userData.age}}</strong></p>
                            <p style="white-space: pre">Message:<br><strong>{{message}}</strong></p>
                            <p>Send Mail?</p>
                            <ul v-if="sendMail.length > 0">
                                <li v-for="item in sendMail"><strong>{{item}}</strong></li>
                            </ul>
                            <p>Gender: <strong>{{gender}}</strong></p>
                            <p>Priority: <strong>{{selectedPriority}}</strong></p>
                            <p>Switched: <strong>{{ dataSwitch }}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Switch from './components/Switch.vue';

    export default {
        data() {
            return {
                userData: {
                    email: '',
                    password: '',
                    age: 25,
                },
                message: 'Your message here...',
                sendMail: [],
                gender: '',
                priorities: [
                    'High', 'Medium', 'Low'
                ],
                selectedPriority: 'High',
                dataSwitch: false,
                isSubmitted: false
            }
        },
        components: {
            appSwitch: Switch
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            }
        }
    }
</script>

<style>

</style>
