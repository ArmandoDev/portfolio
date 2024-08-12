export default function Article({ articleId, children, className }) {
  return (
    <article
      id={articleId}
      className={`flex flex-col gap-5 items-center justify-center min-h-dvh ${className}`}
    >
      {children}
    </article>
  );
}
