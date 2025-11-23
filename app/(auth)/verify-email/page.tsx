// handlers
import { checkToken } from "@/handlers/auth/verify";

// components
import { NotFoundError } from "@/components/error/not-found-error";
import { EmailVerifyForm } from "@/components/auth/email-verify-form";

// props
type Props = {
  searchParams: Promise<{
    token?: string;
  }>;
};

export default async function VerifyEmailPage({ searchParams }: Props) {
  // url params
  const { token } = await searchParams;

  // validate
  if (!token) return <NotFoundError />;

  // check token
  const validate = await checkToken(token);

  // validate
  if (!validate.email || !validate.name || !validate.otp)
    return <NotFoundError />;

  return (
    <EmailVerifyForm
      name={validate.name}
      email={validate.email}
      otp={validate.otp}
    />
  );
}
