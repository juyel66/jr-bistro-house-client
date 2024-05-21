

const SectionsTitle = ({heading, subHading}) => {
    return (
        <div className="lg:w-[40%] text-center mx-auto mb-5">
            <p className="text-yellow-600">---{heading}---</p>
            <h1 className="lg:text-4xl uppercase border-y-4 py-4">{subHading}</h1>
            
        </div>
    );
};

export default SectionsTitle;