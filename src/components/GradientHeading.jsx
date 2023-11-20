import styles from "../styles"

function GradientHeading({children, gradient}) {
    return (
        <div className="relative ">
            <h1 className={`sm:text-5xl text-4xl text-neutral-900/30 dark:text-neutral-500/20 bg-clip-text ${gradient}`}>
                {children}
            </h1>
            <div className={`absolute inset-0 blur-xl opacity-30 bg-gradient-to-r ${styles.ypGradient} animate-pulse`}/>
        </div>
    )
}

export default GradientHeading