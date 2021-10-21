import React, { useEffect, useState } from 'react';
import LogicFlow from '@logicflow/core';
import '@logicflow/core/dist/style/index.css';
import { Pane } from './components/pane';
import style from './index.scss';

const initialData = {
  // 节点
  nodes: [
    {
      id: 50,
      type: 'rect',
      x: 100,
      y: 150,
      text: '你好',
    },
    {
      id: 21,
      type: 'circle',
      x: 300,
      y: 150,
    },
  ],
  // 边
  edges: [
    {
      type: 'polyline',
      sourceNodeId: 50,
      targetNodeId: 21,
    },
  ],
};

type Props = Record<string, any>;

export default function Hello(props: Props) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const lf = new LogicFlow({
      // 容器配置
      container: document.querySelector('#logic-flow-container')!,
      // 画布配置
      width: 1000,
      height: 1000,
      background: {
        color: '#F0F0F0',
      },
      // grid: {
      //   type: 'dot',
      //   size: 20,
      // },
      // 工具配置
      textEdit: true,
      isSilentMode: false,
      edgeType: 'line',
      snapline: true,
      // 样式配置
      style: {
        rect: {
          radius: 6,
        },
      },
    });

    lf.render(data);
  });

  return (
    <div className={style.canvas}>
      <Pane />
      <div
        className={style['logic-flow-container']}
        id="logic-flow-container"
      />
    </div>
  );
}
