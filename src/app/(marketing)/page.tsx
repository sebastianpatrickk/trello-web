import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function MarketingPage() {
  return (
    <section className="container flex max-w-6xl flex-col items-center pb-8 pt-6 md:py-8 ">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
        <h1 className="text-balance text-3xl font-bold md:text-5xl">
          Trello brings all your tasks, teammates, and tools together
        </h1>
        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Keep everything in the same place—even if your team isn’t.
        </p>
        {/* Form Component for sing up */}
        <Link className={buttonVariants()} href="/signup">
          Sign up - it’s free!
        </Link>
      </section>
    </section>
  );
}
