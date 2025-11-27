import { WindowControl } from "#Components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import React from "react";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControl target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-3">
        <img src="/images/1.jpeg" alt="Rishabh" className="w-20 rounded-full" />
        <h3>Let's Connect</h3>
        <p>
          <a href="mailto:rishabhxavier84@gmail.com">
            rishabhxavier84@gmail.com
          </a>
        </p>
        <ul>
          {socials.map((item) => (
            <li key={item.id} style={{ backgroundColor: item.bg }}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.text}
              >
                <img src={item.icon} alt={item.text} className="size-5" />
                <p>{item.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
