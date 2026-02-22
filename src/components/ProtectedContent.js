import React, { useState, useCallback } from 'react';

/**
 * ProtectedContent - 密碼保護內容元件
 * 
 * 使用方式：
 * <ProtectedContent passwordHash="your-sha256-hash" title="課程內容">
 *   <p>受保護的內容...</p>
 * </ProtectedContent>
 *
 * 產生密碼 hash:
 * 在瀏覽器 console 執行:
 * crypto.subtle.digest('SHA-256', new TextEncoder().encode('your-password'))
 *   .then(buf => Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join(''))
 *   .then(console.log)
 */
export default function ProtectedContent({
    children,
    passwordHash,
    title = '受保護的內容',
    description = '請輸入密碼以查看此內容',
}) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isChecking, setIsChecking] = useState(false);

    // Check sessionStorage on mount
    React.useEffect(() => {
        const key = `protected_${passwordHash?.substring(0, 8)}`;
        if (sessionStorage.getItem(key) === 'unlocked') {
            setIsUnlocked(true);
        }
    }, [passwordHash]);

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            if (!password.trim()) return;

            setIsChecking(true);
            setError('');

            try {
                // Hash the input password with SHA-256
                const encoder = new TextEncoder();
                const data = encoder.encode(password);
                const hashBuffer = await crypto.subtle.digest('SHA-256', data);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

                if (hashHex === passwordHash) {
                    setIsUnlocked(true);
                    const key = `protected_${passwordHash?.substring(0, 8)}`;
                    sessionStorage.setItem(key, 'unlocked');
                } else {
                    setError('密碼不正確，請重新輸入');
                }
            } catch (err) {
                setError('驗證失敗，請重試');
            } finally {
                setIsChecking(false);
            }
        },
        [password, passwordHash]
    );

    if (isUnlocked) {
        return <div className="protected-content">{children}</div>;
    }

    return (
        <div className="protected-content">
            <div className="protected-content__overlay">
                <div className="lock-icon">🔒</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <form onSubmit={handleSubmit} className="protected-content__input-group">
                    <input
                        type="password"
                        className="protected-content__input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="請輸入密碼..."
                        autoComplete="off"
                    />
                    <button
                        type="submit"
                        className="protected-content__submit"
                        disabled={isChecking}
                    >
                        {isChecking ? '驗證中...' : '解鎖'}
                    </button>
                </form>
                {error && <p className="protected-content__error">{error}</p>}
            </div>
        </div>
    );
}
