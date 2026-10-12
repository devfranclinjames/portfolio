import { Palette, Smartphone, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting intuitive interfaces and logical navigation that put the user first.",
  },
  {
    icon: Smartphone,
    title: "Responsive Layouts",
    description:
      "Designing mobile-first experiences that perform flawlessly across every device.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Designing with purpose,
              <span className="font-serif italic font-normal text-white">
                {" "}
                building with precision.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Web Designer with over 9 years of experience creating
                user-focused digital experiences for clients across medical,
                dental, optometry, chiropractic, and veterinary industries. My
                journey began with a curiosity for how design shapes the way
                people interact with the web, and it has grown into a deep
                expertise in UI/UX, responsive layout, and front-end
                development.
              </p>
              <p>
                I specialize in OctoberCMS, Webflow, HTML/CSS/SCSS, PHP,
                JavaScript, and SEO — delivering everything from full website
                migrations to polished, client-ready interfaces. My approach
                combines design thinking with technical execution, ensuring
                every project is functional, accessible, and visually
                compelling.
              </p>
              <p>
                When I'm not designing, you'll find me capturing the world with
                my Sony A7III, editing videos, and exploring art and creative
                design.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful designs that users love to
                use and businesses love to rely on."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};