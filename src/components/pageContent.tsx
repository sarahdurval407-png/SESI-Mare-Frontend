interface PageContentProps {
  children: React.ReactNode;
}

export default function PageContent({ children }: PageContentProps) {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 py-6 lg:px-10">
      {children}
    </div>
  );
}