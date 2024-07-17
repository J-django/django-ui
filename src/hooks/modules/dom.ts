export const useDom = () => {
    /**
     * 请求全屏
     * @param element Element
     * @returns Boolean
     */
    const RequestFullscreen = (element: any): Promise<Boolean> => {
        return new Promise<Boolean>((resolve, reject) => {
            if (!element) reject(false);
            if (element.requestFullscreen) {
                element.requestFullscreen().then(() => resolve(true)).catch(() => reject(false));
            } else if (element.mozRequestFullScreen) { /* Firefox */
                element.mozRequestFullScreen().then(() => resolve(true)).catch(() => reject(false));
            } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                element.webkitRequestFullscreen().then(() => resolve(true)).catch(() => reject(false));
            } else if (element.msRequestFullscreen) { /* IE/Edge */
                element.msRequestFullscreen().then(() => resolve(true)).catch(() => reject(false));
            }
        })
    }

    /**
     * 退出全屏
     * @returns Boolean
     */
    const ExitFullscreen = (): Promise<Boolean> => {
        return new Promise<Boolean>((resolve, reject) => {
            document.exitFullscreen().then(() => {
                resolve(true);
            }).catch(() => {
                reject(false);
            })
        })
    }

    /**
     * 请求画中画
     * @param element Element
     * @returns Boolean
     */
    const RequestPictureInPicture = (element: HTMLVideoElement): Promise<Boolean> => {
        return new Promise<Boolean>((resolve, reject) => {
            element.requestPictureInPicture().then(() => {
                resolve(true);
            }).catch(() => {
                reject(false);
            });
        })
    }

    /**
     * 退出画中画
     * @returns Boolean
     */
    const ExitPictureInPicture = (): Promise<Boolean> => {
        return new Promise<Boolean>((resolve, reject) => {
            document.exitPictureInPicture().then(() => {
                resolve(true);
            }).catch(() => {
                reject(false);
            })
        })
    }

    /**
     * 横屏
     * @returns Boolean
     */
    const LandscapeScreen = (): Promise<Boolean> => {
        return new Promise<Boolean>((resolve, reject) => {
            const orientation: any = screen.orientation;
            if (orientation && orientation.lock) {
                orientation.lock('landscape').then(() => resolve(true)).catch(() => reject(false));
            }
        })
    }

    /**
     * 滚动条宽度
     * @returns Number
     */
    const ScrollbarWidth = () => {
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll';
        document.body.appendChild(outer);

        const inner = document.createElement('div');
        outer.appendChild(inner);
        const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
        document.body.removeChild(outer);

        return scrollbarWidth;
    }

    return {
        RequestFullscreen,
        ExitFullscreen,
        RequestPictureInPicture,
        ExitPictureInPicture,
        LandscapeScreen,
        ScrollbarWidth,
    }
}