import React, { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

type AnimationStyle = "style1" | "style2" | "style3" | "style4";

interface TextAnimationProps {
    children: ReactNode;
    animationStyle?: AnimationStyle;
}

const TextAnimation: React.FC<TextAnimationProps> = ({
    children,
    animationStyle = "style2",
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const processChildren = (node: ReactNode, parentKey: string = ''): ReactNode => {
        if (typeof node === "string") {
            // Split by <br> or <br/> tags
            const segments = node.split(/<br\s*\/?>/gi);
            
            return segments.map((segment, segIndex) => {
                // Split by words instead of characters to prevent word breaking
                const words = segment.split(/(\s+)/);
                
                const wordSpans = words.map((word, wordIndex) => {
                    if (word.match(/^\s+$/)) {
                        // Handle whitespace
                        return (
                            <motion.span
                                key={`${parentKey}-seg${segIndex}-word-${wordIndex}`}
                                variants={getCharVariants()}
                                style={{ display: "inline-block", whiteSpace: "pre" }}
                            >
                                {word}
                            </motion.span>
                        );
                    }
                    
                    // For actual words, wrap each character but keep word together
                    const chars = word.split("").map((char, charIndex) => (
                        <motion.span
                            key={`${parentKey}-seg${segIndex}-word${wordIndex}-char-${charIndex}`}
                            variants={getCharVariants()}
                            style={{ display: "inline" }}
                        >
                            {char}
                        </motion.span>
                    ));
                    
                    return (
                        <span
                            key={`${parentKey}-seg${segIndex}-word-${wordIndex}`}
                            style={{ display: "inline-block", whiteSpace: "nowrap" }}
                        >
                            {chars}
                        </span>
                    );
                });
                
                // Add line break after each segment except the last one
                if (segIndex < segments.length - 1) {
                    return (
                        <React.Fragment key={`${parentKey}-seg${segIndex}`}>
                            {wordSpans}
                            <br />
                        </React.Fragment>
                    );
                }
                return <React.Fragment key={`${parentKey}-seg${segIndex}`}>{wordSpans}</React.Fragment>;
            });
        }

        if (React.isValidElement(node)) {
            const element = node as React.ReactElement<{
                children?: ReactNode;
            }>;
            return React.cloneElement(element, {
                children: React.Children.map(element.props.children, (child, idx) =>
                    processChildren(child, `${parentKey}-${idx}`),
                ),
            });
        }

        if (Array.isArray(node)) {
            return node.map((child, index) => (
                <React.Fragment key={`${parentKey}-fragment-${index}`}>
                    {processChildren(child, `${parentKey}-${index}`)}
                </React.Fragment>
            ));
        }

        return node;
    };

    const getCharVariants = (): Variants => {
        switch (animationStyle) {
            case "style1":
                return {
                    hidden: {
                        opacity: 0,
                        y: "90%",
                        rotateX: -40,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        transition: {
                            duration: 1,
                            ease: [0.175, 0.885, 0.32, 1.275],
                        },
                    },
                };

            case "style2":
                return {
                    hidden: {
                        opacity: 0,
                        x: 50,
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                            ease: [0.175, 0.885, 0.32, 1.275],
                        },
                    },
                };

            case "style3":
                return {
                    hidden: {
                        opacity: 0,
                    },
                    visible: {
                        opacity: 1,
                        transition: {
                            duration: 1,
                            ease: [0.175, 0.885, 0.32, 1.275],
                        },
                    },
                };

            case "style4":
                return {
                    hidden: {
                        opacity: 0,
                    },
                    visible: {
                        opacity: 1,
                        transition: {
                            duration: 1,
                            ease: [0.175, 0.885, 0.32, 1.275],
                        },
                    },
                };

            default:
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                };
        }
    };

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.02,
                delayChildren: 0,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {processChildren(children)}
        </motion.div>
    );
};

export default TextAnimation;
