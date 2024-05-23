import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import ForceGraph from 'force-graph';
import { ContextMenuPosition, Edge, GraphSource, NodeUnit } from '../../models/graph-data.model';

@Component({
  selector: 'app-correlation-graph',
  templateUrl: './correlation-graph.component.html',
  styleUrl: './correlation-graph.component.scss',
})
export class CorrelationGraphComponent implements OnInit, AfterViewInit {
  
  showContext: boolean = false;
  selectedNode: string|number = "";
  myGraph = ForceGraph();
  contextMenuPosition: ContextMenuPosition = {topPosition:'0px', leftPosition:'0px'};


  // Custom Inputs to the Component
  @Input('graphSourceData') graphSourceData: GraphSource

  // Reference to the graph 
  @ViewChild('graphDiv') graphDiv: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  /**
   * getMappedNodes
   * @param nodes 
   * @returns list of nodes formatted for ForceGraph library input
   */
  getMappedNodes(nodes:NodeUnit[]){
    return nodes.map((item:NodeUnit) => {
      return {
        id: item.id,
        name: item.title,
        color: item.color,
        title: item.label,
        val: item.size ? item.size : 10,
      };
    });
  }

  /**
   * getMappedLinks
   * @param links 
   * @returns list of edges formatted for ForceGraph library input
   */
  getMappedLinks(links:Edge[]){
    return links.map((item:Edge) => {
      return { source: item.from, target: item.to };
    });
  }

  /**
   * ngAfterViewInit
   * Graph is bound to the element after the Initialization of the componentview
   * nodeCanvasObject is used to customize the look of the Node
   * onNodeRightClick is used to attach right click event on each Node
   */
  ngAfterViewInit(): void {
    this.myGraph(this.graphDiv.nativeElement)
      .graphData({
        nodes: this.getMappedNodes(this.graphSourceData.nodes),
        links: this.getMappedLinks(this.graphSourceData.edges),
      })
      .nodeCanvasObject((node, ctx) => this.nodePaint(node, ctx))
      .onNodeRightClick((node, e) => {
        // Here we define the position of the context menu and open the context menu
        this.selectedNode = node.id
        this.showContext = true;
        this.contextMenuPosition = {
          topPosition:e.y + 'px',
          leftPosition:e.x + 'px'
        }
      });
  }

  /**
   * nodePaint
   * Size of the Node Circle defaults to 10
   * This paints the node as (Node circle with custom color followed 
   * by label of the node menioned below it)
   * @param node 
   * @param ctx 
   */
  nodePaint(node, ctx){
    ctx.fillStyle = node.color;
    ctx.beginPath(); 
    ctx.arc(node.x, node.y, node.val/2, 0, 2 * Math.PI, false); 
    ctx.fill();
    ctx.font = '3px Sans-Serif'; 
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle'; 
    ctx.fillText(node.title, node.x, node.y + node.val/1.5);
  }

  /**
   * getSelectedNodeInfo
   * @param infoType 
   * @returns the name(heading) of the context menu i.e. selected node name
   */
  getSelectedNodeInfo(infoType):string {
    if (infoType == 'name'){
      if(this.selectedNode != ""){
        return this.graphSourceData.nodes.find(item => item.id == this.selectedNode).title
      }
      else{
        return "";
      }
    }
    else {
      return "";
    }
  }

  /**
   * deleteOrDetachNode
   * Actions to be implemented on Graph nodes and edges are executed here
   * @param actionType 
   */
  deleteOrDetachNode(actionType){
    this.graphSourceData.edges = this.graphSourceData.edges.filter(item => (item.from != this.selectedNode) && (item.to != this.selectedNode))
    if(actionType == 'delete'){
      this.graphSourceData.nodes = this.graphSourceData.nodes.filter(item => item.id != this.selectedNode);
      this.selectedNode = ""
    }
    this.closeMenu();
    this.myGraph.graphData({
      nodes:this.getMappedNodes(this.graphSourceData.nodes),
      links:this.getMappedLinks(this.graphSourceData.edges)
    })
  }

  /**
   * closeMenu
   * close the context menu
   */
  closeMenu(){
    this.showContext = false;
  }

}
