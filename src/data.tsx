import { networkZone2 } from './networknodes';
import { user1, user2 } from './usernodes';

const data = [
  user1,
  user1.data.networkZone,
  user1.data.networkZone.data.module,
  user1.data.networkZone.data.module.data.brick,
  user2,
  user2.data.networkZone,
  user2.data.networkZone.data.module,
  user2.data.networkZone.data.module.data.brick,       
  {
    id: 'e1-1',
    source: 'network1',
    target: '1',
    type: 'smoothstep',
    label: 'User Network',
  },
  {
    id: 'e1-2',
    source: 'module1',
    target: 'network1',
    type: 'smoothstep',
    label: 'User Network',
    animated: true
  },
  {
    id: 'e1-3',
    source: 'brick1',
    target: 'module1',
    type: 'smoothstep',
    label: 'User Network',
    animated: true
  },
  {
    id: 'e1-6',
    source: 'network2',
    target: '2',
    type: 'smoothstep',
    label: 'User Network',
  },
  {
    id: 'e1-5',
    source: 'module2',
    target: 'network2',
    type: 'smoothstep',
    label: 'User Network',
    animated: true
  },
  {
    id: 'e1-4',
    source: 'brick2',
    target: 'module2',
    type: 'smoothstep',
    label: 'User Network',
    animated: true
  },
  // {
  //   id: 'e5-2',
  //   source: 'network2',
  //   target: '2',
  //   type: 'smoothstep',
  //   label: 'User Network 2',
  // },
  // {
  //   id: '1',
  //   type: 'input',
  //   data: {
  //     label: (
  //       <NetworkNode1 child={<h3>This is the child</h3>} />
  //     ),
  //   },
  //   position: { x: 250, y: 0 },
  // } as any,
  // {
  //   id: '2',
  //   data: {
  //     label: (
  //       <>
  //         This is a <strong>default node</strong>
  //       </>
  //     ),
  //   },
  //   position: { x: 100, y: 100 },
  // },
  // {
  //   id: '3',
  //   data: {
  //     label: (
  //       <>
  //         This one has a <strong>custom style</strong>
  //       </>
  //     ),
  //   },
  //   position: { x: 400, y: 100 },
  //   style: {
  //     background: '#D6D5E6',
  //     color: '#333',
  //     border: '1px solid #222138',
  //     width: 180,
  //   },
  // },
  // {
  //   id: '4',
  //   position: { x: 250, y: 200 },
  //   data: {
  //     label: 'Another default node',
  //   },
  // },
  // {
  //   id: '5',
  //   data: {
  //     label: 'Node id: 5',
  //   },
  //   position: { x: 250, y: 325 },
  // },
  // {
  //   id: '6',
  //   type: 'output',
  //   data: {
  //     label: (
  //       <>
  //         An <strong>output node</strong>
  //       </>
  //     ),
  //   },
  //   position: { x: 100, y: 480 },
  // },
  // {
  //   id: '7',
  //   type: 'output',
  //   data: { label: 'Another output node' },
  //   position: { x: 400, y: 450 },
  // },
  // { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
  // { id: 'e1-3', source: '1', target: '3' },
  // {
  //   id: 'e3-4',
  //   source: '3',
  //   target: '4',
  //   animated: true,
  //   label: 'animated edge',
  // },
  // {
  //   id: 'e4-5',
  //   source: '1',
  //   target: '5',
  //   animated: true,
  //   arrowHeadType: 'arrowclosed',
  //   label: 'edge with arrow head',
  // },
  // {
  //   id: 'e5-6',
  //   source: '1',
  //   target: '6',
  //   type: 'smoothstep',
  //   label: 'smooth step edge',
  // },
  // {
  //   id: 'e5-7',
  //   source: '1',
  //   target: '7',
  //   type: 'step',
  //   style: { stroke: '#f6ab6c' },
  //   label: 'a step edge',
  //   animated: true,
  //   labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
  // },
];



export default data