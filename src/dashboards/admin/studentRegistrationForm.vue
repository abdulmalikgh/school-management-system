<template>
    <v-content>
        <v-card width="700" class="mx-auto mt-5 px-5 pb-4  py-5">
        <v-card-title>
            <h1 class="display-2"> student Registration Form</h1>
        </v-card-title>
        <v-divider></v-divider>

        <card-text>
            <v-form>
                <v-text-field type="text"
                 label="First Name"
                 :rules=" [v => !!v || 'First name is required']" required/>
                <v-text-field type="text"
                 label="Middle Name" />
                <v-text-field type="text" 
                 label="Last Name" 
                 :rules=" [v => !!v || 'Last name is required']" required/>
                <v-text-field type="date"
                 label="Date of Birth" 
                 :rules=" [v => !!v || 'Date of Birth is required']" required/>
                <v-text-field type="text"
                 label="Program" 
                 :rules=" [v => !!v || 'Program is required']" required/>
                  <v-text-field type="text"
                 label="House" 
                 :rules=" [v => !!v || 'House is required']" required/>
                  <v-text-field type="datae"
                 label="starting Date" 
                 :rules=" [v => !!v || 'starting Date is required']" required/>
                  <v-text-field type="text"
                 label="Day/Boarding" 
                 :rules=" [v => !!v || 'Day/Boarding is required']" required/>
            </v-form>
            <v-card-action>
                <v-spacer></v-spacer>
                <v-btn color="success" right> Register student</v-btn>
            </v-card-action>
        </card-text>
    </v-card>
    </v-content>
</template>
<script>
export default {
    name:'teachersRegistrationForm',
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>

</style>