import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ScreenshotCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

export const ScreenshotCard = ({ image, title, description, delay = 0 }: ScreenshotCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
      transition={{ duration: 0.6, delay }}
      className="group"
      style={{ perspective: "1000px" }}
    >
      <div 
        className="glass-strong rounded-2xl overflow-hidden border-2 border-primary/20 transition-all duration-300 hover:border-primary/50 hover:scale-105 hover:-translate-y-2 glow-orange"
        style={{ 
          transformStyle: "preserve-3d",
          transform: "rotateX(5deg) rotateY(-5deg)"
        }}
      >
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 space-y-2">
          <h3 className="text-xl font-bold text-gradient">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
