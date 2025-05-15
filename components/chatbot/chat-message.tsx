import { Avatar } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface ChatMessageProps {
  message: string
  isBot: boolean
  timestamp: Date
}

export function ChatMessage({ message, isBot, timestamp }: ChatMessageProps) {
  return (
    <div className={cn("flex w-full gap-2 p-2", isBot ? "justify-start" : "justify-end")}>
      {isBot && (
        <Avatar className="h-8 w-8 bg-primary-100 text-primary-500 dark:bg-primary-900/30 dark:text-primary-400">
          <span className="text-xs font-medium">A</span>
        </Avatar>
      )}
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-3 py-2 text-sm",
          isBot
            ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
            : "bg-primary-500 text-white dark:bg-primary-600",
        )}
      >
        <div className="whitespace-pre-wrap">{message}</div>
        <div
          className={cn(
            "mt-1 text-right text-xs opacity-70",
            isBot ? "text-gray-500 dark:text-gray-400" : "text-primary-100",
          )}
        >
          {formatTime(timestamp)}
        </div>
      </div>
      {!isBot && (
        <Avatar className="h-8 w-8 bg-primary-500 text-white">
          <span className="text-xs font-medium">You</span>
        </Avatar>
      )}
    </div>
  )
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}
