import { CONTACTS } from "./dataTypes";
import { /* STORE, UPDATE, */ DELETE } from "./modelActionTypes";

//let idCounter = 100;

export const deleteContact = (contact) => ({
    type: DELETE,
    dataTppe: CONTACTS,
    payload: contact.id
})


