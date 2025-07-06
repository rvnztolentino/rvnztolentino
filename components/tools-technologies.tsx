import React from "react"

export default function ToolsTechnologies({ tools }: { tools: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Tools & Technologies</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map(tool => (
          <div
            key={tool}
            className="bg-white p-4 rounded-lg border border-gray-200"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  )
}