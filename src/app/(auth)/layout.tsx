export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="container flex min-h-screen items-center justify-center">
      {children}
    </main>
  );
}
