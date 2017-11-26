<template>
    <div>
        <h1 class="title">Search</h1>
        <div class="searchBar">
            <input type="text" v-model="searchText" placeholder="Enter Symptoms separated by space" />
            <button class="button care-stack-button" @click="searchDb">Search</button>
        </div>
        <div v-if="displayResults">
            <div v-for="result in searchResults" class="result">
                <h3>Consulting Doctor: {{result.Name}}</h3>
                <p>Location: {{result.Address}}</h3>
                <p>Diagnosis: {{result.Diagonosis}}</p>
                <button class="button care-stack-button" @click="contactDoctor(result.email)">Contact</button>
            </div>
        </div>
    </div>
</template>
<script>
    import fapp from "../firebase";

    export default {
        name: "search",
        data(){
            return {
                searchText: "",
                displayResults: false
            }
        },
        computed:{
            searchResults: function(){
                return this.$store.getters.getSearchResults;
            },
            doctorMail: function(){
                return this.$store.getters.getDoctorEmail;
            }
        },
        methods: {
            searchDb(){
                var data = {
                    search: this.searchText
                };
                this.$store.dispatch('searchSymptoms', data);
                this.displayResults = true;
            },
            contactDoctor(email){
                var db = fapp.database();
                var baseRef = db.ref();
                baseRef.child(`rooms/${email.split('@')[0]}`).push({name: `${email.split('@')[0]}-${this.doctorMail.split('@')[0]}`});
                baseRef.child(`rooms/${this.doctorMail.split('@')[0]}`).push({name: `${email.split('@')[0]}-${this.doctorMail.split('@')[0]}`});
                this.$router.push(`/doctor/chat-rooms/${email.split('@')[0]}-${this.doctorMail.split('@')[0]}`);
            }
        }
    }
</script>
<style scoped>
    .searchBar{
        display: flex;
    }
    .result{
        text-align: left;
        border-bottom: 1px solid gray;
        padding-left: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .result>h3{
        font-family: 'Dosis', sans-serif;
    }
    .result>p{
        font-family: 'Muli', sans-serif;
    }
</style>