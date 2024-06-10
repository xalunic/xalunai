import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Xalunics AI Chatbot V1
        </h1>
        <p className="leading-normal text-muted-foreground">
          Say hi to Xalunai Xalunics AI chatbot it's there to assist you with your daily tasks. Made mainly by {' '}
          <ExternalLink href="https://youtube.com/@DevBailey">Xalunic</ExternalLink>, and was sponsored by{' '}
          <ExternalLink href="https://kukiku.org">
          .
        </p>
      </div>
    </div>
  )
}
