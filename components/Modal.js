import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const backdrop = {
  show: { opacity: 1 },
  hidden: { opacity: 0 },
}

const Modal = ({ showModal, setShowModal, children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="show"
          onClick={() => setShowModal(false)}
          className={'fixed  flex justify-center items-center inset-0 bg-black bg-opacity-75 z-50'}
        >
          <div className="p-20 rounded w-[1200px] max-w-full">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
