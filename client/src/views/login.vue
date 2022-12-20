<template>
    <v-card width="500px" color="white" class="mx-auto mt-5">
        <v-card-title class="pt-8">
            <h1>登入</h1>    
        </v-card-title>
        <v-card-text>
           <v-from>
                <v-text-field
                label="帳號"
                prepend-icon="mdi-account-circle"
                v-model="useraccount"
                autofocus
                />
            </v-from> 

        </v-card-text>
        <v-card-actions class="pb-3">
            <v-btn color="primary" @click="login" class="mx-3">登入</v-btn>

        </v-card-actions>
    </v-card>

</template>


<script>
export default {

    data(){
        return{
            useraccount:'',
        }
    },
    methods:{
        login(){
            alert(this.useraccount)
        }
    }
}
</script>


<style>

.mx-auto {
    height: 5px;
}

</style>