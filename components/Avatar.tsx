import { cn } from '@/lib/utils';

type AvatarProps = {
  className?: string;
  children?: React.ReactNode;
  props?: React.HTMLAttributes<HTMLDivElement>;
};

const Avatar = ({ className, children, ...props }: AvatarProps) => {
  return (
    <div
      className={cn(
        'size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Avatar;
