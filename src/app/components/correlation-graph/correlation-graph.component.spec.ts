import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationGraphComponent } from './correlation-graph.component';
import { AppModule } from '../../app.module';
import { GraphSource } from '../../models/graph-data.model';

describe('CorrelationGraphComponent', () => {
  let component: CorrelationGraphComponent;
  let fixture: ComponentFixture<CorrelationGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AppModule],
      declarations: [CorrelationGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorrelationGraphComponent);
    component = fixture.componentInstance;
    let inputJson:GraphSource = {
      nodes: [
        {
          id: '/api/3/indicators/8914d9f6-bade-4f59-97d1-ac1b9049bb4c',
          moduleType: 'indicators',
          group: 'indicators',
          title: '49424',
          label: '49424',
          color: '#6a9169',
        },
        {
          id: '/api/3/indicators/aff51511-0537-4d8c-9702-e534578fbda0',
          moduleType: 'indicators',
          group: 'indicators',
          title: '4444',
          label: '4444',
          color: '#6a9169',
        },
        {
          id: '/api/3/alerts/949d4fe7-adeb-4333-8fed-43af72c7668f',
          moduleType: 'alerts',
          group: 'alerts',
          title: 'Metasploit Meterpreter Connection Attempt',
          label: 'Metasploit Meterpret...',
          color: '#e31b1d',
        },
        {
          id: '/api/3/incidents/c279bf4c-e565-4544-87b4-9681490ab072',
          size: 30,
          title: 'Metasploit Meterpreter Connection Attempt',
          label: 'Metasploit Meterpret...',
          color: '#D2AC1A',
          moduleType: 'incidents',
          group: 'incidents',
          adjacencies: [],
        },
        {
          id: '/api/3/alerts/949d4fe7-adeb-4333-8fed-43af72c76',
          moduleType: 'alerts',
          group: 'alerts',
          title: 'Metasploit Meterpreter Connection Attempt 1',
          label: 'Metasploit Meterpret...',
          color: '#e31b1d',
        },
      ],
      edges: [
        {
          from: '/api/3/incidents/c279bf4c-e565-4544-87b4-9681490ab072',
          to: '/api/3/alerts/949d4fe7-adeb-4333-8fed-43af72c7668f',
        },
        {
          from: '/api/3/alerts/949d4fe7-adeb-4333-8fed-43af72c7668f',
          to: '/api/3/indicators/8914d9f6-bade-4f59-97d1-ac1b9049bb4c',
        },
        {
          from: '/api/3/alerts/949d4fe7-adeb-4333-8fed-43af72c7668f',
          to: '/api/3/indicators/aff51511-0537-4d8c-9702-e534578fbda0',
        },
        {
          from: '/api/3/incidents/c279bf4c-e565-4544-87b4-9681490ab072',
          to: '/api/3/indicators/8914d9f6-bade-4f59-97d1-ac1b9049bb4c',
        },
        {
          from: '/api/3/incidents/c279bf4c-e565-4544-87b4-9681490ab072',
          to: '/api/3/indicators/aff51511-0537-4d8c-9702-e534578fbda0',
        },
        {
          from: '/api/3/incidents/c279bf4c-e565-4544-87b4-9681490ab072',
          to: '/api/3/alerts/949d4fe7-adeb-4333-8fed-43af72c76',
        },
      ],
    } 
    component.graphSourceData = inputJson;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getSelectedNodeInfo when node is selected', () => {
    component.selectedNode = "/api/3/indicators/8914d9f6-bade-4f59-97d1-ac1b9049bb4c";
    fixture.detectChanges();
    let nodeName = component.getSelectedNodeInfo('name');
    expect(nodeName).toBe('49424')
  })

  it('should getSelectedNodeInfo when some wrong info is demanded', () => {
    let nodeName = component.getSelectedNodeInfo('');
    expect(nodeName).toBe('')
  })

  it('should delete node and edges from the list', () => {
    component.selectedNode = "/api/3/indicators/8914d9f6-bade-4f59-97d1-ac1b9049bb4c"
    component.deleteOrDetachNode('delete');
    expect(component.graphSourceData.nodes.length).toBe(4)
  })
});
