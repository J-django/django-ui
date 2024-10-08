import type { PropType, CSSProperties } from 'vue'
import { computed } from 'vue'

export interface DJWatermarkPropsType {
    text: string | string[];
    color: string;
    fontSize: number;
    fontWeight: number | string;
    fontFamily: string;
    gap: number;
    rotate: number;
    zIndex: number;
}

export const DJWatermarkOptions = {
    name: "dj-watermark"
};

export const DJWatermarkProps = {
    text: {
        type: [String, Array] as PropType<string | Array<string>>,
        default: ""
    },
    color: {
        type: String as PropType<string>,
        default: "#dfdfdf"
    },
    fontSize: {
        type: Number as PropType<number>,
        default: 16
    },
    fontWeight: {
        type: Number as PropType<number>,
        default: 500
    },
    fontFamily: {
        type: String as PropType<string>,
        default: "Arial"
    },
    gap: {
        type: Number as PropType<number>,
        default: 125
    },
    rotate: {
        type: Number as PropType<number>,
        default: -22
    },
    zIndex: {
        type: Number as PropType<number>,
        default: 9
    },
};

export const useWatermark = (props: DJWatermarkPropsType) => {
    const WatermarkStyle = computed(() => {
        const base64 = CreateWatermark({
            text: props.text,
            color: props.color,
            fontSize: props.fontSize,
            fontWeight: props.fontWeight,
            fontFamily: props.fontFamily,
            gap: props.gap,
            rotate: props.rotate,
        } as DJWatermarkPropsType);

        return {
            backgroundImage: `url(${base64})`,
            backgroundSize: `${props.gap * props.fontSize / 10}px`,
            backgroundRepeat: "repeat",
            backgroundPosition: "0px 0px",
            zIndex: props.zIndex
        } as CSSProperties;
    })

    const CreateWatermark = (options: DJWatermarkPropsType): string => {
        const { text, color, fontSize, fontWeight, fontFamily, gap, rotate } = options;
        let lines = [] as string[];

        if (typeof text === 'string') {
            lines.push(text)
        } else if (Array.isArray(text)) {
            lines = text;
        }

        // 创建一个临时canvas用于绘制水印
        const canvas = document.createElement('canvas');
        const ctx: any = canvas.getContext('2d');

        // 计算每行文本的最大宽度
        const textWidth = Math.max(...lines.map(line => ctx.measureText(line).width));
        const lineHeight = fontSize! * 1.25; // 行高
        const textHeight = lineHeight * lines.length;

        // 计算旋转后文本区域的对角线长度，确保旋转后不会超出canvas范围
        const diagonal = Math.sqrt(textWidth * textWidth + textHeight * textHeight);
        const finalWidth = diagonal + gap!;
        const finalHeight = diagonal + gap!;

        // 设置canvas大小并提升DPI
        const scaleFactor = 300 / 96; // 假设默认DPI为96

        canvas.width = finalWidth * scaleFactor;
        canvas.height = finalHeight * scaleFactor;

        // 缩放上下文以提升分辨率
        ctx.scale(scaleFactor, scaleFactor);

        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 设置字体属性
        ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // 旋转画布
        ctx.save();
        ctx.translate(finalWidth / 2, finalHeight / 2);
        ctx.rotate(rotate! * Math.PI / 180);

        // 绘制每一行文本
        lines.forEach((line, index) => {
            ctx.fillText(line, 0, (index - (lines.length - 1) / 2) * lineHeight);
        });

        ctx.restore();

        // 返回canvas作为背景图像
        return canvas.toDataURL('image/png');
    }

    return {
        WatermarkStyle,
        CreateWatermark
    }
}