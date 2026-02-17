import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  service_interest: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const serviceOptions = [
  "SEO & SEM",
  "Social Media Marketing",
  "Web Design & Development",
  "PPC Advertising",
  "Email Marketing",
  "Content Marketing",
  "Full Digital Marketing",
];

const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", service_interest: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        service_interest: data.service_interest,
        message: data.message,
      });

      if (error) throw error;

      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      form.reset();
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-muted-foreground text-lg">
              Get a free consultation from our digital marketing experts. Tell us about your goals and we'll create a custom strategy to drive results.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-8 rounded-2xl border border-border bg-card shadow-sm scroll-reveal">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl><Input type="email" placeholder="john@company.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl><Input type="tel" placeholder="+1 (555) 000-0000" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="service_interest" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Interest *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {serviceOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message *</FormLabel>
                  <FormControl><Textarea placeholder="Tell us about your project and goals..." rows={5} {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button type="submit" size="lg" className="w-full gradient-primary border-0 font-bold text-base py-6 shadow-lg shadow-primary/25" disabled={submitting}>
                {submitting ? "Sending..." : (
                  <>Send Message <Send className="ml-2 h-5 w-5" /></>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
