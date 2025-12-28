const SocialIcon = ({ href, icon: Icon }) => (
    <li className="inline-block">
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
        relative
        inline-flex items-center justify-center
        w-10 h-10
        text-[1.2em]
        bg-white/[0.972]
        rounded-full
        text-heading
        transition-all duration-500
        before:content-['']
        before:absolute
        before:top-0
        before:left-0
        before:w-full
        before:h-full
        before:rounded-full
        before:bg-muted
        before:transition-all
        before:duration-500
        before:scale-90
        before:-z-10
        hover:before:scale-110
        hover:before:shadow-[0_0_15px_var(--color-heading)]
        hover:text-heading
        hover:shadow-[0_0_5px_var(--color-heading)]
        hover:[text-shadow:0_0_2px_var(--color-heading)]
      "
        >
            <Icon className="text-heading" />
        </a>
    </li>
);

export default SocialIcon;
