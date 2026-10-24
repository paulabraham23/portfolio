import Image from "next/image";
import type { Media } from "@/content/site";

export function MediaBlock({ media, priority = false }: { media: Media; priority?: boolean }) {
  return (
    <figure className="m-0">
      <div className="media-frame">
        {media.kind === "image" ? (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={priority}
            className="object-cover"
          />
        ) : (
          <div className="media-placeholder">
            <strong>{media.label}</strong>
            {media.caption ? <span>{media.caption}</span> : null}
          </div>
        )}
      </div>
      {media.caption && media.kind === "image" ? (
        <figcaption className="mt-3 text-sm text-[var(--fg-subtle)]">{media.caption}</figcaption>
      ) : null}
    </figure>
  );
}
