import clsx from "clsx";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  alt?: string;
  classes?: string;
  src: string;
  title?: string;
}

export function IconButton({
  alt = "",
  classes = "",
  src,
  title = "",
  ...rest
}: Props) {
  return (
    <button className={clsx("bg-none", classes)} type="button" {...rest}>
      <img alt={alt} src={src} title={title} />
    </button>
  );
}
