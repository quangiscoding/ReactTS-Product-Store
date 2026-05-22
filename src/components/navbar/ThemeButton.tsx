import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice.ts";
import type { RootState } from "../../app/store.ts";

import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="btn btn-secondary"
    >
      {mode === "light" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
