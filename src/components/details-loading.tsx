import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const DetailsLoading = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          className="mb-4"
          disabled
        >
          ← Back to Listings
        </Button>

        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
            <div className="flex justify-between items-start">
              <div>
                <Skeleton className="h-8 w-64 mb-2" />
                <Skeleton className="h-6 w-32" />
              </div>
              <Skeleton className="h-10 w-28" />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <Skeleton className="w-5 h-5 mr-2" />
                  <Skeleton className="h-4 w-32" />
                </div>
              ))}
            </div>
            <Separator className="my-6" />
            <div>
              <Skeleton className="h-6 w-32 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="mt-6">
              <Skeleton className="h-6 w-40 mb-3" />
              <div className="flex flex-wrap gap-2">
                {[...Array(5)].map((_, index) => (
                  <Skeleton key={index} className="h-6 w-20" />
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 p-6">
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default DetailsLoading