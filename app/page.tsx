import { Button } from "@/components/ui/button"

const state = true

export default function Home() {
  return (
    <div className="flex flex-col">
      <p className="text-4xl font-bold text-indigo-500">
        Hello Discord Clone
      </p>
      <Button>Click me</Button>
    </div>
  )
}
