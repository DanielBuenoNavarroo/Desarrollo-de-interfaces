import { FC } from "react";
import { LeftContainer, RigthContainer } from "../containers";

const Layout: FC = () => {
  return (
    <main className="w-screen max-h-screen h-screen flex-1 flex items-start justify-start">
      {/* left section */}
      <LeftContainer />
      {/* rigth section */}
      <RigthContainer />
    </main>
  );
};

export default Layout;
