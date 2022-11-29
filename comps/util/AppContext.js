import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const AppContext = createContext();

export default AppContext;

export function AppWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    // load the data async
    axios
      .get("http://localhost:1337/api/contact")
      .then((res) => {
        setContacts(res.data.data.attributes.address);
        setEmail(res.data.data.attributes.email);
        setPhone(res.data.data.attributes.phone_number);
        setAddress(res.data.data.attributes.address);
      })
      .catch((err) => console.log(err));
  }, []);

  let contacts_deets = [
    {
      phone: phone,
      email: email,
      address: address,
    },
  ];

  return (
    <AppContext.Provider value={contacts_deets}>{children}</AppContext.Provider>
  );
}
