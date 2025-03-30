"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Send, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser"; // Importar EmailJS

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // 🔐 Validar variables de entorno
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  
    if (!serviceId || !templateId || !publicKey) {
      console.error("❌ Faltan variables de entorno para EmailJS");
      toast({
        title: "Error interno",
        description: "Faltan configuraciones necesarias para enviar el mensaje.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
  
    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme. Te responderé pronto.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ Error al enviar el mensaje:", error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Ghellsing007",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/garving-vasquez-severino-118a98343",
      color: "hover:text-blue-700",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:garving.vasquez@gmail.com",
      color: "hover:text-red-500",
    },
    {
      name: "WhatsApp",
      icon: MessageSquare,
      url: "https://wa.me/+18298725551",
      color: "hover:text-green-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres hablar sobre oportunidades de colaboración? ¡Contáctame!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Envíame un mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu.email@ejemplo.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="¿En qué puedo ayudarte?"
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Enviar mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
                <div className="space-y-4 mb-8">
                  <p className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <a href="mailto:garving.vasquez@gmail.com" className="hover:text-primary transition-colors">
                      garving.vasquez@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-3 text-primary" />
                    <a href="https://wa.me/+18298725551" className="hover:text-primary transition-colors">
                      +1 829 872 5551
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Sígueme en</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-muted transition-colors ${link.color}`}
                        aria-label={link.name}
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Disponibilidad</h4>
                <p className="text-foreground/80 text-sm">
                  Actualmente estoy disponible para proyectos freelance y oportunidades de trabajo a tiempo completo. Mi
                  horario de respuesta es de todos los días, de 8:00 a 19:00 (GMT-5).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}