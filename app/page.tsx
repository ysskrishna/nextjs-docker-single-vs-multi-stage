import config from "@/common/config"
import {
  CameraIcon,
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CreatorPage() {
  return (
    <>
      <div className="py-10 min-h-screen">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] items-stretch min-h-[70vh]">
          {/* Profile Card */}
          <Card className="h-full flex flex-col">
            <CardHeader className="text-center">
              <div className="mx-auto relative w-40 h-40 mb-4 overflow-hidden rounded-full ring-4 ring-primary/10">
                <img
                  src={config.author.image}
                  alt={config.author.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle className="text-2xl font-bold">{config.author.name}</CardTitle>
              <CardDescription className="text-md mb-1">
                <span className="text-xl text-muted-foreground">@ysskrishna</span>
              </CardDescription>
              <CardDescription className="text-md">
                Full Stack Developer <span className="mx-1">|</span> Founding Engineer <span className="mx-1">|</span> IITM Graduate
              </CardDescription>
              <div className="mt-2 flex items-center justify-center space-x-1">
                <span>From</span>
                <img
                  src="https://flagicons.lipis.dev/flags/4x3/in.svg"
                  width="15"
                  alt="India"
                  className="mx-1"
                />
                <span>Bengaluru, India</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex justify-center space-x-4">
                  <Link href={config.author.github} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" aria-label="GitHub">
                      <GitHubLogoIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href={config.author.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" aria-label="LinkedIn">
                      <LinkedInLogoIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href={`mailto:${config.author.email}`}>
                    <Button size="icon" variant="outline" aria-label="Email">
                      <EnvelopeClosedIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href={config.author.url} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" aria-label="Website">
                      <ExternalLinkIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href={config.author.youtube} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" aria-label="YouTube">
                      <CameraIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium text-sm mb-2 text-muted-foreground">CONTACT</h3>
                  <div className="grid gap-2">
                    <Link href={`mailto:${config.author.email}`} className="text-sm hover:underline flex items-center gap-2">
                      <EnvelopeClosedIcon className="h-4 w-4" />
                      {config.author.email}
                    </Link>
                    <Link href={config.author.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline flex items-center gap-2">
                      <ExternalLinkIcon className="h-4 w-4" />
                      Personal Website
                    </Link>
                    <Link href={config.author.github} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline flex items-center gap-2">
                      <GitHubLogoIcon className="h-4 w-4" />
                      GitHub
                    </Link>
                    <Link href={config.author.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline flex items-center gap-2">
                      <LinkedInLogoIcon className="h-4 w-4" />
                      LinkedIn
                    </Link>
                    <Link href={config.author.productHunt} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline flex items-center gap-2">
                      <span className="text-sm font-bold w-4 h-4 flex items-center justify-center">P</span>
                      Product Hunt
                    </Link>
                    <Link href={config.author.youtube} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline flex items-center gap-2">
                      <CameraIcon className="h-4 w-4" />
                      YouTube
                    </Link>

                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Area */}
          <div className="space-y-8 h-full flex flex-col">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  {config.author.bio}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🔧 Tech Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {config.techStack.languages.map((tech) => (
                      <Badge key={tech.name} variant="secondary" className="flex items-center gap-1.5 px-2.5 py-1">
                        <img
                          src={`https://cdn.simpleicons.org/${tech.logo}/000`}
                          alt={tech.name}
                          className="h-3.5 w-3.5 dark:invert"
                        />
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {config.techStack.technologies.map((tech) => (
                      <Badge key={tech.name} variant="secondary" className="flex items-center gap-1.5 px-2.5 py-1">
                        <img
                          src={`https://cdn.simpleicons.org/${tech.logo}/000`}
                          alt={tech.name}
                          className="h-3.5 w-3.5 dark:invert"
                        />
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {config.techStack.databases.map((tech) => (
                      <Badge key={tech.name} variant="secondary" className="flex items-center gap-1.5 px-2.5 py-1">
                        <img
                          src={`https://cdn.simpleicons.org/${tech.logo}/000`}
                          alt={tech.name}
                          className="h-3.5 w-3.5 dark:invert"
                        />
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Cloud & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    {config.techStack.cloudDevOps.map((tech) => (
                      <Badge key={tech.name} variant="secondary" className="flex items-center gap-1.5 px-2.5 py-1">
                        <img
                          src={`https://cdn.simpleicons.org/${tech.logo}/000`}
                          alt={tech.name}
                          className="h-3.5 w-3.5 dark:invert"
                        />
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
} 