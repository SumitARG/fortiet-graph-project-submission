export interface GraphSource {
  nodes: NodeUnit[];
  edges: Edge[];
}

export interface Edge {
  from: string;
  to: string;
}

export interface NodeUnit {
  id: string | number;
  size?: number | number;
  title: string;
  label: string;
  color: string;
  moduleType?: string;
  group?: string;
  adjacencies?: any[];
}

export interface ContextMenuPosition {
    topPosition: string;
    leftPosition: string;
}
