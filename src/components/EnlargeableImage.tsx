"use client";

import { useState } from "react";
import { Flex } from "@once-ui-system/core";

interface EnlargeableImageProps {
    src: string;
    alt: string;
    maxWidth?: string;
}

export function EnlargeableImage({ src, alt, maxWidth = "600px" }: EnlargeableImageProps) {
    const [isEnlarged, setIsEnlarged] = useState(false);

    return (
        <>
            <Flex
                border="neutral-medium"
                radius="m"
                style={{
                    maxWidth,
                    cursor: "pointer",
                    overflow: "hidden",
                }}
                onClick={() => setIsEnlarged(true)}
            >
                <img
                    src={src}
                    alt={alt}
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        objectFit: "contain",
                        borderRadius: "var(--radius-m)",
                    }}
                    loading="lazy"
                />
            </Flex>

            {/* Enlarge Modal */}
            {isEnlarged && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        cursor: "zoom-out",
                    }}
                    onClick={() => setIsEnlarged(false)}
                >
                    <img
                        src={src}
                        alt={alt}
                        style={{
                            maxWidth: "95%",
                            maxHeight: "95%",
                            objectFit: "contain",
                            borderRadius: "var(--radius-m)",
                        }}
                    />
                </div>
            )}
        </>
    );
}
