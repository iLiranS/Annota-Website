export type Platform = 'macos' | 'windows' | 'linux' | 'android' | 'ios' | 'unknown';

export function getPlatform(): Platform {
    if (typeof window === 'undefined') return 'unknown';

    const ua = navigator.userAgent.toLowerCase();

    // Check for iOS/iPadOS first (including newer iPads that report as Mac)
    if (/ipad|iphone|ipod/.test(ua) || (ua.includes('mac') && navigator.maxTouchPoints > 1)) {
        return 'ios';
    }

    if (ua.includes('macintosh') || ua.includes('mac os x')) return 'macos';
    if (ua.includes('win')) return 'windows';
    if (ua.includes('android')) return 'android';
    if (ua.includes('linux')) return 'linux';

    return 'unknown';
}