import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FlowStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const FlowStep = ({ icon: Icon, title, description, index }: FlowStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="glass rounded-2xl p-6 border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 h-full">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-orange group-hover:animate-pulse-glow">
            <Icon className="w-8 h-8 text-background" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gradient">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      
      {/* Connecting line - hidden on last item */}
      <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-y-1/2 group-last:hidden" />
    </motion.div>
  );
};
