interface PageProps {
  params: Promise<{ step: string }>;
}

export default async function Page({ params }: PageProps) {
  const step = (await params).step;

  return <div>hello {step}</div>;
}
