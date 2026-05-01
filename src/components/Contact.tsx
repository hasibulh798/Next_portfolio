"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Send, MessageSquare, Code } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSquaresBg } from "./AnimatedSquaresBg";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-transparent">
      <AnimatedSquaresBg />
      {/* --- CONTACT SPECIFIC ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_60%)]" 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 brightness-150" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Get in Touch</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 pb-2">Let&apos;s Build Together</h3>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h4>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Currently looking for new opportunities and collaborations. 
              Feel free to reach out if you have a project in mind or just want to say hi!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Mail size={24} />, label: "Email", value: "hello@hasib.dev", href: "mailto:hello@hasib.dev", color: "bg-primary/20", text: "text-primary" },
                { icon: <Code size={24} />, label: "GitHub", value: "hasibulh798", href: "https://github.com/hasibulh798", color: "bg-secondary/20", text: "text-secondary" },
                { icon: <FaLinkedin size={24} />, label: "LinkedIn", value: "Hasibul Hasan", href: "https://linkedin.com/in/hasibulh798", color: "bg-blue-500/20", text: "text-blue-500" },
                { icon: <FaWhatsapp size={24} />, label: "WhatsApp", value: "+880 123 456 789", href: "https://wa.me/880123456789", color: "bg-green-500/20", text: "text-green-500" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10, y: -2 }}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-card/40 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-300 shadow-sm"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center ${item.text} shadow-inner`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{item.label}</div>
                    <a href={item.href} target="_blank" className="text-lg font-bold text-foreground hover:text-primary transition-colors">{item.value}</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/40 border border-border rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16" />
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-muted-foreground font-bold">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  {...register("name")}
                  className="bg-background/50 border-border rounded-xl h-12 focus:border-primary transition-all placeholder:text-muted-foreground/30"
                />
                {errors.name && <span className="text-red-500 text-xs font-bold mt-1 block">{errors.name.message}</span>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-muted-foreground font-bold">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  {...register("email")}
                  className="bg-background/50 border-border rounded-xl h-12 focus:border-primary transition-all placeholder:text-muted-foreground/30"
                />
                {errors.email && <span className="text-red-500 text-xs font-bold mt-1 block">{errors.email.message}</span>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-muted-foreground font-bold">Your Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  {...register("message")}
                  className="bg-background/50 border-border rounded-xl min-h-[150px] focus:border-primary transition-all placeholder:text-muted-foreground/30"
                />
                {errors.message && <span className="text-red-500 text-xs font-bold mt-1 block">{errors.message.message}</span>}
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all text-lg shadow-lg shadow-primary/20"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
