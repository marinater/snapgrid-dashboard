import uuid from 'uuid/v1';

export default [
  {
    connected:true,
    name: 'One Plus 6',
    type:'phone',
    id: uuid(),
    accessLevel: 3,
    lastActive: Date(),
    vmStatus: false
  },
  {
    connected:false,
    name: 'One Plus 7',
    type:'phone',
    id: uuid(),
    accessLevel: 3,
    lastActive: Date(),
    vmStatus: false
  },
  {
    connected:true,
    name: 'Razer Blade',
    type:'computer',
    id: uuid(),
    accessLevel: 1,
    lastActive: Date(),
    vmStatus: true
  },
  {
    connected:false,
    name: 'MacBook Pro',
    type:'computer',
    id: uuid(),
    accessLevel: 1,
    lastActive: Date(),
    vmStatus: false
  },
  {
    connected:true,
    name: 'Cloud VM',
    type:'cloud',
    id: uuid(),
    accessLevel: 1,
    lastActive: Date(),
    vmStatus: false
  },
];
