import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const ListingLoading = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-2">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-grow">
              <Skeleton className="h-5 w-24 mb-1" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="w-full md:w-48">
              <Skeleton className="h-5 w-16 mb-1" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="w-full md:w-48">
              <Skeleton className="h-5 w-12 mb-1" />
              <Skeleton className="h-10 w-full" />
            </div>
            <Skeleton className="h-10 w-28" />
          </div>
        </div>

        <Separator className="mb-8 bg-gray-300 h-[1px]" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/4" />
              </CardHeader>
              <CardContent className="p-4">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
                <div className="space-y-2 mt-4">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-8 w-24" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListingLoading