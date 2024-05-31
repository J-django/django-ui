export const useColor = () => {
    /**
     * @param hexColor 颜色值
     * @returns {boolean} 是否深色
     */
    const isDarkColor = (hexColor: string): boolean => {
        hexColor = hexColor.replace('#', ''); // 去除颜色值中的'#'
        const rgb = [
            parseInt(hexColor.substr(0, 2), 16), // 红色通道值
            parseInt(hexColor.substr(2, 2), 16), // 绿色通道值
            parseInt(hexColor.substr(4, 2), 16)  // 蓝色通道值
        ];

        const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
        return luminance <= 0.5;
    }

    return { isDarkColor }
}