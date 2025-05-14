import { NuqsAdapter } from 'nuqs/adapters/next/app';

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NuqsAdapter>{children}</NuqsAdapter>
    </>
  );
};
