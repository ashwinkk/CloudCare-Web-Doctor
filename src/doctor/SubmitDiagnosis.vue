<template>
    <div>
        <h1 class="title">Submit Diagnosis</h1>
        <div>
            <div>
                <label for="adhar">Adhar Card Number</label>
                <input type="adhar no" v-model="adharno" />
            </div>
            <div>
                <button class="button care-stack-button">Request</button>
            </div>
        </div>
        <div>
            <div>
                <label for="diagnosis-info">Diagnosis</label>
                <input type="text" id="diagnosis-info" v-model="diagnosisText" />
            </div>
            <div>
                <label for="symptoms">Symptoms</label>
                <div>
                    <div v-for="sym in selectedSymptom">
                        <span>{{sym}}</span>
                        <span @click="deleteItem(sym)">x</span>
                    </div>
                </div>
                <input type="text" v-model="symptomSearch" id="symptoms" />
                <ul v-if="symptomSearch.length>2">
                    <li v-for="symptom in symptomList.filter(sym=>sym.indexOf(symptomSearch)!=-1)" @click="addSymptom(symptom)">
                        {{symptom}}
                    </li>
                </ul>
                <div>
                    <button class="button care-stack-button">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "submit-diagnosis",
        data(){
            return {
                symptomList: [],
                diagnosisText: "",
                selectedSymptom: [],
                symptomSearch: "",
                adharno: ""
            }
        },
        created(){
            this.fetchSymptoms();
        },
        methods: {
            fetchSymptoms(){
                var _this = this;
                fetch('/static/symptoms.json')
                .then(response=>response.json())
                .then(data=> {
                    console.log(data.length);
                    _this.symptomList = data;
                });
            },
            addSymptom(symptom){
                this.selectedSymptom = this.selectedSymptom.concat(symptom);
                this.symptomSearch = "";
            },
            deleteItem(item){
                var index = this.selectedSymptom.indexOf(item);
                this.selectedSymptom.splice(index,1);
            }
        }
    }
</script>