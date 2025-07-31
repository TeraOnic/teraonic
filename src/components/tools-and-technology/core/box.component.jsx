const Box = ({ img, alt }) => {
    return (
        <div className="px-10 py-3 border rounded-sm">
            <img src={img} alt={alt} className="size-20"/>
        </div>
    );
}

export default Box;