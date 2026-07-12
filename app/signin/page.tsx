import Link from "next/link";
import FormInput from "@/app/components/FormInput";
import Button from "@/app/components/Button";

export default function SignInPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#141414] to-black
           bg-[url('/images/backgrounds/signin-bg.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/60" />
      <nav className="absolute top-0 w-full px-4 md:px-12 py-4">
        <span className="text-netflixRed text-3xl font-bold">NETFLIX</span>
      </nav>
      <div className="relative z-10 bg-black/75 p-8 md:p-16 rounded w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Sign In</h1>
        <form className="space-y-4">
          <FormInput type="text" placeholder="Email or phone number" />
          <FormInput type="password" placeholder="Password" />
          <Link href="/profiles">
            <Button type="button" className="w-full py-3">Sign In</Button>
          </Link>
        </form>
        <div className="flex justify-between text-sm text-gray-400 mt-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Remember me
          </label>
          <span className="hover:underline cursor-pointer">Need help?</span>
        </div>
        <p className="text-gray-400 mt-8">
          New to Netflix?{" "}
          <Link href="/" className="text-white hover:underline">Sign up now</Link>.
        </p>
      </div>
    </div>
  );
}