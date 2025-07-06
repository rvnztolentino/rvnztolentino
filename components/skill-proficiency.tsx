import React from "react"

type Skill = {
  name: string
  percent: number
}

type SkillProficiencyProps = {
  skills: Skill[]
}

export default function SkillProficiency({ skills }: SkillProficiencyProps) {
  const sortedSkills = [...skills].sort((a, b) => b.percent - a.percent)  // sort skills by percent descending
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Skill Proficiency</h3>
      <div className="space-y-6">
        {sortedSkills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full">
              <div
                className="h-2 bg-black rounded-full transition-all duration-500"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}