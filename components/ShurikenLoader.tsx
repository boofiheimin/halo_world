import { motion } from 'framer-motion';
import { Shuriken } from './Shuriken';

export const ShurikenLoader = () => {
    return (
        <div className="w-full h-full py-4 grid place-items-center">
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatDelay: 0.5,
                }}
            >
                <Shuriken className="w-10 h-10 fill-current dark:text-kblue text-kanata-gold" />
            </motion.div>
        </div>
    );
};
