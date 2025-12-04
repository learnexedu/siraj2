"use client"
import { useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { SmileIcon } from "lucide-react"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { EmojiPicker, EmojiPickerSearch, EmojiPickerContent, EmojiPickerFooter } from "@/components/ui/emoji-picker"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().optional(),
})

type TargetField = "title" | "description"

export function EmojiForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  // Track which field is currently active for emoji insertion
  const [activeField, setActiveField] = useState<TargetField>("title")

  // Track cursor position in inputs
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  // Insert emoji at cursor position in the active field
  const insertEmoji = (emoji: string) => {
    const field = activeField
    const currentValue = form.getValues(field) || ""

    let cursorPosition = 0
    if (field === "title" && titleRef.current) {
      cursorPosition = titleRef.current.selectionStart || currentValue.length
    } else if (field === "description" && descriptionRef.current) {
      cursorPosition = descriptionRef.current.selectionStart || currentValue.length
    }

    // Insert emoji at cursor position
    const newValue = currentValue.slice(0, cursorPosition) + emoji + currentValue.slice(cursorPosition)
    form.setValue(field, newValue, { shouldValidate: true, shouldDirty: true })

    // Focus back on the field after emoji insertion
    setTimeout(() => {
      if (field === "title" && titleRef.current) {
        titleRef.current.focus()
        titleRef.current.setSelectionRange(cursorPosition + emoji.length, cursorPosition + emoji.length)
      } else if (field === "description" && descriptionRef.current) {
        descriptionRef.current.focus()
        descriptionRef.current.setSelectionRange(cursorPosition + emoji.length, cursorPosition + emoji.length)
      }
    }, 0)
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Handle form submission
    alert(`Form submitted with title: ${values.title} and description: ${values.description}`)
  }

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-card rounded-lg shadow-xs border">
      <h2 className="text-2xl font-bold mb-6">Create New Item</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter title"
                      {...field}
                      ref={titleRef}
                      onFocus={() => setActiveField("title")}
                      className="flex-1"
                    />
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="icon" type="button" onClick={() => setActiveField("title")}>
                          <SmileIcon className="h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 w-fit" align="end">
                        <EmojiPicker className="h-[312px] w-[320px]" onEmojiSelect={({ emoji }) => insertEmoji(emoji)}>
                          <EmojiPickerSearch />
                          <EmojiPickerContent />
                          <EmojiPickerFooter />
                        </EmojiPicker>
                      </PopoverContent>
                    </Popover>
                  </div>
                </FormControl>
                <FormDescription>The title of your new item. Click the emoji button to add emojis.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Enter a description (optional)"
                      className="resize-none flex-1"
                      {...field}
                      ref={descriptionRef}
                      onFocus={() => setActiveField("description")}
                    />
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          type="button"
                          onClick={() => setActiveField("description")}
                        >
                          <SmileIcon className="h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 w-fit" align="end">
                        <EmojiPicker className="h-[312px] w-[320px]" onEmojiSelect={({ emoji }) => insertEmoji(emoji)}>
                          <EmojiPickerSearch />
                          <EmojiPickerContent />
                          <EmojiPickerFooter />
                        </EmojiPicker>
                      </PopoverContent>
                    </Popover>
                  </div>
                </FormControl>
                <FormDescription>
                  Provide additional details about this item. Click the emoji button to add emojis.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Create Item
          </Button>
        </form>
      </Form>
    </div>
  )
}
