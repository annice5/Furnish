import { DoorClosed, Handshake, Headset, Sofa } from "lucide-react";


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
    }
]
};
export default K;