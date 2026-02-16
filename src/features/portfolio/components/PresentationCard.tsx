import Image from "next/image";

interface PresentationCardProps {
  title: string;
  image: string;
  location: string;
  role: string;
  technologies?: string[];
  status?: "active" | "inactive";
}

export default function PresentationCard({
  title,
  image,
  location,
  role,
  technologies,
  status = "active",
}: PresentationCardProps) {
  return (
    <div
      className={`justify-between flex flex-col items-stretch px-8 pb-5 border rounded-xl shadow-md dark:shadow-neutral-900 dark:border-neutral-800 hover:shadow-lg transition-shadow duration-300 ${status === "inactive" ? "opacity-50 pointer-events-none" : ""}`}
    >
      <div className="flex flex-row items-center justify-between pt-5 pr-5">
        <div>
          <h3 className="">{title}</h3>
          <p className="text-sm font-bold">{role}</p>
        </div>
        <div className="">
          <p className="text-sm">{location}</p>
        </div>
        <Image
          src={image}
          alt={title}
          width={70}
          height={70}
          className="w-fit border-2 rounded-3xl border-gray-300 shadow-sm object-cover dark:border-gray-600 "
        />
      </div>
      <div className="flex items-center justify-start text-sm">
        <div></div>
        {technologies && technologies.length > 0 && (
          <div className="mt-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
