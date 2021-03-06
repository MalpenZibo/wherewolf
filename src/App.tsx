import { pipe, constant } from "fp-ts/function";
import "./App.css";
import { useBuildConfigContext } from "./ConfigProvider";
import { Game } from "./Pages/Game";
import { Home } from "./Pages/Home";
import { Players } from "./Pages/Players";
import { Roles } from "./Pages/Roles";
import { foldLocation } from "./Router/RouterProvider";
import { RouterProvider, routing, useRouter } from "./routing";

function InternalApp(): JSX.Element {
  const router = useRouter();

  return pipe(
    router.current,
    foldLocation({
      Home: constant(<Home />),
      Roles: constant(<Roles />),
      Game: constant(<Game />),
      Players: constant(<Players />),
    })
  );
}

function App(): JSX.Element {
  const buildConfig = useBuildConfigContext();

  return (
    <RouterProvider
      basepath={buildConfig.basepath}
      useHashHistory
      routing={routing}
    >
      <InternalApp />
    </RouterProvider>
  );
}

export default App;
