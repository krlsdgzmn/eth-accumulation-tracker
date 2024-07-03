type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container min-h-screen w-full max-w-screen-2xl">
      {children}
    </div>
  );
}
