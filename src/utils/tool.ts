/**
 * 是否深色
 * @param hexColor 颜色值
 * @returns 
 */
export const isDarkColor = (hexColor: string): boolean => {
    hexColor = hexColor.replace('#', ''); // 去除颜色值中的'#'
    const rgb = [
        parseInt(hexColor.substr(0, 2), 16), // 红色通道值
        parseInt(hexColor.substr(2, 2), 16), // 绿色通道值
        parseInt(hexColor.substr(4, 2), 16)  // 蓝色通道值
    ];

    const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
    return luminance <= 0.5;
}

/**
 * 格式化音频时间
 * @param duration 
 */
export const formatSongsTime = (duration: any) => {
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
 */
export const formatProgress = (duration: any, currentTime: any) => {
    const percentage: any = currentTime / duration;
    const currentProgress = percentage * 100;
    return currentProgress;
};

/**
 * 判断设备是否为移动端
 * @returns boolean
 */
export const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}