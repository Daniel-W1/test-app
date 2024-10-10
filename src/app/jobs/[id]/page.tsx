'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { DollarSignIcon, MapPinIcon, CalendarIcon, ClockIcon, UserIcon } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { mockTasks, Task } from '../page'
import DetailsLoading from '@/components/details-loading'

export default function TaskDetailsPage({ params }: { params: { id: string } }) {
    const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [task, setTask] = useState<Task | null>(null)
    const router = useRouter()
    const id = params.id

    useEffect(() => {
        setIsLoading(true)

        setTimeout(() => {
            const currentTask: Task | undefined = mockTasks.find((task) => task.id === parseInt(id!))
            if (currentTask) {
                setTask(currentTask)
            } else {
                console.log('Task not found', id)
                router.push('/jobs')
            }
            setIsLoading(false)
        }, 2000)
    }, [id, router])

    if (isLoading) {
        return <DetailsLoading />
    }

    const handleApply = (event: React.FormEvent) => {
        event.preventDefault()
        setIsApplyDialogOpen(false)
    }

    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <Button
                    variant="ghost"
                    className="mb-4"
                    onClick={() => router.back()}
                >
                    ← Back to Listings
                </Button>

                <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-3xl font-bold mb-2">{task?.title}</CardTitle>
                                <Badge variant="secondary" className="text-sm">
                                    {task?.category}
                                </Badge>
                            </div>
                            <Dialog open={isApplyDialogOpen} onOpenChange={setIsApplyDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button className="bg-white text-blue-600 hover:bg-blue-50">
                                        Apply Now
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Apply for {task?.title}</DialogTitle>
                                    </DialogHeader>
                                    <form onSubmit={handleApply} className="space-y-4">
                                        <div>
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input id="name" required />
                                        </div>
                                        <div>
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" required />
                                        </div>
                                        <div>
                                            <Label htmlFor="coverLetter">Cover Letter</Label>
                                            <Textarea id="coverLetter" required />
                                        </div>
                                        <Button type="submit">Submit Application</Button>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <div className="flex items-center text-gray-600">
                                    <DollarSignIcon className="w-5 h-5 mr-2 text-green-500" />
                                    <span>Budget: {task?.budget}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <MapPinIcon className="w-5 h-5 mr-2 text-red-500" />
                                    <span>Location: {task?.location}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <CalendarIcon className="w-5 h-5 mr-2 text-blue-500" />
                                    <span>Posted: {task?.posted}</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center text-gray-600">
                                    <ClockIcon className="w-5 h-5 mr-2 text-purple-500" />
                                    <span>Duration: {task?.duration}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <UserIcon className="w-5 h-5 mr-2 text-yellow-500" />
                                    <span>Client: {task?.clientName}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <span className="mr-2">★</span>
                                    <span>Client Rating: {task?.clientRating.toFixed(1)}</span>
                                </div>
                            </div>
                        </div>
                        <Separator className="my-6" />
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Description</h3>
                            <p className="text-gray-600 mb-6">{task?.description}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Required Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {task?.requiredSkills.map((skill, index) => (
                                    <Badge key={index} variant="outline">{skill}</Badge>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 p-6">
                        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" onClick={() => setIsApplyDialogOpen(true)} >
                            Apply for This Task
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}