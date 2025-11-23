import { Navigation } from "@/components/Navigation";
import { Hero3DScene } from "@/components/Hero3DScene";
import { ScreenshotCard } from "@/components/ScreenshotCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FlowStep } from "@/components/FlowStep";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  LogIn, 
  FileCheck, 
  MessageSquare, 
  Shield, 
  BarChart3,
  ArrowRight,
  Zap,
  Users,
  Activity,
  X
} from "lucide-react";

// Images from public folder
const userLoginImg = "/images/login.png";
const scenarioScreenImg = "/images/scenario.png";
const questionScreenImg = "/images/question.png";
const adminDashboardImg = "/images/admin.png";

const Index = () => {
  const [showUserJourneyEmbed, setShowUserJourneyEmbed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Animated background grid */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 z-10"
          >
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full glass text-sm font-semibold text-primary border border-primary/20">
                Interactive TTX Platform
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Immersive <span className="text-gradient">TTX Assessment</span> Walkthrough
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Experience a guided 3D tour of how users attempt tabletop exercises, 
              admins monitor sessions, and analytics reveal performance insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-orange group"
                onClick={() => {
                  setShowUserJourneyEmbed(true);
                  setTimeout(() => {
                    document.getElementById('user-journey')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                View User Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => document.getElementById('admin-journey')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Admin Journey
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Hero3DScene />
          </motion.div>
        </div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-10 left-0 right-0"
        >
          <div className="container mx-auto px-4">
            <div className="glass-strong rounded-2xl p-6 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">360°</div>
                <div className="text-sm text-muted-foreground">Platform View</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="text-3xl font-bold text-gradient">3 Roles</div>
                <div className="text-sm text-muted-foreground">User Paths</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">Real-time</div>
                <div className="text-sm text-muted-foreground">Analytics</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* User Journey Section */}
      <section id="user-journey" className="py-32 relative">
        <div className="container mx-auto px-4 space-y-20">
          {/* Embedded Platform Preview */}
          {showUserJourneyEmbed && (
            <AnimatedSection>
              <div className="glass-strong rounded-2xl overflow-hidden border-2 border-primary/50 relative">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <h3 className="text-xl font-bold text-gradient">Live Platform Preview</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowUserJourneyEmbed(false)}
                    className="hover:bg-destructive/10"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '75%', height: 0 }}>
                  <iframe
                    src="https://mob-updated-frontend-pb1crt6mg-kp0702s-projects.vercel.app/"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    title="TTX Platform User Journey"
                    allow="fullscreen"
                    loading="lazy"
                  />
                </div>
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">User Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              The User Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              From login to completion, see how participants navigate through tabletop exercise scenarios
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <LogIn className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">1. User Login & Access</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Participants receive secure access links to the TTX platform.</p>
                  <div className="glass rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Quick Start</span>
                    </div>
                    <p className="text-sm">Simple name and email entry to begin the assessment</p>
                  </div>
                  <div className="glass rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-semibold text-foreground">Concurrent Access</span>
                    </div>
                    <p className="text-sm">Up to 9 participants can join simultaneously</p>
                  </div>
                </div>
              </div>
              <ScreenshotCard
                image={userLoginImg}
                title="Secure Login Portal"
                description="Clean interface for participant access with name and email authentication"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScreenshotCard
                image={scenarioScreenImg}
                title="Incident Scenario"
                description="Real-world ransomware incident with ITSM dashboards and critical decision points"
              />
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">2. Scenario Presentation</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Participants are presented with realistic incident scenarios including timestamps and visual evidence.</p>
                  <div className="glass rounded-lg p-4 space-y-2">
                    <div className="text-sm font-semibold text-foreground">Main Scenario</div>
                    <p className="text-sm">Comprehensive incident overview with context and impact</p>
                  </div>
                  <div className="glass rounded-lg p-4 space-y-2">
                    <div className="text-sm font-semibold text-foreground">Sub-scenarios</div>
                    <p className="text-sm">Multiple sequences testing different response capabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">3. Question Assessment</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Single-choice MCQ format with auto-save functionality ensures responses are never lost.</p>
                  <div className="glass rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Progress Tracking</span>
                    </div>
                    <p className="text-sm">Clear indication of question progress (1 of 6, 2 of 6, etc.)</p>
                  </div>
                  <div className="glass rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-semibold text-foreground">Auto-save</span>
                    </div>
                    <p className="text-sm">All selections automatically saved for final report generation</p>
                  </div>
                </div>
              </div>
              <ScreenshotCard
                image={questionScreenImg}
                title="Interactive Questions"
                description="Clean MCQ interface with progress indicator and auto-save functionality"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Admin Journey Section */}
      <section id="admin-journey" className="py-32 relative bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 space-y-20">
          <AnimatedSection className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Admin Control</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Admin Control Center
            </h2>
            <p className="text-xl text-muted-foreground">
              Monitor participant progress, manage assessments, and track real-time performance
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="glass-strong rounded-2xl p-6 space-y-4 hover:border-primary/50 transition-all duration-300 border-2 border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-orange">
                  <Users className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-bold">Assign TTX Scenarios</h3>
                <p className="text-muted-foreground">
                  Create and distribute tabletop exercises to participants with customizable scenarios and difficulty levels.
                </p>
              </div>

              <div className="glass-strong rounded-2xl p-6 space-y-4 hover:border-secondary/50 transition-all duration-300 border-2 border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center glow-yellow">
                  <Activity className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-bold">Track Real-Time Responses</h3>
                <p className="text-muted-foreground">
                  Monitor participant progress as they work through scenarios. See completion rates and response times live.
                </p>
              </div>

              <div className="glass-strong rounded-2xl p-6 space-y-4 hover:border-primary/50 transition-all duration-300 border-2 border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-orange">
                  <Shield className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-bold">Manage Users & Roles</h3>
                <p className="text-muted-foreground">
                  Control access permissions, assign roles, and manage participant groups for different exercise types.
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <ScreenshotCard
                image={adminDashboardImg}
                title="Performance Dashboard"
                description="Comprehensive leaderboard with per-user analytics, sequence breakdowns, and completion metrics"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-32 relative">
        <div className="container mx-auto px-4 space-y-20">
          <AnimatedSection className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Insights & Reports</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Analytics & Reporting
            </h2>
            <p className="text-xl text-muted-foreground">
              Deep dive into performance metrics, identify strengths, and uncover areas for improvement
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="glass-strong rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Performance Metrics</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 glass rounded-lg">
                    <span className="text-muted-foreground">Total Participants</span>
                    <span className="text-2xl font-bold text-gradient">6</span>
                  </div>
                  <div className="flex justify-between items-center p-4 glass rounded-lg">
                    <span className="text-muted-foreground">Average Score</span>
                    <span className="text-2xl font-bold text-gradient">54%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 glass rounded-lg">
                    <span className="text-muted-foreground">Completion Rate</span>
                    <span className="text-2xl font-bold text-gradient">100%</span>
                  </div>
                </div>
              </div>

              <div className="glass-strong rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <Activity className="w-8 h-8 text-secondary" />
                  <h3 className="text-2xl font-bold">Sequence Analysis</h3>
                </div>
                <div className="space-y-3">
                  {['Seq 1', 'Seq 2', 'Seq 3', 'Seq 4', 'Seq 5'].map((seq, index) => (
                    <div key={seq} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{seq}</span>
                        <span className="text-muted-foreground">{Math.floor(Math.random() * 60 + 20)}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.floor(Math.random() * 60 + 20)}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="text-center">
            <div className="glass-strong rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Detailed Individual Reports</h3>
              <p className="text-muted-foreground mb-6">
                Each participant receives a comprehensive breakdown of their performance across all sequences, 
                with correctness revealed only in the final report.
              </p>
              <Button 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-orange"
                onClick={() => window.open("https://mob-updated-frontend-pb1crt6mg-kp0702s-projects.vercel.app/admin-direct", "_blank")}
              >
                View Admin Dashboard
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Flow Section */}
      <section id="flow" className="py-32 relative bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 space-y-20">
          <AnimatedSection className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Complete Process</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              End-to-End TTX Flow
            </h2>
            <p className="text-xl text-muted-foreground">
              The complete journey from user login to analytics review
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <FlowStep
              icon={LogIn}
              title="User Login"
              description="Secure access with name and email"
              index={0}
            />
            <FlowStep
              icon={FileCheck}
              title="Assessment Selection"
              description="Choose from available TTX scenarios"
              index={1}
            />
            <FlowStep
              icon={MessageSquare}
              title="Scenario Response"
              description="Answer questions with auto-save"
              index={2}
            />
            <FlowStep
              icon={Shield}
              title="Admin Monitoring"
              description="Real-time progress tracking"
              index={3}
            />
            <FlowStep
              icon={BarChart3}
              title="Analytics Review"
              description="Comprehensive performance insights"
              index={4}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <span className="text-xl font-bold">TTX Platform</span>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Interactive Tabletop Exercise Assessment Platform</p>
              <p className="mt-2">© 2024 TTX Platform. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
