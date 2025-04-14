import { cn } from "@/lib/utils"

interface TiltedScrollItem {
  id: string;
  text: string;
}

interface TiltedScrollProps {
  items?: TiltedScrollItem[];
  className?: string;
}

export function TiltedScroll({ 
  items = defaultItems,
  className 
}: TiltedScrollProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_5rem),linear-gradient(to_left,transparent,black_5rem),linear-gradient(to_bottom,transparent,black_5rem),linear-gradient(to_top,transparent,black_5rem)]">
        <div className="grid h-[250px] w-[300px] gap-5 animate-skew-scroll grid-cols-1">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "group flex items-center gap-2 cursor-pointer rounded-md border p-4 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl",
                index % 4 === 0 && "border-jethro-blue/40 bg-gradient-to-b from-jethro-blue/10 to-jethro-blue/20",
                index % 4 === 1 && "border-jethro-gold/40 bg-gradient-to-b from-jethro-gold/10 to-jethro-gold/20",
                index % 4 === 2 && "border-jethro-terracotta/40 bg-gradient-to-b from-jethro-terracotta/10 to-jethro-terracotta/20",
                index % 4 === 3 && "border-jethro-sage/40 bg-gradient-to-b from-jethro-sage/10 to-jethro-sage/20"
              )}
            >
              <CheckCircleIcon 
                className={cn(
                  "h-6 w-6 mr-2 transition-colors",
                  index % 4 === 0 && "stroke-jethro-blue/60 group-hover:stroke-jethro-blue",
                  index % 4 === 1 && "stroke-jethro-gold/60 group-hover:stroke-jethro-gold",
                  index % 4 === 2 && "stroke-jethro-terracotta/60 group-hover:stroke-jethro-terracotta",
                  index % 4 === 3 && "stroke-jethro-sage/60 group-hover:stroke-jethro-sage"
                )}
              />
              <p className="text-white transition-all group-hover:text-white group-hover:font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

const defaultItems: TiltedScrollItem[] = [
  { id: "1", text: "Item 1" },
  { id: "2", text: "Item 2" },
  { id: "3", text: "Item 3" },
  { id: "4", text: "Item 4" },
  { id: "5", text: "Item 5" },
  { id: "6", text: "Item 6" },
  { id: "7", text: "Item 7" },
  { id: "8", text: "Item 8" },
]