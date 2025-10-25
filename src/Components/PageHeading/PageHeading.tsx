type BreadcrumbItem = {
    label: string;
    link?: string;
    active?: boolean;
};

const PageHeading = ({
    title,
    breadcrumb,
}: {
    title?: string;
    breadcrumb: BreadcrumbItem[];
}) => {
    return (
        <div className=" z-10 text-left px-2">
            <div className="flex py-2 space-x-2 text-lg mb-8">
                {breadcrumb?.map((item, idx) => (
                    <span key={idx}>
                        {idx > 0 && <span className="mx-1">/</span>}
                        <span style={{ color: item.active ? "var(--primary-color)" : "black" }}>
                            {item.link ? (
                                <a href={item.link} className="hover:underline">
                                    {item.label}
                                </a>
                            ) : (
                                item.label
                            )}
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PageHeading;
