import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from "react-icons/ri";
import { SiAxios } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Keterampilan</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [0, -12, 0] }} // Gerakan ke atas, lalu kembali
          transition={{
            duration: 2, // Durasi animasi (dalam detik)
            repeat: Infinity, // Mengulangi animasi terus-menerus
            repeatType: "loop", // Animasi mengulang tanpa henti
          }}
        >
          <RiReactjsLine className="text-7xl text-yellow-200" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <SiPhp className="text-7xl text-yellow-200" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <SiLaravel className="text-7xl text-yellow-200" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <SiJavascript className="text-7xl text-yellow-200" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <SiAxios className="text-7xl text-yellow-200" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <AiOutlineApi className="text-7xl text-yellow-200" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <SiMysql className="text-7xl text-yellow-200" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
