import React, { useEffect, useState } from 'react';
import './App.css';
import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
  Edge,
} from 'react-flow-renderer';
import data from './data';
import { user1 } from './usernodes';
import { Brick, Module, NetworkZone } from './types';
import { module1, module2 } from './modulenodes';
import { brick1 } from './bricknodes';

const onLoad = (reactFlowInstance: any) => {
  reactFlowInstance.fitView();
};

const OverviewFlow = () => {

  const [elements, setElements] = useState(data);
  const onConnect = (params: any) => setElements((els: any) => addEdge(params, els) as any);

  const onUpdate = (event: any, node: any) => {

    const moveNetworkNode = () => {
      node.data.networkZone.position =
      {
        x: node.position.x + 80,
        y: node.position.y + 80
      }
    }

    const moveModule = (module: Module) => {
      module.position =
      {
        x: node.position.x + 60,
        y: node.position.y + 60
      }
    }

    const moveBrick = (brick: Brick, module: Module) => {
      brick.position =
      {
        x: module.position.x + 60,
        y: module.position.y + 60
      }
    }

    if (node.data.parent && node.data.parent.data.module) {
      moveBrick(node.data.parent.data.module.data.brick,
        node)
      setElements(ps => [...ps])
      return
    }

    if (node.id.startsWith("network")) {

      node.data.parent.data.networkZone.position =
      {
        x: node.position.x,
        y: node.position.y
      }
      moveModule(node.data.parent.data.networkZone.data.module)
      moveBrick(node.data.parent.data.networkZone.data.module.data.brick,
        node.data.parent.data.networkZone.data.module)
      setElements(ps => [...ps])
      return
    }

    if (node.id.startsWith("brick")) {
      moveBrick(node, node.data.parent)
      setElements(ps => [...ps])
      return
    }
    moveNetworkNode()
    moveModule(node.data.networkZone.data.module)
    moveBrick(node.data.networkZone.data.module.data.brick, node.data.networkZone.data.module)
    setElements(ps => [...ps])

  }

  return (
    <ReactFlow
      elements={elements}
      onNodeDrag={onUpdate}
      onConnect={onConnect}
      onLoad={onLoad}
      snapToGrid={true}
      snapGrid={[15, 15]}
      style={{ height: "620px", width: "100%" }}
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background as string;
          if (n.type === 'input') return '#0041d0' as string;
          if (n.type === 'output') return '#ff0072' as string;
          if (n.type === 'default') return '#1a192b' as string;

          return '#eee';
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background as string;

          return '#fff';
        }}
        nodeBorderRadius={2}
      />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};

function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <OverviewFlow />
    </div>
  );
}

export default App;
