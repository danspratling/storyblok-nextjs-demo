import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "../Image";

const TeamMember = ({ full_slug, content }) => {
  const { name, role, profile_picture } = content;

  return (
    <Link href={full_slug}>
      <a className="mb-4 group">
        <Image
          src={profile_picture.filename}
          alt={profile_picture.alt}
          width={310}
          height={310}
          className="mb-4"
        />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg md:text-xl">{name}</p>
            <p className="font-light text-gray-500 dark:text-gray-400">
              {role}
            </p>
          </div>
          <ArrowRightIcon className="w-6 ml-2 text-gray-400 opacity-0 transition duration-200 group-hover:opacity-100" />
        </div>
      </a>
    </Link>
  );
};

export default TeamMember;
