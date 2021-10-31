// 3rd party library imports
import { Translate16 } from '@carbon/icons-react';
import P5 from 'p5';
import * as Tone from 'tone';
import { couldStartTrivia } from 'typescript';

// project imports
import { Visualizer } from '../Visualizers';


export const WaveformVisualizer2 = new Visualizer(
  'tdwlop',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(35, 17, 97, 255);

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255); p5.translate(width/2, height/2);
    p5.noFill();
   
    const values = analyzer.getValue();
    
    p5.beginShape();
    for (let i = 0; i < 360; i++) {
        
      const amplitude = values[i] as number;
      let r = p5.map(amplitude,0,1,10,300);
      let x = r * p5.cos(i);
      let y = r * p5.sin(i);
      //const x = p5.map(i, 0, values.length - 1, 0, width);
      //const y = height / 2 + amplitude * height;
      // Place vertex
      p5.vertex(x, y);
    }
    p5.endShape();
  },
);
