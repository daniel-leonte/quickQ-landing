"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Search, Target, MessageSquare, TrendingUp, Zap, Users, Sparkles, ArrowRight, Star } from "lucide-react"

export default function QuickQLanding() {
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [footerEmail, setFooterEmail] = useState("")

  const handleWaitlistSubmit = async (e: React.FormEvent, isFooter = false) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // POST to placeholder endpoint
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: isFooter ? footerEmail : email,
          feedback: isFooter ? "" : feedback,
        }),
      })

      if (isFooter) {
        setFooterEmail("")
      } else {
        setEmail("")
        setFeedback("")
      }

      alert("NOT IMPLEMENTED: Thanks for joining the waitlist! 🚀")
    } catch (error) {
      console.log("Waitlist submission:", { email: isFooter ? footerEmail : email, feedback })
      alert("NOT IMPLEMENTED: Thanks for joining the waitlist! 🚀")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A3E635]/5 via-transparent to-transparent" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center gap-2 lg:gap-4">
            <Badge className="mb-6 bg-[#A3E635]/20 text-[#A3E635] border-[#A3E635]/30 hover:bg-[#A3E635]/30">
              <Rocket className="w-4 h-4 mr-2" />Now in Early Access
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-zinc-100 via-[#A3E635] to-zinc-100 bg-clip-text text-transparent leading-tight">
              Join the AI Revolution: Nail Your YC Startup Interview
            </h1>

            <p className="text-xl md:text-2xl text-zinc-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Interactive mock interviews, tailored question banks, and real-time AI feedback—built to mirror the exact
              process of early-stage YC AI startups.
            </p>

            <Card className="max-w-md mx-auto bg-zinc-900/50 border-zinc-800 backdrop-blur-sm w-full">
              <CardContent className="p-6">
                <form onSubmit={(e) => handleWaitlistSubmit(e)} className="space-y-6">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-black/50 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-[#A3E635]"
                  />
                  <Textarea
                    placeholder="Any feedback or questions? (optional)"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="bg-black/50 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-[#A3E635] resize-none"
                    rows={3}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#A3E635] hover:bg-[#A3E635]/90 text-zinc-900 font-semibold py-3"
                  >
                    {isSubmitting ? "Joining..." : "Join the Waitlist"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features with Screenshots - How It Works */}
      <section className="bg-zinc-950/50 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 lg:mb-32 bg-gradient-to-r from-zinc-100 via-[#A3E635] to-zinc-100 bg-clip-text text-transparent">How It Works</h2>

          <div className="space-y-20 max-w-6xl mx-auto flex flex-col items-center justify-center gap-12 lg:gap-20">
            {/* Section 1: YC Startup Job Listings - Screenshot LEFT, Text RIGHT */}
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              <div className="order-1 lg:order-1">
                <div className="relative mx-auto w-72 max-w-full">
                  <img 
                    src="/mock1.png" 
                    alt="QuickQ mobile app showing YC AI startup job listings interface"
                    className="w-full h-auto rounded-[2.5rem] shadow-2xl border border-zinc-800/50 bg-black"
                  />
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <div className="relative w-16 h-16 bg-[#A3E635]/20 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-[#A3E635]" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#A3E635] rounded-full flex items-center justify-center">
                    <span className="text-zinc-900 text-sm font-bold">1</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-zinc-100">Browse Listings</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
                    </div>
                    <p className="text-zinc-300">Access to AI-generated engineering job listings</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Star className="w-3.5 h-3.5 text-zinc-900" />
                    </div>
                    <p className="text-zinc-300">Modeled on real YC AI startup engineering roles</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Search className="w-3.5 h-3.5 text-zinc-900" />
                    </div>
                    <p className="text-zinc-300">Filter and search capabilities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* New Section: Dive Deep into the Role - Screenshot RIGHT, Text LEFT */}
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              <div className="order-2 lg:order-1">
                <div className="relative w-16 h-16 bg-[#A3E635]/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-[#A3E635]" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#A3E635] rounded-full flex items-center justify-center">
                    <span className="text-zinc-900 text-sm font-bold">2</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-zinc-100">Select Target</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Target className="w-3.5 h-3.5 text-zinc-900" />
                    </div>
                    <p className="text-zinc-300">Detailed job descriptions mirroring real YC AI startup engineering roles</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
                    </div>
                    <p className="text-zinc-300">
                      Information about the startup, including its mission and team (AI-generated)
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-900" />
                    </div>
                    <p className="text-zinc-300">Easy access to start your mock interview</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative mx-auto w-72 max-w-full">
                  <img 
                    src="/mock2.png" 
                    alt="QuickQ mobile app showing detailed job description and company information"
                    className="w-full h-auto rounded-[2.5rem] shadow-2xl border border-zinc-800/50 bg-black"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Mock Interview Simulation - Screenshot LEFT, Text RIGHT */}
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              <div className="order-1 lg:order-1">
                <div className="relative mx-auto w-72 max-w-full">
                  <img 
                    src="/mock3.png" 
                    alt="QuickQ mobile app showing live mock interview interface with AI founder"
                    className="w-full h-auto rounded-[2.5rem] shadow-2xl border border-zinc-800/50 bg-black"
                  />
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <div className="relative w-16 h-16 bg-[#A3E635]/20 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-[#A3E635]" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#A3E635] rounded-full flex items-center justify-center">
                    <span className="text-zinc-900 text-sm font-bold">3</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-zinc-100">Mock Interview Simulation</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <MessageSquare className="w-3.5 h-3.5 text-zinc-900" />
                    </div>
                    <p className="text-zinc-300">Live mock interviews with an AI 'founder'</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
                    </div>
                    <p className="text-zinc-300">Real early-stage YC AI startup questions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Zap className="w-3.5 h-3.5 text-zinc-900" />
                    </div>
                    <p className="text-zinc-300">Get feedback after each answer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Real-Time Feedback & Performance Analytics - Screenshot RIGHT, Text LEFT */}
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              <div className="order-2 lg:order-1">
                <div className="relative w-16 h-16 bg-[#A3E635]/20 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-[#A3E635]" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#A3E635] rounded-full flex items-center justify-center">
                    <span className="text-zinc-900 text-sm font-bold">4</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-zinc-100">
                  Review & Improve
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Zap className="w-3.5 h-3.5 text-zinc-900" />
                    </div>
                    <p className="text-zinc-300">Instant feedback on your performance</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-900" />
                    </div>
                    <p className="text-zinc-300">Get actionable steps to improve</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <TrendingUp className="w-3.5 h-3.5 text-zinc-900" />
                    </div>
                    <p className="text-zinc-300">Improvement suggestions after each session and overall performance</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative mx-auto w-72 max-w-full">
                  <img 
                    src="/mock4.png" 
                    alt="QuickQ mobile app showing interview performance analytics and feedback dashboard"
                    className="w-full h-auto rounded-[2.5rem] shadow-2xl border border-zinc-800/50 bg-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Unique */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-zinc-100 via-[#A3E635] to-zinc-100 bg-clip-text text-transparent">Why We're Unique</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-1 flex-shrink-0 shadow-lg">
                <Sparkles className="w-4 h-4 text-zinc-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">
                  Closest simulation of real YC AI startup interviews
                </h3>
                <p className="text-zinc-400">
                  Our AI founders are trained on actual early-stage YC AI startup interview patterns and startup culture.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-1 flex-shrink-0 shadow-lg">
                <Star className="w-4 h-4 text-zinc-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">
                  Custom-built for full-stack web + native mobile + AI engineering roles
                </h3>
                <p className="text-zinc-400">
                  Tailored specifically for the skills and challenges facing modern AI-focused developers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#A3E635] to-[#84cc16] rounded-full flex items-center justify-center mt-1 flex-shrink-0 shadow-lg">
                <Zap className="w-4 h-4 text-zinc-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">
                  Designed for rapid, remote prep—start today, get better tomorrow
                </h3>
                <p className="text-zinc-400">
                  No scheduling, no waiting. Practice anytime, anywhere, and see immediate improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Social Proof + CTA */}
      <section className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            {/* Social Proof with Visual Hierarchy */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Users className="w-12 h-12 text-[#A3E635]" />
              <div className="w-px h-12 bg-zinc-600"></div>
              <Zap className="w-12 h-12 text-[#A3E635]" />
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-100 leading-tight">
                Be one of the first 200 engineers
                <br />
                <span className="bg-gradient-to-r from-[#A3E635] to-[#A3E635]/80 bg-clip-text text-transparent">
                  ready to ace YC AI startup interviews
                </span>
              </h2>
              <p className="text-xl text-zinc-300 mb-8">
                Join an exclusive group of forward-thinking engineers preparing for the future of AI startups.
              </p>
            </div>

            {/* Seamless CTA Integration */}
            <Card className="max-w-md mx-auto bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
              <CardContent className="p-6">
                <form onSubmit={(e) => handleWaitlistSubmit(e, true)} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={footerEmail}
                    onChange={(e) => setFooterEmail(e.target.value)}
                    required
                    className="bg-black/50 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-[#A3E635]"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#A3E635] hover:bg-[#A3E635]/90 text-zinc-900 font-semibold py-3"
                  >
                    {isSubmitting ? "Reserving..." : "Reserve My Spot"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <p className="text-sm text-zinc-400 mt-6">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400">© 2025 QuickQ. Built for engineers, by engineers. 🚀</p>
        </div>
      </footer>
    </div>
  )
}
