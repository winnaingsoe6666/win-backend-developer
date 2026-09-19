import { useEffect, useState } from "react";
import { Sun, Moon, Sunset, Monitor } from "lucide-react";

type Theme = "system" | "light" | "dark" | "sunset";

function resolve(theme: Theme): "light" | "dark" | "sunset" {
  if (theme !== "system") return theme;
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function apply(theme: Theme) {
  const r = resolve(theme);
  const root = document.documentElement;
  root.classList.remove("theme-dark", "theme-light", "theme-sunset");
  root.classList.add(`theme-${r}`);
  root.setAttribute("data-theme", theme);

  // Keep the mobile browser chrome (address bar) in sync with the active theme.
  // Read the resolved color straight off <body> instead of hardcoding per-theme
  // hex values, so this never drifts from the actual CSS tokens in styles.css.
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    const bg = getComputedStyle(document.body).backgroundColor;
    if (bg) meta.setAttribute("content", bg);
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme | null) ?? "system";
    setTheme(stored);
    setMounted(true);
    // Sync theme-color meta with whatever the inline boot script already applied.
    apply(stored);
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      if ((localStorage.getItem("theme") as Theme | null) === "system") apply("system");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function pick(next: Theme) {
    setTheme(next);
    localStorage.setItem("theme", next);
    apply(next);
  }

  const options: { value: Theme; label: string; Icon: typeof Sun }[] = [
    { value: "system", label: "Auto", Icon: Monitor },
    { value: "light", label: "Light", Icon: Sun },
    { value: "dark", label: "Dark", Icon: Moon },
    { value: "sunset", label: "Sunset", Icon: Sunset },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className="inline-flex items-center gap-0.5 rounded-full border border-border bg-card/40 p-0.5 backdrop-blur"
    >
      {options.map(({ value, label, Icon }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => pick(value)}
            className={`grid size-7 place-items-center rounded-full transition-all ${
              active
                ? "bg-primary text-primary-foreground ring-signal"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
            }`}
          >
            <Icon className="size-3.5" strokeWidth={2} />
          </button>
        );
      })}
    </div>
  );
}
