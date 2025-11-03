import { Photo } from "@medusajs/icons";

type ThumbnailProps = {
  src?: string | null;
  alt?: string;
};

function normalizeMediaUrl(input?: string | null): string | undefined {
  if (!input) return undefined;

  try {
    // If absolute localhost -> rewrite to current origin + /api
    if (input.startsWith("http://localhost:9000/")) {
      const rest = input.replace("http://localhost:9000", "");
      const origin = typeof window !== "undefined" ? window.location.origin : "";
      return `${origin}/api${rest}`;
    }

    // If relative static/uploads without /api prefix -> prefix it
    if (input.startsWith("/static/") || input.startsWith("/uploads/")) {
      return `/api${input}`;
    }
  } catch (_) {
    // no-op fallback to input
  }

  return input;
}

export const Thumbnail = ({ src, alt }: ThumbnailProps) => {
  const normalized = normalizeMediaUrl(src || undefined);

  return (
    <div className="bg-ui-bg-component flex h-8 w-6 items-center justify-center overflow-hidden rounded-[4px]">
      {normalized ? (
        <img
          src={normalized}
          alt={alt}
          className="h-full w-full object-cover object-center"
        />
      ) : (
        <Photo className="text-ui-fg-subtle" />
      )}
    </div>
  );
};
