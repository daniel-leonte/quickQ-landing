"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Search, Target, MessageSquare, TrendingUp, Zap, Users, CheckCircle } from "lucide-react"

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

      alert("Thanks for joining the waitlist! 🚀")
    } catch (error) {
      console.log("Waitlist submission:", { email: isFooter ? footerEmail : email, feedback })
      alert("Thanks for joining the waitlist! 🚀")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A3E635]/5 via-transparent to-transparent" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#A3E635]/20 text-[#A3E635] border-[#A3E635]/30 hover:bg-[#A3E635]/30">
              <Rocket className="w-4 h-4 mr-2" />🚀 Now in Early Access
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-100 via-[#A3E635] to-gray-100 bg-clip-text text-transparent leading-tight">
              Join the AI Revolution: Nail Your YC Startup Interview
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Interactive mock interviews, tailored question banks, and real-time AI feedback—built to mirror the exact
              process of early-stage YC AI startups.
            </p>

            <Card className="max-w-md mx-auto bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardContent className="p-6">
                <form onSubmit={(e) => handleWaitlistSubmit(e)} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#A3E635]"
                  />
                  <Textarea
                    placeholder="Any feedback or questions? (optional)"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#A3E635] resize-none"
                    rows={3}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#A3E635] hover:bg-[#A3E635]/90 text-gray-900 font-semibold py-3"
                  >
                    {isSubmitting ? "Joining..." : "Join the Waitlist"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-100">How It Works</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A3E635]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[#A3E635]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-100">1. Browse Listings</h3>
              <p className="text-gray-400">Browse AI-generated YC job listings</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#A3E635]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#A3E635]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-100">2. Select Target</h3>
              <p className="text-gray-400">Select your target startup & role</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#A3E635]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-[#A3E635]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-100">3. Mock Interview</h3>
              <p className="text-gray-400">Run a live mock interview with our AI founder</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#A3E635]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#A3E635]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-100">4. Review & Improve</h3>
              <p className="text-gray-400">Review your performance dashboard & retry</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Key Features with Screenshots */}
      <section className="py-20 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-100">Key Features</h2>

          <div className="space-y-20 max-w-6xl mx-auto">
            {/* Section 1: YC Startup Job Listings - Screenshot LEFT, Text RIGHT */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-1 lg:order-1">
                <div className="relative mx-auto w-64 h-[520px]">
                  {/* iPhone Frame */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[3rem] border-4 border-gray-800 shadow-2xl">
                    {/* iPhone Screen */}
                    <div className="absolute top-4 left-4 right-4 bottom-4 bg-black rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="h-8 bg-gray-950 flex items-center justify-between px-6 text-white text-xs">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-[#A3E635] rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-6 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      {/* App Content */}
                      <div className="flex-1 bg-gray-950 p-4">
                        <div className="text-center mb-4">
                          <h4 className="text-[#A3E635] font-bold text-lg">QuickQ</h4>
                          <p className="text-gray-400 text-sm">YC Job Listings</p>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-[#A3E635] rounded text-xs flex items-center justify-center text-black font-bold">
                                YC
                              </div>
                              <div>
                                <p className="text-white text-sm font-semibold">AI Engineer</p>
                                <p className="text-gray-400 text-xs">TechFlow AI</p>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1 mb-2">
                              <span className="px-2 py-1 bg-[#A3E635]/20 text-[#A3E635] rounded text-xs">React</span>
                              <span className="px-2 py-1 bg-[#A3E635]/20 text-[#A3E635] rounded text-xs">Python</span>
                            </div>
                            <p className="text-gray-400 text-xs">$120k-180k • SF</p>
                          </div>
                          <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-[#A3E635] rounded text-xs flex items-center justify-center text-black font-bold">
                                YC
                              </div>
                              <div>
                                <p className="text-white text-sm font-semibold">Full-Stack Dev</p>
                                <p className="text-gray-400 text-xs">DataMind</p>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1 mb-2">
                              <span className="px-2 py-1 bg-[#A3E635]/20 text-[#A3E635] rounded text-xs">Node.js</span>
                              <span className="px-2 py-1 bg-[#A3E635]/20 text-[#A3E635] rounded text-xs">AI</span>
                            </div>
                            <p className="text-gray-400 text-xs">$100k-150k • Remote</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* iPhone Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100">YC Startup Job Listings</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A3E635] mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Access to AI-generated job listings</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A3E635] mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Modeled on real YC roles</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A3E635] mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Filter and search capabilities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* New Section: Dive Deep into the Role - Screenshot RIGHT, Text LEFT */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100">Dive Deep into the Role</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A3E635] mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Detailed job descriptions mirroring real YC startup roles</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A3E635] mt-1 flex-shrink-0" />
                    <p className="text-gray-300">
                      Information about the startup, including its mission and team (AI-generated)
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A3E635] mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Easy access to apply or learn more</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative mx-auto w-64 h-[520px]">
                  {/* iPhone Frame */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[3rem] border-4 border-gray-800 shadow-2xl">
                    {/* iPhone Screen */}
                    <div className="absolute top-4 left-4 right-4 bottom-4 bg-black rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="h-8 bg-gray-950 flex items-center justify-between px-6 text-white text-xs">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-[#A3E635] rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-6 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      {/* App Content */}
                      <div className="flex-1 bg-gray-950 p-4">
                        <div className="mb-4">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-12 h-12 bg-[#A3E635]/20 rounded-lg flex items-center justify-center">
                              <span className="text-[#A3E635] font-bold">YC</span>
                            </div>
                            <div>
                              <h4 className="text-white font-semibold text-sm">Senior Full-Stack Engineer</h4>
                              <p className="text-gray-400 text-xs">TechFlow AI</p>
                            </div>
                          </div>
                          <div className="space-y-2 text-xs">
                            <p className="text-gray-300">
                              Build scalable AI-powered solutions for next-gen startups. Join our mission to
                              revolutionize...
                            </p>
                            <div className="flex flex-wrap gap-1">
                              <span className="px-2 py-1 bg-[#A3E635]/20 text-[#A3E635] rounded text-xs">React</span>
                              <span className="px-2 py-1 bg-[#A3E635]/20 text-[#A3E635] rounded text-xs">Python</span>
                              <span className="px-2 py-1 bg-[#A3E635]/20 text-[#A3E635] rounded text-xs">AI/ML</span>
                            </div>
                            <p className="text-gray-400">📍 San Francisco, CA</p>
                            <p className="text-gray-400">💰 $120k-180k</p>
                          </div>
                        </div>
                        <button className="w-full bg-[#A3E635] hover:bg-[#A3E635]/90 text-gray-900 font-semibold py-2 px-4 rounded text-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                    {/* iPhone Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Mock Interview Simulation - Screenshot LEFT, Text RIGHT */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-1 lg:order-1">
                <div className="relative mx-auto w-64 h-[520px]">
                  {/* iPhone Frame */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[3rem] border-4 border-gray-800 shadow-2xl">
                    {/* iPhone Screen */}
                    <div className="absolute top-4 left-4 right-4 bottom-4 bg-black rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="h-8 bg-gray-950 flex items-center justify-between px-6 text-white text-xs">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-[#A3E635] rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-6 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      {/* App Content */}
                      <div className="flex-1 bg-gray-950 p-4">
                        <div className="text-center mb-4">
                          <div className="w-16 h-16 bg-[#A3E635]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <MessageSquare className="w-8 h-8 text-[#A3E635]" />
                          </div>
                          <h4 className="text-white font-bold text-sm">Mock Interview</h4>
                          <p className="text-gray-400 text-xs">with AI Founder</p>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-gray-800 rounded-lg p-3">
                            <p className="text-gray-300 text-sm mb-2">
                              "Tell me about a challenging technical problem you've solved recently."
                            </p>
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-[#A3E635] rounded-full flex items-center justify-center">
                                <span className="text-black text-xs font-bold">AI</span>
                              </div>
                              <span className="text-gray-400 text-xs">Sarah Chen, Founder</span>
                            </div>
                          </div>
                          <div className="bg-[#A3E635]/10 rounded-lg p-3 border border-[#A3E635]/30">
                            <p className="text-gray-300 text-sm">Your response...</p>
                            <div className="mt-2 flex items-center space-x-2">
                              <div className="w-2 h-2 bg-[#A3E635] rounded-full animate-pulse"></div>
                              <span className="text-[#A3E635] text-xs">Recording...</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* iPhone Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100">Mock Interview Simulation</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A3E635] mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Live mock interviews with an AI 'founder'</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A3E635] mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Real YC-style questions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A3E635] mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Select target startup & role</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Real-Time Feedback & Performance Analytics - Screenshot RIGHT, Text LEFT */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100">
                  Real-Time Feedback & Performance Analytics
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A3E635] mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Instant scoring</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A3E635] mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Pacing insights</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#A3E635] mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Improvement suggestions after each session and overall performance</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative mx-auto w-64 h-[520px]">
                  {/* iPhone Frame */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[3rem] border-4 border-gray-800 shadow-2xl">
                    {/* iPhone Screen */}
                    <div className="absolute top-4 left-4 right-4 bottom-4 bg-black rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="h-8 bg-gray-950 flex items-center justify-between px-6 text-white text-xs">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-[#A3E635] rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-6 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      {/* App Content */}
                      <div className="flex-1 bg-gray-950 p-4">
                        <div className="text-center mb-4">
                          <h4 className="text-[#A3E635] font-bold text-lg">Interview Score</h4>
                          <div className="text-4xl font-bold text-white mb-1">87</div>
                          <p className="text-gray-400 text-xs">Great performance!</p>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-gray-800 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-300 text-sm">Technical Skills</span>
                              <span className="text-[#A3E635] text-sm font-semibold">92%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-[#A3E635] h-2 rounded-full" style={{ width: "92%" }}></div>
                            </div>
                          </div>
                          <div className="bg-gray-800 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-300 text-sm">Communication</span>
                              <span className="text-[#A3E635] text-sm font-semibold">85%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-[#A3E635] h-2 rounded-full" style={{ width: "85%" }}></div>
                            </div>
                          </div>
                          <div className="bg-gray-800 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-300 text-sm">Problem Solving</span>
                              <span className="text-[#A3E635] text-sm font-semibold">90%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-[#A3E635] h-2 rounded-full" style={{ width: "90%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* iPhone Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Unique */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-100">Why We're Unique</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-[#A3E635] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">
                  Closest simulation of real YC AI startup interviews
                </h3>
                <p className="text-gray-400">
                  Our AI founders are trained on actual YC interview patterns and startup culture.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-[#A3E635] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">
                  Custom-built for full-stack web + AI engineers
                </h3>
                <p className="text-gray-400">
                  Tailored specifically for the skills and challenges facing modern AI-focused developers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-[#A3E635] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">
                  Designed for rapid, remote prep—start today, get better tomorrow
                </h3>
                <p className="text-gray-400">
                  No scheduling, no waiting. Practice anytime, anywhere, and see immediate improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-950/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Users className="w-16 h-16 text-[#A3E635] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
              Be one of the first 200 engineers on the waitlist!
            </h2>
            <p className="text-xl text-gray-200">
              Join an exclusive group of forward-thinking engineers preparing for the future of AI startups.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Zap className="w-12 h-12 text-[#A3E635] mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100">
              Ready to ace your next YC AI startup interview?
            </h2>

            <Card className="max-w-md mx-auto bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardContent className="p-6">
                <form onSubmit={(e) => handleWaitlistSubmit(e, true)} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={footerEmail}
                    onChange={(e) => setFooterEmail(e.target.value)}
                    required
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#A3E635]"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#A3E635] hover:bg-[#A3E635]/90 text-gray-900 font-semibold py-3"
                  >
                    {isSubmitting ? "Reserving..." : "Reserve My Spot"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 QuickQ. Built for engineers, by engineers. 🚀</p>
        </div>
      </footer>
    </div>
  )
}
