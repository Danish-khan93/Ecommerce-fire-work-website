import { PiCertificateFill } from "react-icons/pi";
import { FaShippingFast } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

export type DATA={
    label:string,
    content:string,
    icon: React.FC
}

export const TopNavConstant:DATA[]=[
    {
label: ' Free Shipping /and Delivery',
content:"On order over $300*",
icon : PiCertificateFill
    },
    {
label: 'Satisfaction 100% Guaranteed',
content:"Only the best FireWorks & Service",
icon : FaShippingFast
    },
    {
label: ' Fast Reliable Delivery',
content:"1-2 Day Delivery",
icon : BiDonateHeart
    },
    {
label: '4.9/5 Star Client Ratings',
content:" With Over 2600+ Review",
icon : TbTruckDelivery 
    }
]