import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const email = "vishwangsuthar.997@gmail.com"; // Replace with your actual email
  const phone = "6355273997"; // Replace with your actual phone number
  const location = "Siddhpur, India"; // Replace with your actual location

  return (
    <section id="contact" className=" my-12">
      <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <ContactItem
          icon={<Mail size={24} />}
          title="Email"
          content={email}
          href={`mailto:${email}`}
        />
        <ContactItem
          icon={<Phone size={24} />}
          title="Phone"
          content={phone}
          href={`tel:${phone}`}
        />
        <ContactItem
          icon={<MapPin size={24} />}
          title="Location"
          content={location}
        />
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  title,
  content,
  href,
}) => (
  <div className="flex flex-col items-center p-6 bg-secondary rounded-lg shadow-md">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    {href ? (
      <a
        href={href}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        {content}
      </a>
    ) : (
      <p className="text-muted-foreground">{content}</p>
    )}
  </div>
);

export default Contact;
