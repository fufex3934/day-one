import { getContacts } from "../lib/actions";
import { ContactFormUpdate } from "../components/ContactFormUpdate";
const ContactsPage = async () => {
  const contacts = await getContacts();
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">All Contacts</h1>
      {contacts.length === 0 && <p>No Contacts Yet.</p>}
      <ul className="space-y-4">
        {contacts.map((contact) =>{
         
          return <li key={contact.id} >
          
          <div className="flex gap-2">
              {/* Delete and Update Buttons */}
              <ContactFormUpdate contact={contact} />
            </div>
          
        </li>
        })}
      </ul>
    </div>
  );
};

export default ContactsPage;
