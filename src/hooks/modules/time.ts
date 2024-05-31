export const useTime = () => {
    /**
     * 格式化音频时间
     * @param duration 
     * @returns {string}
     */
    const formatSongsTime = (duration: any): string => {
        var m = Math.floor(duration % 3600 / 60);
        var s = Math.floor(duration % 3600 % 60);

        var mDisplay = m > 0 ? (m < 10 ? "0" + m : m) : "00";
        var sDisplay = s > 0 ? (s < 10 ? "0" + s : s) : "00";

        return mDisplay + ":" + sDisplay;
    };

    /**
     * 格式化播放进度
     * @param duration 
     * @param currentTime 
     * @returns 
     */
    const formatProgress = (duration: any, currentTime: any): number => {
        const percentage: any = currentTime / duration;
        const currentProgress = percentage * 100;
        return currentProgress;
    };

    return { formatSongsTime, formatProgress }
}