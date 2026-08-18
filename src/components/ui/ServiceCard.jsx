

export default function ServiceCard({ title, description, Icon}) {
    return (
        <article className="sercard bg-wavy-blue md:w-[23%] rounded-2xl h-25 mb-5 flex items-center justify-between md:flex-col md:h-65 md:shadow-2xl  ">
            <div className=" w-[30%] h-full md:h-[35%] lg:h-[50%] md:rounded-full md:bg-wavy-blue border-l-4 border-primary flex items-center justify-center md:border-0">
                <Icon className="w-15 h-15 text-gold" />
            </div>
            <div className="w-[70%] md:w-full flex flex-col justify-between md:items-center h-full md:border-t-2 md:border-primary-dark md:h-[65%] lg:h-[50%] p-1.5">
                <h3 className="font-bold text-sm text-primary-dark md:text-lg">{title}</h3>
                <p className="text-sm text-justify text-primary-dark md:text-[15px]">{description}</p>
            </div>
        </article>
    )
}
