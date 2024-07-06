import { motion } from "framer-motion"

const YearBox = ({ text }) => {
    return (
            <motion.div 
                className={`fixed sm:rounded-bl-lg bg-gray-600 text-white z-40 top-0 right-0 w-full sm:w-1/5`}
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ bounce : 0, duration: 5 }}
                >
                    <h1 className="text-1xl	m-2">{text}</h1>
            </motion.div>
    )
}

export default YearBox;