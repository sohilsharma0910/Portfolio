import { HackathonCard } from "@/components/hackathon-card";
import { CertificationCard } from "@/components/certification-card";
import ContactSection from "@/components/ContactSection";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my learning phase, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
            <section id="certifications">
  <div className="space-y-12 w-full py-12">
    <BlurFade delay={BLUR_FADE_DELAY * 13}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Certifications
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            IBM Certified Professional Badges
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Verified IBM certifications in web technologies, cloud computing,
            DevOps, and AI fundamentals.
          </p>
        </div>
      </div>
    </BlurFade>

    <BlurFade delay={BLUR_FADE_DELAY * 14}>
      <CertificationCard
        certifications={[
          {
            title: "Web Development using HTML",
            image: "/w.png",
            href: "https://courses.jecrc.skillsnetwork.site/certificates/e86809eb2abb443fb92b39ca56619fdb",
          },
          {
            title: "JavaScript",
            image: "/js.png",
            href: "https://courses.jecrc.skillsnetwork.site/certificates/e1a7eb6f36e1469baf47ffe2ea321467",
          },
          {
            title: "Node.js",
            image: "/n.png",
            href: "https://courses.jecrc.skillsnetwork.site/certificates/49f83c39496549f79b9f81d2c027e8db",
          },
          {
            title: "IBM Cloud Fundamentals",
            image: "/icf.png",
            href: "https://courses.jecrc.skillsnetwork.site/certificates/3a10828d18d64f69b3fc6b6d8a52e1e2",
          },
          {
            title: "Web Services",
            image: "/ws.png",
            href: "https://courses.jecrc.skillsnetwork.site/certificates/8411f15fe2b64bae97ed41052f0b1267",
          },
          {
            title: "Spring Framework",
            image: "/s.png",
            href: "https://courses.jecrc.skillsnetwork.site/certificates/2470c4bd23c1433b9f4ee37f4ae371b1",
          },
          {
            title: "REST API",
            image: "/r.png",
            href: "https://courses.jecrc.skillsnetwork.site/certificates/7f2ee171573347cba4c3b943ab1f9762",
          },
          {
            title: "Angular.js",
            image: "/ang.png",
            href: "https://courses.jecrc.skillsnetwork.site/certificates/bbef5abcf64d4c4b963d2d80fea4fd57",
          },
          {
            title: "Design Thinking",
            image: "/dt.png",
            href: "https://courses.jecrc.skillsnetwork.site/certificates/951d1a96ee2345c5892bd172ee321403",
          },
          {
            title: "Docker & Kubernetes",
            image: "/dk.png",
            href: "https://courses.jecrc.skillsnetwork.site/certificates/9a59a763e9d248989f8f508ed5837e26",
          },
          {
            title: "DevOps Fundamentals",
            image: "/dev.png",
            href: "https://courses.jecrc.skillsnetwork.site/certificates/3bff85fd73364249afd4717b7ce361b4",
          },
          {
            title: "Deployment of Private Cloud",
            image: "/dpc.png",
            href: "https://courses.jecrc.skillsnetwork.site/certificates/4e172a361892478b8b23e8d10b4d3533",
          },
          {
            title: "IBM Watson Studio",
            image: "/iws.png",
            href: "https://courses.jecrc.skillsnetwork.site/certificates/22226f37877b4620892b1234cf107319",
          },
        ]}
      />
    </BlurFade>
  </div>
</section>
      {/* <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on LinkedIn
                </Link>{" "}
                and I&apos;ll respond you soon.
              </p>
            </div>
          </BlurFade>
        </div>
      </section> */}
       <ContactSection />
    </main>
  );
}
