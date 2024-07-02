type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container min-h-[75vh] w-full max-w-screen-2xl">
      {children}
    </div>
  );
}
