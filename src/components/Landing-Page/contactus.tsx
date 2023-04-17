import HomeHeader from "./header";
import ContactUsForm from "./contactus-form";

function ContactUs({ navigate }: any) {
   
    return (
        <>
            <ContactUsForm navigate={navigate} />
        </>

    )
}

export default ContactUs;