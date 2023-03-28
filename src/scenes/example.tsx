import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle,Rect,Line,Shape,Txt,Img, View2D} from '@motion-canvas/2d/lib/components';
import {createRef, useScene, useDuration, Reference, finishScene} from '@motion-canvas/core/lib/utils';
import {Color, Vector2} from '@motion-canvas/core/lib/types';
import {tween,easeInCubic,easeOutCubic,easeInOutCubic,map,easeOutElastic,easeInOutElastic,easeInElastic} from '@motion-canvas/core/lib/tweening';
import {all, chain, waitUntil} from '@motion-canvas/core/lib/flow';
import {createSignal, Signal} from '@motion-canvas/core/lib/signals';
import {blur} from '@motion-canvas/2d/lib/partials';

import largeImage from '../../assets/bigImage.jpeg';


export default makeScene2D(function* (view) {
  const bigImage = createRef<Img>();
  const background = createRef<Rect>();

  view.add(
    <Rect ref={background}>
      <Img ref={bigImage} src={largeImage} position={[-400,0]} offset={[-1,0]} scale={[0.1,0.1]} filters={[blur(5)]} />
      <Img ref={bigImage} src={largeImage} position={[-200,-200]}  offset={[-1,0]} scale={[0.1,0.1]} filters={[blur(5)]} />
      <Img ref={bigImage} src={largeImage} position={[ 200,-400]} offset={[-1,0]} scale={[0.1,0.1]} filters={[blur(5)]} />
      <Img ref={bigImage} src={largeImage} position={[ 400,-200]}offset={[-1,0]} scale={[0.1,0.1]} filters={[blur(5)]} />
     
    </Rect>
  );

  yield* bigImage().position.x(100,1);
  yield* waitUntil("end");

    

})