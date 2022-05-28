import { CreateContact } from "components/CreateContact/CreateContact.jsx";
import { ContactList } from "components/ContactList/ContactList.jsx";
import { Filter } from "components/Filter/Filter.jsx";

export default function ContactsPage() {
    return (
        <div>
            <h1>Phonebook</h1>
            <CreateContact />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
};