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

    /**
     * 节流
     * @param func Function
     * @param delay Number
     */
    const throttle = (func: Function, delay: number) => {
        let timer = 0

        const _throttle = function () {
            const nowTime = new Date().getTime()
            const remainTime = delay - (nowTime - timer)
            if (remainTime <= 0) {
                func()
                timer = nowTime
            }
        }
        return _throttle
    }

    /**
     * 防抖
     * @param func Function
     * @param delay Number
     */
    function debounce(func: Function, delay: number) {
        var timer: any = null;
        return function () {
            if (timer) clearTimeout(timer);
            timer = setTimeout(function () {
                func();
            }, delay);
        }
    }

    return { formatSongsTime, formatProgress, throttle, debounce }
}