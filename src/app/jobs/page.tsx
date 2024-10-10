'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSignIcon, MapPinIcon, CalendarIcon, SearchIcon } from "lucide-react"
import { Separator } from '@radix-ui/react-select'
import { useRouter } from 'next/navigation'
import ListingLoading from '@/components/listing-loading'

export const mockTasks: Task[] = [
    {
        id: 1,
        title: "Implementing a Real-Time Chat System",
        description: "We need a skilled developer to implement a real-time chat system using WebSockets and Node.js.",
        budget: "$30/hour",
        category: "Backend Development",
        location: "Remote",
        posted: "1 hour ago",
        duration: "1 week",
        requiredSkills: ["Node.js", "WebSockets", "JavaScript"],
        clientName: "John Doe",
        clientRating: 4.5
    },
    {
        id: 2,
        title: "Building a Responsive UI Component Library",
        description: "Seeking a frontend developer to build a responsive UI component library using React and CSS.",
        budget: "$25/hour",
        category: "Frontend Development",
        location: "Remote",
        posted: "2 hours ago",
        duration: "2 weeks",
        requiredSkills: ["React", "CSS", "JavaScript"],
        clientName: "Jane Smith",
        clientRating: 4.2
    },
    {
        id: 3,
        title: "Optimizing Database Performance",
        description: "We require a database administrator to optimize the performance of our MySQL database.",
        budget: "$40/hour",
        category: "Database Administration",
        location: "Remote",
        posted: "3 hours ago",
        duration: "3 weeks",
        requiredSkills: ["MySQL", "Database Optimization", "SQL"],
        clientName: "Alice Johnson",
        clientRating: 4.7
    },
    {
        id: 4,
        title: "Developing a Machine Learning Model",
        description: "Looking for a data scientist to develop a machine learning model using Python and TensorFlow.",
        budget: "$50/hour",
        category: "Machine Learning",
        location: "Remote",
        posted: "4 hours ago",
        duration: "4 weeks",
        requiredSkills: ["Python", "TensorFlow", "Machine Learning"],
        clientName: "Bob Brown",
        clientRating: 4.3
    }
];

export type Task = {
    id: number;
    title: string;
    description: string;
    budget: string;
    category: string;
    location: string;
    posted: string;
    duration: string;
    requiredSkills: string[];
    clientName: string;
    clientRating: number;
}

const ListingPage = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [budgetFilter, setBudgetFilter] = useState('all');
    const router = useRouter();

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setTasks(mockTasks);
            setIsLoading(false);
        }, 2000);
    }, []);

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === 'all' || task.category === categoryFilter) &&
        (budgetFilter === 'all' || task.budget.includes(budgetFilter))
    );

    if (isLoading) {
        return <ListingLoading />;
    }

    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-2">
                    <div className="flex flex-col md:flex-row gap-4 items-end">
                        <div className="flex-grow">
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Tasks</label>
                            <div className="relative">
                                <Input
                                    id="search"
                                    type="text"
                                    placeholder="Search for tasks..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 bg-background"
                                />
                                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            </div>
                        </div>
                        <div className="w-full md:w-48">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                                <SelectTrigger id="category">
                                    <SelectValue placeholder="All Categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    <SelectItem value="Backend Development">Backend Development</SelectItem>
                                    <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                                    <SelectItem value="Database Administration">Database Administration</SelectItem>
                                    <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-full md:w-48">
                            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                            <Select value={budgetFilter} onValueChange={setBudgetFilter}>
                                <SelectTrigger id="budget">
                                    <SelectValue placeholder="All Budgets" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Budgets</SelectItem>
                                    <SelectItem value="$25">$25/hour</SelectItem>
                                    <SelectItem value="$30">$30/hour</SelectItem>
                                    <SelectItem value="$40">$40/hour</SelectItem>
                                    <SelectItem value="$50">$50/hour</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button
                            onClick={() => {
                                setSearchTerm('');
                                setCategoryFilter('all');
                                setBudgetFilter('all');
                            }}
                            variant="outline"
                        >
                            Clear Filters
                        </Button>
                    </div>
                </div>

                <Separator className="mb-8 bg-gray-300 h-[1px]" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTasks.map((task) => (
                        <Card key={task.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
                                <CardTitle className="text-xl font-bold truncate">{task.title}</CardTitle>
                                <Badge variant="secondary" className="mt-2 w-fit">
                                    {task.category}
                                </Badge>
                            </CardHeader>
                            <CardContent className="p-4">
                                <p className="text-gray-600 mb-4 line-clamp-3">{task.description}</p>
                                <div className="space-y-2 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <DollarSignIcon className="w-4 h-4 mr-2 text-green-500" />
                                        <span>Budget: {task.budget}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPinIcon className="w-4 h-4 mr-2 text-red-500" />
                                        <span>Location: {task.location}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="bg-gray-50 px-4 py-3 text-xs text-gray-500 flex justify-between items-center">
                                <div className="flex items-center">
                                    <CalendarIcon className="w-4 h-4 mr-1" />
                                    <span>Posted: {task.posted}</span>
                                </div>
                                <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600"
                                    onClick={() => {
                                        router.push(`/jobs/${task.id}`);
                                    }}
                                >
                                    View Details
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListingPage