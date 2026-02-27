'use client'

import { HeroSection }       from '@/components/hero-section'
import { ProjectsSection }   from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { EducationSection }  from '@/components/education-section'
import { SkillsSection }     from '@/components/skills-section'
import { BlogSection }       from '@/components/blog-section'
import { StudioSection }     from '@/components/studio-section'
import { ContactSection }    from '@/components/contact-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      {/* <BlogSection /> */}
      <StudioSection />
      <ContactSection />
    </>
  )
}