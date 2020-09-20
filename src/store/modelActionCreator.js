import { CONTACTS } from "./dataTypes";
import { /* STORE, UPDATE, */ DELETE } from "./modelActionTypes";

export const deleteContact = (contact) => ({
    type: DELETE,
    dataType: CONTACTS,
    payload: contact.id
})


