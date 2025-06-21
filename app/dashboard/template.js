import * as motion from "motion/react-client"
export default function TemplateLayout({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    )
}