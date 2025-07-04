import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  Cross,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  const itemsInformation = [
    {
      icon: "Mail",
      title: t("contact.itemsInfo.info1.t"),
      content: t("contact.itemsInfo.info1.c"),
    },
    {
      icon: "Phone",
      title: t("contact.itemsInfo.info2.t"),
      content: t("contact.itemsInfo.info2.c"),
    },
    {
      icon: "MapPin",
      title: t("contact.itemsInfo.info3.t"),
      content: t("contact.itemsInfo.info3.c"),
    },
  ];

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const renderIcon = (param) => {
    switch (param) {
      case "Mail":
        return <Mail className="h-6 w-6 text-primary" />;
      case "Phone":
        return <Phone className="h-6 w-6 text-primary" />;
      case "MapPin":
        return <MapPin className="h-6 w-6 text-primary" />;
      default:
        return <Cross className="h-6 w-6 text-primary" />;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: t("contact.form.toastTitle"),
        description: t("contact.form.toastDescription"),
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("contact.titlePart1")}{" "}
          <span className="text-primary"> {t("contact.titlePart2")} </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              {t("contact.subtitleLeft")}
            </h3>

            <div className="space-y-6 justify-center">
              {itemsInformation.map((item, key) => (
                <div key={key} className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {renderIcon(item.icon)}
                  </div>
                  <div>
                    <h4 className="font-medium"> {item.title} </h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      {item.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">
                {" "}
                {t("contact.titleSocials")}{" "}
              </h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              {t("contact.form.title")}{" "}
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.subtitle1")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder={t("contact.form.placeholder1")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.subtitle2")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder={t("contact.form.placeholder2")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.subtitle3")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder={t("contact.form.placeholder3")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting
                  ? t("contact.form.buttonSending")
                  : t("contact.form.buttonSend")}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
