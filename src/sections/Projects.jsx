import { ArrowUpRight, Globe } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Midtown Richmond Dentist — Before",
    description:
      "Original practice website with dated layout, cluttered navigation, and limited mobile responsiveness. Served as the baseline for a full design refresh and platform migration.",
    image: "/projects/midtown-before.png",
    tags: ["Legacy Site", "OctoberCMS", "Pre-Redesign"],
    link: "https://midtownrichmonddentist.com/",
  },
  {
    title: "Midtown Richmond Dentist — After",
    description:
      "Redesigned and migrated to Webflow with a modern layout, streamlined navigation, responsive breakpoints, and improved user experience for prospective patients.",
    image: "/projects/midtown-after.png",
    tags: ["Webflow", "UI/UX", "Responsive", "Migration"],
    link: "https://71836-1.webflow.io/",
  },
  {
    title: "Berkshire Dental Iowa — Before",
    description:
      "Original dental site with heavy imagery, inconsistent typography, and limited accessibility across devices. Baseline for full UI/UX and platform upgrade.",
    image: "/projects/berkshire-before.png",
    tags: ["Legacy Site", "OctoberCMS", "Pre-Redesign"],
    link: "https://berkshiredentaliowa.com/",
  },
  {
    title: "Berkshire Dental Iowa — After",
    description:
      "Rebuilt in Webflow with cleaner visual hierarchy, mobile-first layout, prominent call-to-action placement, and refined typography for a professional dental brand.",
    image: "/projects/berkshire-after.png",
    tags: ["Webflow", "UI/UX", "Responsive", "Migration"],
    link: "https://104288-1.webflow.io/",
  },
  {
    title: "Trude Lizares Shopify",
    description:
      "Shopify storefront with product listings, inventory management, and a refined shopping experience tailored to the brand's fashion identity.",
    image: "/projects/project1.png",
    tags: ["Shopify", "jQuery", "CSS", "Front-End"],
    link: "https://trudelizares.com/",
  },
  {
    title: "CebuVic Japanese Website",
    description:
      "Collaborative website project featuring structured content, clean layout, and custom front-end implementation for a Japanese-language audience.",
    image: "/projects/project4.png",
    tags: ["PHP", "JavaScript", "HTML/CSS"],
    link: "https://cebuvic.jp",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work — from full website redesigns and
            platform migrations to responsive storefronts and custom builds.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Link */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://www.youtube.com/@Franclinlim-localhost/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div> */}
      </div>
    </section>
  );
};