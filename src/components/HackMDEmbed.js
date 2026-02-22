import React from 'react';

/**
 * HackMDEmbed - HackMD 筆記嵌入元件
 *
 * 使用方式：
 * <HackMDEmbed noteId="@wiimax/your-note-id" />
 * <HackMDEmbed noteId="@wiimax/your-note-id" mode="slide" height="600px" />
 * <HackMDEmbed noteId="abcdef123456" title="課程筆記" />
 *
 * HackMD 權限設定（需在 HackMD 上設定）：
 * - Freely: 任何人都可以看
 * - Signed-in: 需要 HackMD 帳號登入才能看
 * - Private/Limited: 僅特定人可以看
 */
export default function HackMDEmbed({
    noteId,
    mode = 'embed', // 'embed' | 'slide' | 'book'
    height = '600px',
    title = 'HackMD 筆記',
    showHeader = true,
}) {
    // Build the embed URL
    const baseUrl = 'https://hackmd.io';
    let embedUrl;

    if (mode === 'slide') {
        embedUrl = `${baseUrl}/${noteId}/slide`;
    } else if (mode === 'book') {
        embedUrl = `${baseUrl}/${noteId}/book`;
    } else {
        embedUrl = `${baseUrl}/${noteId}`;
    }

    // Direct link (non-embed)
    const directUrl = `${baseUrl}/${noteId}`;

    return (
        <div className="hackmd-embed">
            {showHeader && (
                <div className="hackmd-embed__header">
                    <span>📝 {title}</span>
                    <a href={directUrl} target="_blank" rel="noopener noreferrer">
                        在 HackMD 中開啟 ↗
                    </a>
                </div>
            )}
            <iframe
                src={embedUrl}
                style={{
                    width: '100%',
                    height: height,
                    border: 'none',
                }}
                title={title}
                allow="clipboard-write"
                loading="lazy"
            />
        </div>
    );
}
