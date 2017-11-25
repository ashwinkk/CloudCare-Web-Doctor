<template>
    <div>
        <div>
            <img class="logo" src="../assets/images/cloudcareLogo.png" />
        </div>
        <google-sign-in @signedIn="getCredentials"></google-sign-in>
    </div>
</template>
<script>
    import GoogleSignInButton from '../components/GoogleSignInButton';
    
    export default {
        name: 'doctor-name',
        components: {
            'google-sign-in': GoogleSignInButton
        },
        watch:{
            actionCompleted: function(comepletedFetch){
                if(comepletedFetch && this.registered)
                    this.navigate('doctor/chat-rooms');
                else if(comepletedFetch && !this.registered){
                    // this.setStorage(googleUser);
                    console.log("signedIn");
                    // this.navigate('doctor-signup');
                }
            }
        },
        methods: {
            getCredentials(googleUser){
                this.isRegistered(googleUser);
            },
            isRegistered(googleUser){
                var options= {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        googleid: googleUser.w3.Eea
                    })
                },_this = this;
                fetch('http://20.20.4.84:3000/checkDoctorexists',options)
                .then(response=>{
                    _this.loader = true;
                    return response.json()
                })
                .then(data=>{
                    console.log(data);
                    this.registered = data.registered;
                    this.setStorage(googleUser);
                    this.actionCompleted = true;
                })
                .catch(err=>console.log(err));
            },
            setStorage(googleUser){
                localStorage.setItem('doctor-name',googleUser.w3.ig);
                localStorage.setItem('doctor-dp',googleUser.w3.Paa);
                localStorage.setItem('doctor-email',googleUser.w3.U3);
                localStorage.setItem('doctor-googleid',googleUser.w3.Eea);
            },
        }
    }
</script>
<style>
    .logo{
        width: 300px;
    }
</style>