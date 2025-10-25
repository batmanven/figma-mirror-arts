import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I register for the event?",
    answer: "Registration is simple! Click the 'Register Now' button on our homepage, fill out the registration form with your details, and you'll receive a confirmation email with your ticket and event details."
  },
  {
    question: "Is there a code of conduct for participants?",
    answer: "Yes, we have a comprehensive code of conduct that ensures a safe, inclusive, and respectful environment for all participants."
  },
  {
    question: "What kind of projects will be showcased?",
    answer: "We showcase a diverse range of open source projects including cloud infrastructure, developer tools, AI/ML frameworks, and community-driven initiatives."
  },
  {
    question: "Can I submit my own project for consideration?",
    answer: "Absolutely! We encourage participants to submit their open source projects through our submission portal."
  },
  {
    question: "Are there networking opportunities at the event?",
    answer: "Yes! We have dedicated networking sessions, workshops, and social events designed to help you connect with other developers and industry leaders."
  },
  {
    question: "Will I get a certificate of participation?",
    answer: "Yes, all registered participants will receive a digital certificate of participation upon completion of the event."
  },
  {
    question: "What are the career opportunities available?",
    answer: "Our hiring partners are actively recruiting open source developers. You'll have access to exclusive job opportunities and career counseling sessions."
  },
  {
    question: "Is there a refund policy for registration?",
    answer: "Yes, we offer full refunds up to 14 days before the event. Please refer to our terms and conditions for more details."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Find answers to common questions about OSCG 2025
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-border bg-card px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mx-auto mt-16 max-w-2xl rounded-lg border border-border bg-card p-8 text-center">
          <h3 className="mb-2 text-2xl font-semibold">Still have questions?</h3>
          <p className="mb-6 text-muted-foreground">
            Our support team is here to help you with any queries
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
