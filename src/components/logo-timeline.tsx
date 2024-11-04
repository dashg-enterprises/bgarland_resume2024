import { clsx } from "clsx";

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative">
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-white/15 from-[2px] to-[2px] bg-[length:12px_100%]" />
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-white/5 from-[2px] to-[2px] bg-[length:12px_100%] group-last:hidden" />
      {children}
    </div>
  );
}

function Logo({
  label,
  src,
  className,
}: {
  label: string;
  src: string;
  className: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "absolute top-2 grid grid-cols-[1rem,1fr] items-center gap-2 whitespace-nowrap px-3 py-1",
        "rounded-full bg-gradient-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-inset ring-white/10",
        "[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:running] [animation-timing-function:linear] group-hover:[animation-play-state:running]"
      )}
    >
      <img alt="" src={src} className="size-4" />
      <span className="text-sm/6 font-medium text-white">{label}</span>
    </div>
  );
}

const rowData: { category: string; logo: string; name: string }[] = [
  {
    category: "coding-languages",
    logo: "./logo-timeline/node.svg",
    name: "Node",
  },
  {
    category: "coding-languages",
    logo: "./logo-timeline/ruby.svg",
    name: "Ruby",
  },
  {
    category: "coding-languages",
    logo: "./logo-timeline/python.svg",
    name: "Python",
  },
  {
    category: "coding-languages",
    logo: "./logo-timeline/csharp.svg",
    name: "C#",
  },
  {
    category: "coding-frameworks",
    logo: "./logo-timeline/react.svg",
    name: "React",
  },
  {
    category: "coding-frameworks",
    logo: "./logo-timeline/typescript.svg",
    name: "Typescript",
  },
  {
    category: "coding-frameworks",
    logo: "./logo-timeline/tailwind.svg",
    name: "Tailwind",
  },
  {
    category: "coding-frameworks",
    logo: "./logo-timeline/nextjs.svg",
    name: "Next.JS",
  },
  {
    category: "cloud-provider",
    logo: "./logo-timeline/aws.svg",
    name: "AWS",
  },
  {
    category: "cloud-provider",
    logo: "./logo-timeline/azure.svg",
    name: "Azure",
  },
  {
    category: "cloud-provider",
    logo: "./logo-timeline/terraform.svg",
    name: "Terraform",
  },
  { category: "cloud", logo: "./logo-timeline/eks.svg", name: "EKS" },
  {
    category: "cloud",
    logo: "./logo-timeline/kubernetes.svg",
    name: "Kubernetes",
  },
  { category: "cloud", logo: "./logo-timeline/docker.svg", name: "Docker" },

  {
    category: "database",
    logo: "./logo-timeline/postgres.svg",
    name: "Postgres",
  },
  {
    category: "database",
    logo: "./logo-timeline/sql.svg",
    name: "MySQL",
  },
  {
    category: "database",
    logo: "./logo-timeline/mongo.svg",
    name: "Mongo",
  },
  {
    category: "developer-tools",
    logo: "./logo-timeline/github-desktop.svg",
    name: "Github Desktop",
  },
  {
    category: "developer-tools",
    logo: "./logo-timeline/github.svg",
    name: "Github",
  },
  {
    category: "developer-tools",
    logo: "./logo-timeline/gitlab.svg",
    name: "Gitlab",
  },
  {
    category: "developer-tools",
    logo: "./logo-timeline/vscode.svg",
    name: "VS Code",
  },
  {
    category: "design-tools",
    logo: "./logo-timeline/photoshop.svg",
    name: "Photoshop",
  },
  {
    category: "design-tools",
    logo: "./logo-timeline/figma.svg",
    name: "Figma",
  },
  {
    category: "design-tools",
    logo: "./logo-timeline/sketch.svg",
    name: "Sketch",
  },
];

export function LogoTimeline() {
  const categoryList = new Set();

  rowData.forEach((datum) => {
    categoryList.add(datum.category);
  });

  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-1 pt-8 [container-type:inline-size]">
        {Array.from(categoryList).map((cat, categoryIndex) => {
          return (
            <Row key={categoryIndex + "row"}>
              {rowData
                .filter((datum) => datum.category === cat)
                .map((row, index) => {
                  return (
                    <Logo
                      key={row.name + index}
                      label={row.name}
                      src={row.logo}
                      className={`[animation-delay:-${
                        10 + index * 10
                      }s] [animation-duration:${
                        rowData.filter((datum) => datum.category === cat)
                          .length * 10
                      }s]`}
                    />
                  );
                })}
            </Row>
          );
        })}
      </div>
    </div>
  );
}
