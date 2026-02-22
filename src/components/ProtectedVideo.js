import React from 'react';
import ProtectedContent from './ProtectedContent';

/**
 * ProtectedVideo - 帶密碼保護的影音播放元件
 *
 * 使用方式：
 * <ProtectedVideo
 *   videoUrl="https://www.youtube.com/embed/VIDEO_ID"
 *   passwordHash="sha256-hash-of-password"
 *   title="課程影片"
 * />
 *
 * 也可以不加密碼（公開影片）：
 * <ProtectedVideo videoUrl="https://www.youtube.com/embed/VIDEO_ID" title="公開影片" />
 *
 * 支援的影片來源：
 * - YouTube: https://www.youtube.com/embed/VIDEO_ID
 * - Vimeo: https://player.vimeo.com/video/VIDEO_ID
 */
export default function ProtectedVideo({
    videoUrl,
    passwordHash,
    title = '影片',
    description = '請輸入密碼以觀看此影片',
    aspectRatio = '16/9',
}) {
    const videoElement = (
        <div
            style={{
                position: 'relative',
                width: '100%',
                aspectRatio: aspectRatio,
                borderRadius: 'var(--card-radius, 16px)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                margin: '1.5rem 0',
            }}
        >
            <iframe
                src={videoUrl}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                }}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
            />
        </div>
    );

    // If no password hash, show video directly
    if (!passwordHash) {
        return videoElement;
    }

    // Wrap with password protection
    return (
        <ProtectedContent
            passwordHash={passwordHash}
            title={`🔒 ${title}`}
            description={description}
        >
            {videoElement}
        </ProtectedContent>
    );
}
