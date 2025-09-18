import qandAFrame from "./QandAFrame.svg"

const QandAFrame = () => {
    return (
        <div className="w-full h-full">
            <img
                src={qandAFrame}
                alt="Q and A Frame"
                className="w-full h-full object-cover rounded-tl-xl md:rounded-bl-xl"
            />
        </div>
    );
};

export default QandAFrame;
