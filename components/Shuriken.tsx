interface Props {
    className?: string;
}

export const Shuriken = ({ className = '' }: Props) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 0L33.33 33.33L0 50L33.33 66.67L50 100L66.67 66.67L100 50L66.67 33.33L50 0ZM41.665 41.665L50 25L58.335 41.665L75 50L58.335 58.335L50 75L41.665 58.335L25 50L41.665 41.665Z"
        />
    </svg>
);
