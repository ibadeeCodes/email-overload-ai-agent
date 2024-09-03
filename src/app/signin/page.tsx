'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Search, User, BarChart, Inbox, Send, Star, Trash } from 'lucide-react'

export default function SignUpPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle sign up logic here
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left side - Dashboard Preview */}
            <div className="hidden lg:flex lg:w-1/2 bg-white p-8 flex-col">
                <div className="flex items-center mb-8">
                    <Mail className="h-8 w-8 text-blue-600 mr-2" />
                    <h1 className="text-2xl font-bold text-gray-800">AI Email Manager</h1>
                </div>
                <Tabs defaultValue="dashboard" className="flex-grow">
                    <TabsList className="mb-4">
                        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                        <TabsTrigger value="transactions">Inbox</TabsTrigger>
                        <TabsTrigger value="investment">Analytics</TabsTrigger>
                    </TabsList>
                    <TabsContent value="dashboard" className="flex-grow">
                        <Card>
                            <CardContent className="p-6">
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="bg-blue-100 p-4 rounded-lg">
                                        <h3 className="text-sm font-medium text-blue-800">Total Emails</h3>
                                        <p className="text-2xl font-bold text-blue-900">1,342</p>
                                        <span className="text-xs text-blue-700">+15% from last week</span>
                                    </div>
                                    <div className="bg-green-100 p-4 rounded-lg">
                                        <h3 className="text-sm font-medium text-green-800">Processed</h3>
                                        <p className="text-2xl font-bold text-green-900">1,123</p>
                                        <span className="text-xs text-green-700">98% success rate</span>
                                    </div>
                                    <div className="bg-purple-100 p-4 rounded-lg">
                                        <h3 className="text-sm font-medium text-purple-800">Time Saved</h3>
                                        <p className="text-2xl font-bold text-purple-900">5.2 hrs</p>
                                        <span className="text-xs text-purple-700">This week</span>
                                    </div>
                                </div>
                                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                                    <BarChart className="h-24 w-24 text-gray-400" />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>

            {/* Right side - Sign Up Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <Card className="w-full max-w-md">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Sign Up to AI Email Manager</h2>
                        <p className="text-center text-gray-600 mb-6">
                            Manage your inbox efficiently with AI-powered assistance
                        </p>
                        {/* <form onSubmit={handleSignUp} className="space-y-4">
                            <div>
                                <Input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full"
                                />
                            </div>
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Sign Up
                            </Button>
                        </form> */}
                        <div className="mt-4 text-center">
                            <span className="text-gray-600">Sign up with</span>
                            <div className="flex justify-center mt-2 space-x-2">
                                <Button
                                    onClick={() => signIn('google')}
                                    variant="outline"
                                    size="icon"
                                >
                                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"
                                        />
                                        <path d="M1 1h22v22H1z" fill="none" />
                                    </svg>
                                </Button>
                                {/* <Button variant="outline" size="icon">
                                    <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </Button> */}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}