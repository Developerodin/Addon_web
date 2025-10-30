import { Photo } from "@medusajs/icons";
import { coerceStaticUrlToOrigin } from "../../utils/url";

type ThumbnailProps = {
  src?: string | null;
  alt?: string;
};

export const Thumbnail = ({ src, alt }: ThumbnailProps) => {
  const normalized = coerceStaticUrlToOrigin(src);
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
