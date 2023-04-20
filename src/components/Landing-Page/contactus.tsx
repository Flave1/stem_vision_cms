import HomeHeader from "./header";
import ContactUsForm from "./contactus-form";
import HomeFooter from "./footer";

function ContactUs({ navigate }: any) {
   
    return (
        <>
         <HomeHeader />
            <ContactUsForm navigate={navigate} />
         <HomeFooter />
        </>

    )
}

export default ContactUs;