// components
import ProgramDetails from "@/components/home/programs/program";
import { NotFoundError } from "@/components/shared/error/not-found-error";

// prisma data
import { getProgramById } from "@/data/programs";

// props
interface Props {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: Props) => {
  // id
  const { id } = await params;

  // program
  const program = await getProgramById(id);

  // validate
  if (!program) return <NotFoundError />;

  // details
  return <ProgramDetails program={program} />;
};

export default Page;
