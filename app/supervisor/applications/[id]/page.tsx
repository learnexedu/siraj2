'use client'

import { ApplicationReview } from '@/components/management/supervisor/application-review'

interface PageProps {
  params: { id: string }
}

export default function ApplicationReviewPage({ params }: PageProps) {
  return <ApplicationReview applicationId={params.id} />
}
