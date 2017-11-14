<template>
    <div>
        <div>
            <div>
                <input type="text" placeholder="Age" v-model="userObject.age" />
            </div>
            <div>
                <label for="gender">Gender</label>
                <div id="gender">
                    <input id="male" type="radio" name="gender" value="male" v-model="userObject.gender" />
                    <label for="male">Male</label>
                    <input id="female" type="radio" name="gender" value="female" v-model="userObject.gender" />
                    <label for="female">Female</label>
                    <input id="others" type="radio" name="gender" value="others" v-model="userObject.gender" />
                    <label for="others">Others</label>
                </div>
            </div>
            <div>
                <textarea type="textarea" placeholder="Address" v-model="userObject.address"></textarea>
            </div>
            <div>
                <label>Blood Group</label>
                <div>
                    <select name="blood-group" v-model="userObject.bloodGroup">
                        <option value="">-select-</option>
                        <option value="O+ve">O positive</option>
                        <option value="O+ve">O negative</option>
                        <option value="O+ve">A positive</option>
                        <option value="O+ve">A negative</option>
                        <option value="O+ve">B positive</option>
                        <option value="O+ve">B negative</option>
                        <option value="O+ve">AB positive</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
            </div>
            <div>
                <div>
                    <input type="text" placeholder="Phone Number" v-model="userObject.phoneNumber" />
                </div>
                <p>We use this phone number to verfy your identity by sending an OTP</p>
            </div>
        </div>
        <div v-if="!loader">
            <button class="button" @click="signup">Submit</button>
        </div>
        <div v-else-if="!actionComplete">Loading....</div>
    </div>
</template>

<script>
    export default {
        name: 'signup',
        watch: {
            actionComplete: function(action){
                if(action){
                    this.$router.push('otp-verify');
                }
            }
        },
        computed: {
            actionComplete(){
                return this.$store.getters.isActionComplete;
            }
        },
        data(){
            return {
                userObject: {
                    age: "",
                    gender: "",
                    address: "",
                    bloodGroup: "",
                    phoneNumber: ""
                },
                loader: false
            }
        },
        methods: {
            signup(){
                this.userObject.name = localStorage.getItem('user-name');
                this.userObject.email = localStorage.getItem('user-email');
                this.userObject.photoUrl = localStorage.getItem('user-dp');
                this.userObject.googleid = localStorage.getItem('user-googleid');
                this.loader = true;
                this.$store.dispatch('register',this.userObject);
            }
        }
    }
</script>