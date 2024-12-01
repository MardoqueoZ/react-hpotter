import CloseIcon from "./icons/CloseIcon";


const Modal = ({isVisible, onClose, content}) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg relative w-full max-w-md h-96 overflow-auto">
                <button 
                    className="absolute top-2 right-2 text-gold"
                    onClick={onClose}
                >
                    <CloseIcon className='w-10 h-10' />
                </button>
                <div className="text-center">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Modal;
