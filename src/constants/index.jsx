import { DoorClosed, Handshake, Headset, QuoteIcon, Search, Sofa } from "lucide-react";



const K = {
NAVLINKS:[
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about-us"
    },
    {
        name: "Collection",
        path: "/collection"
    },
    {
        name: "Contact",
        path: "/contact-us"
    },
],

SERVICES:[
    {
        title: "Amazing Deals",
        description: " Far far away, behind the word mountains, far from the   countries Vokalia.",
        Icon: <Handshake/>,
        bgColor:"#F5EBEB",
        iconBg: "#CB9696",
        
    },
    {
        title: "Quality Furniture",
        description: " Far far away, behind the word mountains, far from the countries Vokalia.",
        Icon: <DoorClosed/>,
        bgColor:"#DCEBDD",
        iconBg: "#8BBD8E",
        
    },
    {
        title: "Amazing Deals",
        description: " Far far away, behind the word mountains, far from the countries Vokalia.",
        Icon: <Sofa/>,
        bgColor:"#F5EFD8",
        iconBg: "#D1B54A",
    
    },
    {
        title: "Amazing Deals",
        description: " Far far away, behind the word mountains, far from the countries Vokalia.",
        Icon: <Headset/>,
        bgColor:"#F4E6D8",
        iconBg: "#D29A61",
    },
],

COLLECTION:[
     {
        Icon: <Search/>,
        description: "Business Finance Consulting",
        
     },
],

TESTIMONIAL:[
    {
        Icon: <QuoteIcon/>,
        iconBg: "#CF7500",
        bgColor: "#FFFFFF",
        description: "Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live the blind texts."

    },
    {
        Icon: <QuoteIcon/>,
        iconBg: "#FFFFFF",
        bgColor: "#CF7500",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."

    },
    {
        Icon: <QuoteIcon/>,
        iconBg: "#CF7500",
        bgColor: "#FFFFFF",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."

    },
],


};
export default K;