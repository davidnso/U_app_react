import {AsyncStorage} from 'react-native'

export default class Driver{

    async addContactToStore(contacts){
    
    }
    async addBulkContactsToStore(contacts){
       try{
        contacts.forEach(contact => {
            //TODO: Create function to parse unnecessary contact information from incoming objects.
            let sanitizedObject = JSON.stringify(contact)
            AsyncStorage.setItem(contact.rawContactId, sanitizedObject, (error)=>{
                console.log('Error on bulk add:' + error);s
            })
            console.log('contacts successfully YEA\'D BABY')
        });
       }
       catch(error){
        console.log(error);
       }
    }
    async RemoveContactFromStore(contacts){

    }
   async BulkRemoveContactsFromStore(contacts){

    }
    async getContacts(key){
        try{
           let payload = await AsyncStorage.getItem(key, (error,response)=>{
                error? console.log(error):console.log(response);
            })
            return JSON.parse(payload);
        }catch(err){
            console.log(err)
        }
    }
    //DO NOT USE EXCEPT IN DEVELOPMENT, NOT ADVISABLE IN PRODUCTION...SERIOUSLY. DON'T DO IT.
   async clearAllContacts(){
        await AsyncStorage.clear()
    }
}


