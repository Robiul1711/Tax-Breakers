"use client";
import { motion } from "framer-motion";
import { StarIcon } from "@/Components/SvgContainer/SvgContainer";

const CommonSubTitle = ({ title }: { title?: string }) => {
    return (
        <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {/* Left Line + Star */}
            <motion.div
                className="flex items-center gap-[2px]"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <motion.span
                    className="w-14 h-[1px] bg-gradient-to-r from-white to-[#095641]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ transformOrigin: "right" }}
                />
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                >
                    <StarIcon />
                </motion.div>
            </motion.div>

            {/* Title */}
            <h2 className=" border border-[#095641] text-[#095641] font-semibold py-1 px-[10px] rounded-[12px] shadow-[0_0_4px_rgba(9,86,65,1)] ">{title}</h2>


            {/* Right Line + Star */}
            <motion.div
                className="flex items-center gap-[2px]"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                >
                    <StarIcon />
                </motion.div>
                <motion.span
                    className="w-[56px] h-[1px] bg-gradient-to-r from-[#095641] to-white"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ transformOrigin: "left" }}
                />
            </motion.div>
        </motion.div>
    );
};

export default CommonSubTitle;