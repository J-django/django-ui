export const useDevice = () => {
    /**
     * 是否为移动设备
     * @returns {boolean}
     */
    const isMobile = (): boolean => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    return { isMobile }
}