export const useTime = () => {
    /**
     * 格式化音频时间
     * @param duration 
     * @returns {string}
     */
    const formatSongsTime = (duration: any): string => {
        var h = Math.floor(duration / 3600);
        var m = Math.floor((duration % 3600) / 60);
        var s = Math.floor(duration % 3600 % 60);

        let formattedTime;
        if (h > 0) {
            formattedTime = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0')
        } else {
            formattedTime = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0')
        }

        return formattedTime;
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