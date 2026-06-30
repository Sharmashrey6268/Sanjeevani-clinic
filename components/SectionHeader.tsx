type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-4xl text-center">
      {eyebrow && (
        <p
          className="
            mb-4
            text-xl
            sm:text-2xl
            md:text-3xl
            font-extrabold
            tracking-wide
            text-pink-700
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-black
          tracking-tight
          text-brand-ink
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-5
            text-base
            sm:text-lg
            md:text-xl
            leading-8
            text-slate-600
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}