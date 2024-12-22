import { Dumbbell, Facebook, Instagram, LinkedinIcon, LocateFixedIcon, MailIcon, PhoneCallIcon, Twitter } from "lucide-react";
import { NewsletterForm } from "../newsletter/NewsletterForm";

export const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-gray-300 py- px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
        <div>
          <h3 className="font-bold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Why us</a></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
            <li><a href="#" className="hover:text-white">Partnership</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-white mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Basic Yoga</a></li>
            <li><a href="#" className="hover:text-white">Strength Training</a></li>
            <li><a href="#" className="hover:text-white">Body Building</a></li>
            <li><a href="#" className="hover:text-white">Weight Lost</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex gap-2"><PhoneCallIcon className="text-red-600"/> +1 (408) 555-0120</li>
            <li className="flex gap-2"><MailIcon className="text-red-600"/> example@email.com</li>
            <li className="flex gap-2"><LocateFixedIcon className="text-red-600"/> 2464 Royal Ln. Mesa,<br />New Jersey 45463</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-white mb-4">Subscribe Our Newsletter</h3>
          <NewsletterForm />
          <p className="mb-4 p-2">Never miss an update & news to your email.</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto py-4 pt-6 border-t border-gray-800  flex justify-between ">
        <div className=' text-2xl flex gap-3'>
            <Dumbbell className='text-red-500 h-6 w-6'/>FITNESXIA
        </div>
        <div>©2025 DesignAxen. All Copyrights reserved.</div>
        <div className="flex gap-3">
            <Facebook className="h-6 w-6" />
            <Instagram className="" />
            <Twitter className="" />
            <LinkedinIcon className=""/>
        </div>
      </div>
    </footer>
  );
};
