import React from "react";
import '../App.css';
import { Row,Col } from "react-bootstrap";
import Cover from "../asset/img/Group 4858.png";
import NewNav from "./components/RepNav";
import Footer from "./components/RepFooter";

function PrivacyPolicy() {
  return (
    <>
    <div className="container">
        <Col className="content">
            <NewNav activepath="/privacyp" />
            <Row style={{justifyContent:'center'}}>
              {/* Content */}
              <div className="container">
                <div className="row">
                    <div className="position-relative">
                        <img src={Cover} alt="" className="img-fluid" />
                        <h3 className="position-absolute image-centered-text">Privacy Policy</h3>
                    </div>
                </div>
                <section className="bg-light p-3 mb-5 mt-4">

                            <div className="row ">
                        <div className="col-md-12">
                            <h5>Privacy Policy</h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            When you use Report Waste services, you trust us with your information. This Privacy Policy is meant to help you understand what 
                            data we collect, why we collect it, and what we do with it. This is important; we hope you will take time to read it carefully. 
                            And remember, you can find controls to manage your information and protect your privacy and security at My Account.
                            </p>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            This Privacy Policy outlines our guidelines for the information Report Waste collects when You interact with Report Waste, 
                            such as when You visit our Website, when You use the products and services, when you contact our customer support (collectively “services“).
                            In accessing the Websites and using our Services You accept all the terms and conditions (Terms of use) of this Privacy Policy. 
                            You also agree that Report Waste may amend and/or revise this Privacy Policy at its discretion, and You agree to be bound by 
                            these revisions and amendments. If You do not agree with the terms and conditions of this Privacy Policy we request that You 
                            immediately cease using and accessing the services. 
  
                            </p>
                        </div>
                    </div>
                    <div className="mt-5"></div>


                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Information we collect</h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                                We collect information in the following ways:
                            </p>

                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            Information you give us. For example, you can use our services, Report Waste without an account, 
                            but we ask you to sign up for Report Waste account to enjoy all features there are. When you register, 
                            we’ll ask for personal information, like your first name, last name and email address, social media links 
                            to your profiles, birthday, language preference. If you want to take full advantage of the features we offer, 
                            we might also ask you to fill in other details in your account to create full profile, such as photo, telephone 
                            number, organizations you are part of, your preferences such as if you want to be part of cleaning events or 
                            organize cleaning event yourself. 

                            </p>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            Information we get from your use of our services. We collect information about the services that you use and 
                            how you use them. We collect this information no matter if you are registered user or use mobile app as an 
                            anonymous user. This information includes:
                            </p>
                        </div>
                    </div>


                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Device information</h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                                We collect device-specific information (such as your hardware model, 
                                operating system version, unique device identifiers, language). 
                                Device-level settings: Your device may have controls that determine what information we collect.
                                For example, you can modify location settings on your device.
                            </p>
                        </div>
                    </div>


                    <div className="mt-5"></div>


            <div className="row ">
                <div className="col-md-12">
                    <h5>Log information</h5>
                    <p className="text-dark" style={{fontSize: '13px;'}}>
                        When you use our services or view content provided by Google, 
                        we automatically collect and store certain information in server logs. 
                        This includes: details of how you used our service
                        device event information such as crashes, system activity, 
                        hardware settings, browser type, browser language, the date and time of your request and referral URL.

                    </p>
                </div>
            </div>

            <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Location information</h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                                When you use Report Waste services, we may collect and process information about your actual location. 
                                We use various technologies and sensors to determine location, including IP address,
                                GPS, time, wifi.                </p>
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Local storage </h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                                We may collect and store information (including personal information) locally 
                                on your device using mechanisms such as browser web storage (including HTML 5) and application data caches.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Cookie Policy </h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            Our Websites use Cookies to allow Report Waste to collect data about the visitors of the Websites and users of 
                            our service and to customise and personalise our Websites for its viewers. A “Cookie” is a small text file that 
                            is placed on Your hard disk by a web server and is used by our Websites to identify Your computer whenever You 
                            visit our Websites. Report Waste uses Cookies to store Your preferences and other related information. Report 
                            Waste does not use Cookies to gather other information from Your personal computer. Cookies can be removed by 
                            following Internet browser help file directions. If You choose to disable Cookies, some areas of the Websites 
                            may not work properly.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>What are cookies?</h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            Cookies are small text files containing a string of characters that can be placed on your computer or mobile device that 
                            uniquely identify your browser or device. What are cookies used for?
                            </p>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            Cookies allow a site or services to know if your computer or device has visited that site or service before. Cookies can then be used 
                            to help understand how the site or service is being used, help you navigate between pages efficiently, help remember your preferences, 
                            and generally improve your browsing experience. Cookies can also help ensure marketing you see online is more relevant to you and your 
                            interests.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>How to control and delete cookies</h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            If you wish to disable your browser from receiving cookies follow the instructions at http://www.wikihow.com/Disable-Cookies. 
                            Note that if you set your browser to disable cookies, you may not be able to access certain parts of our Service and other parts 
                            of our Service may not work properly.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>The Cookies We Set</h5><br />
                            <h5>Account related cookies</h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            If you create an account with us then we will use cookies for the management of the signup process and general administration. 
                            These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site 
                            preferences when logged out.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Login related cookies</h5>
                            
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            We use cookies when you are logged in so that we can remember this fact. 
                            This prevents you from having to log in every single time you visit a new page. 
                            These cookies are typically removed or cleared when you log out to ensure that 
                            you can only access restricted features and areas when logged in.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Third Party Cookies</h5>
                            
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            In some special cases we also use cookies provided by trusted third parties. 
                            The following section details which third party cookies you might encounter through this site.
                            </p>
                            <p>
                            These cookies may track things such as how long you spend on the site and the pages that you 
                            visit so we can continue to produce engaging content.
                            </p>
                            <p>
                            Third party analytics are used to track and measure usage of this site so that we can continue to 
                            produce engaging content. These cookies may track things such as how long you spend on the site or 
                            pages you visit which helps us to understand how we can improve the site for you.   
                            </p>
                            <p>
                            From time to time we test new features and make subtle changes to the way that the site is delivered. 
                            When we are still testing new features these cookies may be used to ensure that you receive a consistent 
                            experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.
                            </p>
                            <p>
                            As we sell products it's important for us to understand statistics about how many of the visitors to our site 
                            actually make a purchase and as such this is the kind of data that these cookies will track. This is important 
                            to you as it means that we can accurately make business predictions that allow us to monitor our advertising 
                            and product costs to ensure the best possible price.
                            </p>
                            <p>
                            We also use social media buttons and/or plugins on this site that allow you to connect with your social network 
                            in various ways. For these to work the following social media sites including; (List the social networks whose 
                            features you have integrated with your site), will set cookies through our site which may be used to enhance your 
                            profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.   
                            </p>
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Content</h5>
                            
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            We also collect the content you create, upload when using our services. This includes things like notes, photos you upload. 
                            </p>
                            <p>
                            We store your personal data for the period of 5 years. In some cases, we retain data for longer limited periods when it needs 
                            to be kept for legitimate business or legal purposes.    
                            </p>
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>How we use information we collect</h5>
                            
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            We use the information we collect from all of our services to provide, maintain, protect and improve 
                            them, to develop new ones, and to protect Report Waste and our users. 

                            </p>
                            <p>
                            When you contact Report Waste, we keep a record of your communication to help solve any issues you might be facing.
                            We may use your email address to inform you about our services, such as letting you know about upcoming changes or improvements.    
                            </p>
                        
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Any of the information we collect from you may be used in one of the following ways: </h5>
                          
                            <h6>To personalize your experience</h6>
                            <h6> (your information helps us to better respond to your individual needs)</h6>
                            <h6>
                            To improve our website and mobile applications
                            </h6>
                            <h6>
                            (we continually strive to improve our website and applications based on the information and feedback we receive from you)
                            </h6>
                            <h6>To improve customer service</h6>
                            <h6>(your information helps us to more effectively respond to your customer service requests and support needs)</h6><br />

                            <p>
                            We use information collected from cookies and other technologies, like pixel tags, to improve your user experience and the overall quality of our services. 
                            </p>
                            <p>
                            We will ask for your consent before using information for a purpose other than those that are set out in this Privacy Policy. 
                            </p>
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Accessing and updating your personal information</h5>
                            
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            Whenever you use our services, we aim to provide you with access to your personal information. If that information is wrong, we strive to give you ways to update it quickly or to delete it.
                            </p>
                            <p>
                            We aim to maintain our services in a manner that protects information from accidental or malicious destruction. Because of this, after you delete information from our services, we may not immediately delete residual copies from our active servers and may not remove information from our backup systems.
                            You can always edit information in your Report Waste account after you log in. 

                            </p>
                            <p>
                            You have the option to delete your profile (account) from Report Waste database. After you log in, click edit profile button and then click delete in the top right corner. All your activities such as reports and updates will be moved under the account of “Report Waste” and anonymized, so your name will not be connected with them anymore. Your profile will be deleted and we will not be able to renew it.  
                            </p>
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Your rights</h5>
                            
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            Under certain circumstances, you have rights under data protection laws in relation to your personal information, as follows: -
                            </p>
                            <h6>a) Request access to your personal information</h6>
                            <p>
                            You have a right to request a copy of the personal information that we hold about you. Please use the contact details at the end of this policy if you would like to exercise this right, or any of the rights listed below

                            </p>
                            <h6>b) Request correction of your personal information</h6>
                            <p>
                            You have the right to request that we correct the personal information we hold about you, although we may need to verify the accuracy of the new information you provide to us.
                            </p>
                            <h6>c) Request erasure of your personal information</h6>
                            <p>
                            You have the right to request that we delete or remove personal information where there is no good reason for us continuing to process it. Please note that we may not always be able to comply with your request for erasure if there are specific legal reasons- which will be notified to you at the time of your request.
                            </p>
                            <h6>d) Object to processing of your personal information</h6>
                            <p>
                            You have the right to object to the processing of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.
                            </p>
                            <h6>e) Request restriction of processing your personal information</h6>
                            <p>
                            You have the right to request that we suspend the processing of your personal data in the following scenarios: (a) if you want us to establish the data’s accuracy; (b) where our use of the data is unlawful but you do not want us to erase it; (c) where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims; or (d) you have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.
                            </p>
                            <h6>f) Request transfer of your personal information</h6>
                            <p>
                            You have the right to request that the personal information we hold about you is transferred to you or to a third party. We will provide to you, or a third party you have chosen, your personal information in a structured, commonly used, machine-readable format. Please note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.
                            </p>
                            <h6>g) Right to withdraw consent</h6>
                            <p>
                            In circumstances where we are relying on your consent to process your personal data, you have the right to withdraw your consent at any time. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Time limit to respond </h5>
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            We try to respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5"></div>
                    <div className="row ">
                        <div className="col-md-12">
                            <h5>Information we share</h5>
                            
                            <p className="text-dark" style={{fontSize: '13px;'}}>
                            Public information that you are giving consent to share when you register is: 
                            </p>
                            <h6>1.REPORTING DUMPS</h6>
                            <p>when you report or update a dump without choosing to send report anonymously we show your name in the report. This data is publicly accessible in our web page.

                            </p>
                            <h6>2.ADMINISTRATORS</h6>
                            <p>
                            We cooperate with many organizations around the globe who strive for the same as we do, clean planet for everyone. We need to maintain Report Waste database accurate so we appoint administrators for areas. These administrators can see your whole Report Waste profile, but cannot access your contact information such as phone and email.
                            </p>
                            <h6>3.CLEANING EVENTS</h6>
                            <p>
                            When you join event in Report Waste, we allow creator of the event to see that you are coming in the form of the name and your profile without your contact information. 
                            </p>
                            <h6>4.ORGANIZATION</h6>
                            <p>
                            When you join some organization in Report Waste, administrator of this organization will get access to your personal information, such as a profile and email. 
                            </p>
        
                            <p>
                            Once You make a public posting, You may not be able to change or remove it.
                            </p>
                            <h6>With your consent</h6>
                            <p>
                            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. 
                            </p>
                            
                            <p>
                            We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
                                Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.


                            </p>
                        </div>
                    </div>


                </section>
            </div>
            </Row>
        </Col>
    </div>
    <Footer />
    </>
  );
}

export default PrivacyPolicy;
