import React, { FC } from "react";
import { motion } from "framer-motion";

export const ProfileCard: FC = () => {
  return (
    <motion.div
      className="relative w-full max-w-sm h-80 flex items-end p-6 bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg overflow-hidden"
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://placehold.co/400x400/0B1120/38BDF8?text=User)",
        }}
        variants={{ hover: { scale: 1.1, opacity: 0.5 } }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ y: 20, opacity: 1 }}
          variants={{ hover: { y: 0, opacity: 1 } }}
        >
          <h3 className="text-xl font-bold text-white">Alex Doe</h3>
          <p className="text-slate-300 text-sm">Software Engineer</p>
        </motion.div>

        <motion.button
          className="absolute bottom-0 right-0 px-4 py-2 text-sm font-semibold bg-sky-500 text-white rounded-lg"
          initial={{ y: 40, opacity: 0 }}
          variants={{ hover: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        >
          Follow
        </motion.button>
      </div>
    </motion.div>
  );
};

export const profilecardcode = `import React, { FC } from "react";
import { motion } from "framer-motion";

export const ProfileCard: FC = () => {
  return (
    <motion.div
      className="relative w-full max-w-sm h-80 flex items-end p-6 bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg overflow-hidden"
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://placehold.co/400x400/0B1120/38BDF8?text=User)",
        }}
        variants={{ hover: { scale: 1.1, opacity: 0.5 } }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ y: 20, opacity: 1 }}
          variants={{ hover: { y: 0, opacity: 1 } }}
        >
          <h3 className="text-xl font-bold text-white">Alex Doe</h3>
          <p className="text-slate-300 text-sm">Software Engineer</p>
        </motion.div>

        <motion.button
          className="absolute bottom-0 right-0 px-4 py-2 text-sm font-semibold bg-sky-500 text-white rounded-lg"
          initial={{ y: 40, opacity: 0 }}
          variants={{ hover: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        >
          Follow
        </motion.button>
      </div>
    </motion.div>
  );
};`
