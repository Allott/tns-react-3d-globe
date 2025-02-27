import { motion, AnimatePresence } from "framer-motion"

const InfoBox = ({ name, content, setDisplayData, displayData }) => {
return (
    <AnimatePresence>
        {displayData && (
            <motion.div 
                className={`fixed sm:rounded-tl-lg bg-gray-800 text-white z-40 bottom-0 right-0 w-full sm:w-1/3 h-1/3 lg:h-1/2`}
                initial={{ y: "calc(100vh + 50%)" }}
                animate={{ y: 0}}
                exit={{ y: "calc(100vh + 50%)" }}
                transition={{ bounce : 0, duration: 0.8 }}
            >
                <div className="flex flex-row  sm:rounded-tl-lg justify-between bg-gray-600 text-lg items-center">
                    <h1 className="mx-2">{'>> ' + name}</h1>
                    <button className='p-2 px-4 hover:text-red-600' onClick={() => setDisplayData(null)}>X</button>
                </div>
                <div className="overflow-auto m-4 h-4/5">
                    {content?.map((item, index) => (
                        <p key={index} className={item?.class ? item?.class : 'text-white pb-2'}>
                            {item?.text}
                        </p>
                    ))}
                </div>
            </motion.div>
        )}
    </AnimatePresence>
    
)};

export default InfoBox;