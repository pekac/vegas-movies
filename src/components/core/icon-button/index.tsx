export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  alt: string;
  title: string;
}

export function IconButton({ alt, src, title, ...rest }: Props) {
  return (
    <button className="bg-none" type="button">
      <img alt={alt} src={src} title={title} />
    </button>
  );
}
