"use client";

import * as fabric from 'fabric';
import { useRef, useCallback } from 'react';
import { Canvas } from './_components/Canvas';

export default function Page() {
    const ref = useRef<fabric.Canvas>(null);

    const onLoad = useCallback(
        (canvas: fabric.Canvas) => {
            canvas.setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        },
        [ref],
    );

    const deleteSelected = () => {
        ref.current?.remove(...ref.current?.getActiveObjects() || []);
        ref.current?.discardActiveObject();
    }

    const createRect = () => {
        const rect = new fabric.Rect({
            width: 100,
            height: 100,
            fill: 'gray',
            rx: 10,
            ry: 10,
            shadow: { color: 'rgba(0,0,0,0.3)', blur: 4, offsetX: 2, offsetY: 2 } as fabric.Shadow,
        });
        ref.current?.add(rect);
    };

    const createEllipse = () => {
        const ellipse = new fabric.Ellipse({
            rx: 50,
            ry: 50,
            fill: 'gray',
            shadow: { color: 'rgba(0,0,0,0.3)', blur: 4, offsetX: 2, offsetY: 2 } as fabric.Shadow,
        });
        ref.current?.add(ellipse);
    };

    return (
        <div className="relative">
            <div className={`box-border absolute m-2 top-0 left-0 z-10 flex flex-row function-menu [&_button]:function-button`}>
                <button onClick={createRect}>Rect</button>
                <button onClick={createEllipse}>Ellipse</button>
                <button name="delete" onClick={deleteSelected}>Delete</button>
            </div>
            <Canvas ref={ref} onLoad={onLoad} />
        </div>
    );
};