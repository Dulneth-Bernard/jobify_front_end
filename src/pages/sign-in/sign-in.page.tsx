import { SignIn } from "@clerk/clerk-react";

function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn afterSignInUrl={"/"} signUpUrl="/sign-up"   />
      {/* Url to sighnin  sighnupUrl, if they dotn have account we list create account */}
    </div>
  );
}

export default SignInPage;
