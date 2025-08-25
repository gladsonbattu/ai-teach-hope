
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Globe, Smartphone, BookOpen, Brain, Heart, Target, Download, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-blue-50 to-white">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-hero text-gray-900 mb-6 animate-fade-in">
              Every child deserves a great teacher.
            </h1>
            <p className="text-xl lg:text-2xl text-brand-gray mb-12 leading-relaxed animate-fade-in">
              The AIducator brings AI-powered Maths, Physics, and English learning to underserved students.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
              <Button className="btn-hero-primary">
                Partner With Us
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button className="btn-hero-secondary">
                Sponsor a School
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-section gradient-text mb-8">Our Mission</h2>
            <p className="text-xl text-brand-gray leading-relaxed">
              To democratize access to world-class teaching through AI-powered, visual, and bilingual education — 
              ensuring no child is left behind.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="section-spacing bg-gray-50">
        <div className="section-container">
          <h2 className="text-section text-center text-gray-900 mb-16">Why It Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="feature-card group">
              <div className="icon-container">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-card text-gray-900 mb-4">Teacher Shortage</h3>
              <p className="text-brand-gray leading-relaxed">
                Rural schools face critical shortages of qualified teachers, especially in STEM subjects, 
                leaving students without proper guidance.
              </p>
            </Card>

            <Card className="feature-card group">
              <div className="icon-container bg-gradient-to-br from-brand-green to-green-600">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-card text-gray-900 mb-4">High Coaching Costs</h3>
              <p className="text-brand-gray leading-relaxed">
                Quality education and coaching remain expensive luxuries that most underprivileged 
                families cannot afford.
              </p>
            </Card>

            <Card className="feature-card group">
              <div className="icon-container bg-gradient-to-br from-brand-orange to-orange-600">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-card text-gray-900 mb-4">Digital Divide</h3>
              <p className="text-brand-gray leading-relaxed">
                Language barriers and lack of digital content in local languages prevent 
                effective learning for many students.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-spacing">
        <div className="section-container">
          <h2 className="text-section text-center text-gray-900 mb-16">How It Works</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            <Card className="step-card text-center">
              <div className="icon-container mx-auto bg-gradient-to-br from-brand-blue to-brand-blue-dark">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Tutor App</h3>
              <p className="text-sm text-brand-gray">MyAIducator provides personalized learning experiences</p>
            </Card>

            <Card className="step-card text-center">
              <div className="icon-container mx-auto bg-gradient-to-br from-brand-green to-green-600">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bilingual Lessons</h3>
              <p className="text-sm text-brand-gray">Content in Telugu and English for better comprehension</p>
            </Card>

            <Card className="step-card text-center">
              <div className="icon-container mx-auto bg-gradient-to-br from-brand-orange to-orange-600">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Visual Learning</h3>
              <p className="text-sm text-brand-gray">Animations and real-world examples make concepts clear</p>
            </Card>

            <Card className="step-card text-center">
              <div className="icon-container mx-auto bg-gradient-to-br from-purple-500 to-purple-600">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Offline Mode</h3>
              <p className="text-sm text-brand-gray">Works without internet for low connectivity areas</p>
            </Card>

            <Card className="step-card text-center">
              <div className="icon-container mx-auto bg-gradient-to-br from-pink-500 to-pink-600">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Scalable Impact</h3>
              <p className="text-sm text-brand-gray">Reach thousands of students with consistent quality</p>
            </Card>
          </div>
        </div>
      </section>

      {/* For Partners & Donors Section */}
      <section className="section-spacing bg-gradient-to-r from-brand-blue-light/10 to-brand-green/10">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section text-gray-900 mb-12">For Partners & Donors</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Measurable CSR Outcomes</h3>
                <p className="text-brand-gray">Track real impact with detailed analytics and progress reports</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Scalable Model</h3>
                <p className="text-brand-gray">Reach more students efficiently with AI-powered education</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Rural Student Upliftment</h3>
                <p className="text-brand-gray">Directly impact underserved communities where help is needed most</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Quote Section */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <blockquote className="quote-highlight">
              "With The AIducator, every student has a teacher in their pocket. For the first time, 
              rural children are learning maths and science concepts as clearly as their peers in urban schools."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <footer className="section-spacing bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Together, we can give every child their own teacher.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              Partner With Us
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button className="bg-brand-green hover:bg-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              Sponsor a School
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button className="bg-brand-orange hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              Download Impact Report
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/80">
              TheAIducator.com • Transforming Education Through AI • Making Learning Accessible for All
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
