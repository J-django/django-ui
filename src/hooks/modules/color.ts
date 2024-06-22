export const useColor = () => {
    /**
     * @param hex 颜色值
     * @returns {boolean} 是否深色
     */
    const isDarkColor = (hex: string): boolean => {
        hex = hex.replace('#', ''); // 去除颜色值中的'#'
        const rgb = [
            parseInt(hex.substr(0, 2), 16), // 红色通道值
            parseInt(hex.substr(2, 2), 16), // 绿色通道值
            parseInt(hex.substr(4, 2), 16)  // 蓝色通道值
        ];

        const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
        return luminance <= 0.5;
    }

    const hexToRgba = (hex: string, alpha: number) => {
        hex = hex.replace('#', '');

        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        if (alpha === undefined) {
            alpha = 1;
        }

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    const splitRGBA = (rgba: string) => {
        rgba = rgba.replace(/\s/g, '');

        const rgbaValues = rgba.substring(5, rgba.length - 1);

        const values = rgbaValues.split(',');

        return {
            r: parseInt(values[0]),
            g: parseInt(values[1]),
            b: parseInt(values[2]),
            a: parseFloat(values[3])
        };
    }

    const rgbaToHex = (r: number, g: number, b: number, alpha: number) => {
        function componentToHex(c: number) {
            const hex = Math.round(c).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }

        function alphaToHex(alpha: number) {
            if (alpha === undefined || alpha === null) {
                return '';
            }
            const hex = Math.round(alpha * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }

        function validateRGB(value: number) {
            if (value < 0) return 0;
            if (value > 255) return 255;
            return Math.round(value);
        }

        // 验证并转换RGB值
        r = validateRGB(r);
        g = validateRGB(g);
        b = validateRGB(b);

        // 构建Hex字符串
        const hexR = componentToHex(r);
        const hexG = componentToHex(g);
        const hexB = componentToHex(b);
        const hexA = alphaToHex(alpha);

        // 返回Hex格式字符串
        return `#${hexR}${hexG}${hexB}${hexA}`;
    }

    return {
        isDarkColor,
        splitRGBA,
        hexToRgba,
        rgbaToHex,
    }
}