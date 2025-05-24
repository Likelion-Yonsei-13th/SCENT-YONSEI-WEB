import { GlobalProvider } from '../../_common/providers/global-provider';

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalProvider>{children}</GlobalProvider>
    </>
  );
};

export default GlobalLayout;
