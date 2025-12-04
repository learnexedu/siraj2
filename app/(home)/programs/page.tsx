// components
import Programs from "@/components/home/programs";
import { NotFoundError } from "@/components/shared/error/not-found-error";

// prisma
import { getAllPrograms } from "@/data/programs";

const Page = async () => {
  // get programs
  const programs = await getAllPrograms();

  // validate
  if (!programs) return <NotFoundError />;

  // return
  return <Programs programs={programs} />;
};

export default Page;
